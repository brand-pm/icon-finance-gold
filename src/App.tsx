import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type SupportedLanguage } from "@/i18n/config";
import Index from "./pages/Index.tsx";

const About = lazy(() => import("./pages/About.tsx"));
const Expertise = lazy(() => import("./pages/Expertise.tsx"));
const WealthManagement = lazy(() => import("./pages/services/WealthManagement.tsx"));
const FamilyOffice = lazy(() => import("./pages/services/FamilyOffice.tsx"));
const StructuringTax = lazy(() => import("./pages/services/StructuringTax.tsx"));
const MAConsulting = lazy(() => import("./pages/services/MAConsulting.tsx"));
const SpecialSolutions = lazy(() => import("./pages/services/SpecialSolutions.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Insights = lazy(() => import("./pages/Insights.tsx"));
const InsightArticle = lazy(() => import("./pages/InsightArticle.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy.tsx"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy.tsx"));
const Terms = lazy(() => import("./pages/legal/Terms.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

/**
 * Validates `:lang` param. If invalid, redirects to default lang preserving the rest of the path.
 * Also keeps i18n.language and <html lang> in sync.
 */
const LanguageGate = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  const isValid = lang && (SUPPORTED_LANGUAGES as readonly string[]).includes(lang);

  useEffect(() => {
    if (isValid && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    if (isValid) {
      document.documentElement.lang = lang as string;
    }
  }, [lang, isValid, i18n]);

  if (!isValid) {
    // Strip the bad lang segment, redirect to default
    const rest = location.pathname.split("/").slice(2).join("/");
    return <Navigate to={`/${DEFAULT_LANGUAGE}${rest ? "/" + rest : ""}`} replace />;
  }

  return <>{children}</>;
};

/**
 * Detects browser language and redirects "/" to "/{lang}".
 */
const RootRedirect = () => {
  let target: SupportedLanguage = DEFAULT_LANGUAGE;
  try {
    const stored = localStorage.getItem("i18nextLng");
    if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
      target = stored as SupportedLanguage;
    } else {
      const nav = navigator.language.slice(0, 2).toLowerCase();
      if ((SUPPORTED_LANGUAGES as readonly string[]).includes(nav)) {
        target = nav as SupportedLanguage;
      }
    }
  } catch {
    /* ignore */
  }
  return <Navigate to={`/${target}`} replace />;
};

const LocalizedRoutes = () => (
  <LanguageGate>
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="services/wealth-management" element={<WealthManagement />} />
        <Route path="services/family-office" element={<FamilyOffice />} />
        <Route path="services/structuring-tax" element={<StructuringTax />} />
        <Route path="services/ma-consulting" element={<MAConsulting />} />
        <Route path="services/special-solutions" element={<SpecialSolutions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightArticle />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cookie-policy" element={<CookiePolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </LanguageGate>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path=":lang/*" element={<LocalizedRoutes />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
