import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGES, type SupportedLanguage, DEFAULT_LANGUAGE } from "./config";

/**
 * Returns the current language from URL (`/en/...` → `en`).
 * Falls back to default if URL has no lang prefix.
 */
export function useCurrentLanguage(): SupportedLanguage {
  const { pathname } = useLocation();
  const seg = pathname.split("/")[1];
  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(seg)) return seg as SupportedLanguage;
  return DEFAULT_LANGUAGE;
}

/**
 * Builds a localized path. Pass an app path (e.g. "/about") and it returns "/{lang}/about".
 * If the path already starts with a language prefix, it's preserved.
 */
export function useLocalizedPath() {
  const lang = useCurrentLanguage();
  return (path: string) => {
    if (!path.startsWith("/")) return path;
    // Already prefixed?
    const seg = path.split("/")[1];
    if ((SUPPORTED_LANGUAGES as readonly string[]).includes(seg)) return path;
    return `/${lang}${path === "/" ? "" : path}`;
  };
}

/**
 * Switch the active language while preserving the current sub-path.
 */
export function useSwitchLanguage() {
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();
  const { i18n } = useTranslation();

  return (next: SupportedLanguage) => {
    const parts = pathname.split("/").filter(Boolean);
    const hasLang = (SUPPORTED_LANGUAGES as readonly string[]).includes(parts[0]);
    const rest = hasLang ? parts.slice(1) : parts;
    const newPath = `/${next}${rest.length ? "/" + rest.join("/") : ""}`;
    i18n.changeLanguage(next);
    try {
      localStorage.setItem("i18nextLng", next);
    } catch {
      /* ignore */
    }
    navigate(newPath + search + hash);
  };
}
