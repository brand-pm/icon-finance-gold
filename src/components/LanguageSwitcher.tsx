import { useEffect, useRef, useState } from "react";
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
        <div className="text-[10px] uppercase tracking-[0.24em] text-white/40 mb-3">
          Language
        </div>
        <div className="flex items-center gap-5">
          {SUPPORTED_LANGUAGES.map((code) => {
            const active = code === lang;
            return (
              <button
                key={code}
                onClick={() => switchLang(code)}
                className={`text-[12px] uppercase tracking-[0.2em] transition-colors ${
                  active ? "text-gold" : "text-white/50 hover:text-white"
                }`}
              >
                {LANGUAGE_LABELS[code].code}
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
        className="text-[13px] uppercase tracking-wider font-medium text-white/70 hover:text-gold transition-colors duration-300"
        aria-label="Change language"
      >
        {LANGUAGE_LABELS[lang].code}
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-4 flex flex-col bg-navy/95 backdrop-blur-sm border border-white/5 z-50 min-w-[90px]">
          {SUPPORTED_LANGUAGES.map((code) => {
            const active = code === lang;
            return (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`px-4 py-2.5 text-[13px] uppercase tracking-wider font-medium text-left transition-colors duration-300 ${
                  active ? "text-gold" : "text-white/60 hover:text-white"
                }`}
              >
                {LANGUAGE_LABELS[code].code}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
