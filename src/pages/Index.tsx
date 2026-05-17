import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesIntro from "../components/ServicesIntro";
import Services from "../components/Services";
import PortfolioManagement from "../components/services/PortfolioManagement";
import WhyUs from "../components/WhyUs";
import ScenariosOverviewSection from "../components/ScenariosOverviewSection";
import Insights from "../components/Insights";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const { t } = useTranslation();
  const localize = useLocalizedPath();
  const stepKeys = ["s1", "s2", "s3", "s4"] as const;

  return (
    <>
      <Seo pageKey="home" includeOrganizationSchema />
      <Header />
      <Hero />
      <ServicesIntro />
      <Services />
      <ScenariosOverviewSection />
      <PortfolioManagement
        title={t("homeProcess.title")}
        description={t("homeProcess.description")}
        steps={stepKeys.map((k, i) => ({
          number: String(i + 1),
          title: t(`homeProcess.steps.${k}.title`),
          timeline: t(`homeProcess.steps.${k}.timeline`),
          result: "",
          activities: [t(`homeProcess.steps.${k}.activity`)],
        }))}
        ctaLink={localize("/contact")}
        ctaLabel={t("homeProcess.cta")}
        ctaVariant="filled"
      />
      <WhyUs />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
