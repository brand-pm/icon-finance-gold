import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import plCommon from "./locales/pl/common.json";
import ukCommon from "./locales/uk/common.json";
import ruCommon from "./locales/ru/common.json";

export const SUPPORTED_LANGUAGES = ["en", "pl", "uk", "ru"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

export const LANGUAGE_LABELS: Record<SupportedLanguage, { code: string; name: string }> = {
  en: { code: "EN", name: "English" },
  pl: { code: "PL", name: "Polski" },
  uk: { code: "UA", name: "Українська" },
  ru: { code: "RU", name: "Русский" },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      pl: { common: plCommon },
      uk: { common: ukCommon },
      ru: { common: ruCommon },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;
