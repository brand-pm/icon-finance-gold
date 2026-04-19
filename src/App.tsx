import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Expertise from "./pages/Expertise.tsx";
import WealthManagement from "./pages/services/WealthManagement.tsx";
import FamilyOffice from "./pages/services/FamilyOffice.tsx";
import StructuringTax from "./pages/services/StructuringTax.tsx";
import MAConsulting from "./pages/services/MAConsulting.tsx";
import SpecialSolutions from "./pages/services/SpecialSolutions.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
