import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

// Lazy-loaded routes (split into separate chunks)
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
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-navy flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/services/wealth-management" element={<WealthManagement />} />
            <Route path="/services/family-office" element={<FamilyOffice />} />
            <Route path="/services/structuring-tax" element={<StructuringTax />} />
            <Route path="/services/ma-consulting" element={<MAConsulting />} />
            <Route path="/services/special-solutions" element={<SpecialSolutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
