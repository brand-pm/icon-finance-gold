import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

const STORAGE_KEY = "cookieConsent";
const COOKIE_NAME = "cookieConsent";
const ONE_YEAR_DAYS = 365;

export type CookieCategory = "essential" | "analytics" | "preferences";

export interface CookiePreferences {
  essential: true;
  analytics: boolean;
  preferences: boolean;
  timestamp: string;
  version: 1;
}

const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
  preferences: false,
  timestamp: "",
  version: 1,
};

const setCookie = (name: string, value: string, days: number) => {
  try {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
    /* noop */
  }
};

const readStoredPrefs = (): CookiePreferences | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.version === 1) {
      return { ...DEFAULT_PREFS, ...parsed, essential: true };
    }
  } catch {
    /* noop */
  }
  return null;
};

const persist = (prefs: CookiePreferences) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* noop */
  }
  setCookie(COOKIE_NAME, JSON.stringify(prefs), ONE_YEAR_DAYS);
  window.dispatchEvent(new CustomEvent("cookieconsent:change", { detail: prefs }));
};

const Toggle = ({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-300 ${
      disabled
        ? "bg-gold/40 cursor-not-allowed"
        : checked
        ? "bg-gold"
        : "bg-white/15 hover:bg-white/25"
    }`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
        checked ? "translate-x-[22px]" : "translate-x-[2px]"
      }`}
    />
  </button>
);

interface CategoryRowProps {
  title: string;
  desc: string;
  badge: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}

const CategoryRow = ({ title, desc, badge, checked, onChange, disabled }: CategoryRowProps) => (
  <div className="flex items-start justify-between gap-5 py-5 border-b border-white/10 last:border-b-0">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <h4 className="text-white text-[15px] font-medium tracking-wide">{title}</h4>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold/80 border border-gold/30 px-2 py-0.5 rounded-sm">
          {badge}
        </span>
      </div>
      <p className="text-white/55 text-[13px] leading-relaxed">{desc}</p>
    </div>
    <Toggle
      checked={checked}
      onChange={(v) => onChange?.(v)}
      disabled={disabled}
      label={title}
    />
  </div>
);

const CookieConsent = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"consent" | "details">("consent");
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFS);

  // Init: open if no stored prefs
  useEffect(() => {
    const stored = readStoredPrefs();
    if (!stored) {
      // Slight delay so it doesn't flash before route mounts
      const t = window.setTimeout(() => setOpen(true), 600);
      return () => window.clearTimeout(t);
    } else {
      setPrefs(stored);
    }
  }, []);

  // Listen for external "open settings" requests (e.g. footer link)
  useEffect(() => {
    const handler = () => {
      const stored = readStoredPrefs();
      if (stored) setPrefs(stored);
      setTab("consent");
      setOpen(true);
    };
    window.addEventListener("cookieconsent:open", handler);
    return () => window.removeEventListener("cookieconsent:open", handler);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close (only if user has saved before)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && readStoredPrefs()) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const acceptAll = () => {
    const next: CookiePreferences = {
      essential: true,
      analytics: true,
      preferences: true,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    persist(next);
    setPrefs(next);
    setOpen(false);
  };

  const rejectAll = () => {
    const next: CookiePreferences = {
      essential: true,
      analytics: false,
      preferences: false,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    persist(next);
    setPrefs(next);
    setOpen(false);
  };

  const savePreferences = () => {
    const next: CookiePreferences = {
      ...prefs,
      essential: true,
      timestamp: new Date().toISOString(),
      version: 1,
    };
    persist(next);
    setPrefs(next);
    setOpen(false);
  };

  const categories = useMemo(
    () =>
      [
        {
          key: "essential" as CookieCategory,
          title: t("cookieConsent.categories.essential.title"),
          desc: t("cookieConsent.categories.essential.desc"),
          badge: t("cookieConsent.alwaysOn"),
          disabled: true,
        },
        {
          key: "analytics" as CookieCategory,
          title: t("cookieConsent.categories.analytics.title"),
          desc: t("cookieConsent.categories.analytics.desc"),
          badge: t("cookieConsent.optional"),
        },
        {
          key: "preferences" as CookieCategory,
          title: t("cookieConsent.categories.preferences.title"),
          desc: t("cookieConsent.categories.preferences.desc"),
          badge: t("cookieConsent.optional"),
        },
      ],
    [t]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        aria-hidden
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[640px] max-h-[90vh] flex flex-col overflow-hidden rounded-md border border-gold/15 shadow-2xl animate-fade-up"
        style={{
          background: "linear-gradient(180deg, #0F162D 0%, #0A0F1E 100%)",
        }}
      >
        {/* Decorative top gold line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Header */}
        <div className="px-7 md:px-9 pt-8 pb-5 text-center">
          <p className="eyebrow text-gold mb-3 text-[11px]">{t("cookieConsent.eyebrow")}</p>
          <h2
            id="cookie-consent-title"
            className="text-gold font-light leading-tight"
            style={{ fontSize: "clamp(22px, 2.6vw, 28px)" }}
          >
            {t("cookieConsent.title")}
          </h2>
          {/* Gold separator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="h-px w-8 bg-gold/40" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <span className="block w-2.5 h-2.5 rotate-45 bg-gold" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <span className="h-px w-8 bg-gold/40" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 border-b border-white/10 px-7">
          {(["consent", "details"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`relative pb-3 pt-1 text-[12px] uppercase tracking-[0.24em] transition-colors ${
                tab === id ? "text-gold" : "text-white/50 hover:text-white/80"
              }`}
            >
              {t(`cookieConsent.tabs.${id}`)}
              {tab === id && (
                <span className="absolute left-0 right-0 -bottom-px h-px bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 md:px-9 py-6">
          {tab === "consent" ? (
            <div className="space-y-5">
              <p className="text-white/70 text-[14px] leading-relaxed">
                {t("cookieConsent.intro")}
              </p>
              <p className="text-white/55 text-[13px] leading-relaxed">
                {t("cookieConsent.policyLine")}{" "}
                <Link
                  to={localize("/cookie-policy")}
                  onClick={() => setOpen(false)}
                  className="text-gold hover:underline"
                >
                  {t("cookieConsent.policyLink")}
                </Link>
                .
              </p>
            </div>
          ) : (
            <div>
              {categories.map((c) => (
                <CategoryRow
                  key={c.key}
                  title={c.title}
                  desc={c.desc}
                  badge={c.badge}
                  checked={c.key === "essential" ? true : prefs[c.key]}
                  disabled={c.disabled}
                  onChange={(v) =>
                    setPrefs((p) => ({ ...p, [c.key]: v } as CookiePreferences))
                  }
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="border-t border-white/10 bg-black/20 px-7 md:px-9 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={rejectAll}
            className="text-[12px] uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors"
          >
            {t("cookieConsent.actions.reject")}
          </button>
          <div className="flex flex-col sm:flex-row gap-3">
            {tab === "details" && (
              <button
                type="button"
                onClick={savePreferences}
                className="btn-outline-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.22em]"
              >
                {t("cookieConsent.actions.save")}
              </button>
            )}
            <button
              type="button"
              onClick={acceptAll}
              className="btn-gold px-6 py-2.5 text-[12px] uppercase tracking-[0.22em]"
            >
              {t("cookieConsent.actions.acceptAll")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
