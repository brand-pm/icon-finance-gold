import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/i18n/config";
import { useCurrentLanguage, useSwitchLanguage } from "@/i18n/useLocalizedPath";

interface Props {
  variant?: "desktop" | "mobile";
}

const LanguageSwitcher = ({ variant = "desktop" }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lang = useCurrentLanguage();
  const switchLang = useSwitchLanguage();
  const { i18n } = useTranslation();

  // Sync i18n.language with URL on mount/route changes
  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
  }, [lang, i18n]);

  // Outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const handleSelect = (code: SupportedLanguage) => {
    setOpen(false);
    switchLang(code);
  };

  if (variant === "mobile") {
    return (
      <div className="px-6 py-4">
        <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">
          {LANGUAGE_LABELS[lang].name}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {SUPPORTED_LANGUAGES.map((code) => {
            const active = code === lang;
            return (
              <button
                key={code}
                onClick={() => switchLang(code)}
                className={`flex items-center justify-between px-3 py-2.5 rounded border text-[13px] transition-colors ${
                  active
                    ? "border-gold/60 bg-gold/10 text-gold"
                    : "border-white/10 text-white/80 hover:border-gold/40"
                }`}
              >
                <span>{LANGUAGE_LABELS[code].name}</span>
                <span className="text-[11px] opacity-70">{LANGUAGE_LABELS[code].code}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-white/70 hover:text-gold transition-colors text-[13px]"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span>{LANGUAGE_LABELS[lang].code}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-3 min-w-[180px] bg-navy border border-white/10 shadow-xl rounded-md overflow-hidden z-50">
          {SUPPORTED_LANGUAGES.map((code) => {
            const active = code === lang;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-[13px] transition-colors ${
                  active ? "text-gold bg-white/5" : "text-white/80 hover:text-gold hover:bg-white/5"
                }`}
              >
                <span>{LANGUAGE_LABELS[code].name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] opacity-60">{LANGUAGE_LABELS[code].code}</span>
                  {active && <Check size={12} />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
