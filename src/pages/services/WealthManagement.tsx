import { useTranslation } from "react-i18next";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/services/ServiceHero";
import WhoBenefits from "../../components/services/WhoBenefits";
import Philosophy from "../../components/services/Philosophy";
import ResultsStats from "../../components/services/ResultsStats";
import InvestmentStrategies from "../../components/services/InvestmentStrategies";
import InvestmentOpportunities from "../../components/services/InvestmentOpportunities";
import PortfolioManagement from "../../components/services/PortfolioManagement";
import ServiceFAQ from "../../components/services/ServiceFAQ";
import ServiceCTA from "../../components/services/ServiceCTA";
import ClientScenariosSection from "../../components/ClientScenariosSection";
import { wealthManagementScenarios } from "../../data/clientScenarios";
import infinityImg from "../../assets/infinity-symbol.png";
import strategyConservative from "../../assets/strategy-conservative.jpg";
import strategyBalanced from "../../assets/strategy-balanced.jpg";
import strategyGrowth from "../../assets/strategy-growth.jpg";
import strategyOpportunistic from "../../assets/strategy-opportunistic.jpg";

const strategyImages = [strategyConservative, strategyBalanced, strategyGrowth, strategyOpportunistic];

const WealthManagement = () => {
  const { t } = useTranslation();
  const base = "servicePages.wealthManagement";

  const hero = t(`${base}.hero`, { returnObjects: true }) as { eyebrow: string; title: string; description: string; imageAlt: string };
  const whoBenefits = t(`${base}.whoBenefits`, { returnObjects: true }) as { sectionTitle: string; items: { title: string; description: string }[] };
  const philosophy = t(`${base}.philosophy`, { returnObjects: true }) as { sectionTitle: string; subtitle: string; items: { number: string; title: string; description: string }[] };
  const results = t(`${base}.results`, { returnObjects: true }) as { eyebrow: string; title: string; items: { main: string; label: string }[] };
  const strategies = t(`${base}.strategies`, { returnObjects: true }) as { name: string; description: string; items: string[] }[];
  const opportunities = t(`${base}.opportunities`, { returnObjects: true }) as { name: string; dark?: boolean; items: { title: string; description: string }[] }[];
  const portfolio = t(`${base}.portfolio`, { returnObjects: true }) as { title: string; description: string; steps: { title: string; timeline: string; result: string; activities: string[] }[] };
  const faq = t(`${base}.faq`, { returnObjects: true }) as { question: string; answer: string }[];
  const cta = t(`${base}.cta`, { returnObjects: true }) as { title: string; description: string };

  return (
    <div className="min-h-screen">
      <Seo pageKey="wealthManagement" />
      <Header />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={infinityImg}
        imageAlt={hero.imageAlt}
      />

      <WhoBenefits sectionTitle={whoBenefits.sectionTitle} items={whoBenefits.items} />

      <Philosophy
        sectionTitle={philosophy.sectionTitle}
        subtitle={philosophy.subtitle}
        items={philosophy.items}
      />

      <ResultsStats
        eyebrow={results.eyebrow}
        title={results.title}
        items={results.items.map((it) => ({ ...it, subtitle: "" }))}
      />

      <ClientScenariosSection
        headingKey="scenarios.wm.heading"
        subheadingKey="scenarios.wm.subheading"
        scenarios={wealthManagementScenarios}
      />

      <InvestmentStrategies
        strategies={strategies.map((s, i) => ({ ...s, image: strategyImages[i] }))}
      />

      <InvestmentOpportunities
        categories={opportunities.map((c, i) => ({ ...c, dark: i === 1 }))}
      />

      <PortfolioManagement
        title={portfolio.title}
        description={portfolio.description}
        steps={portfolio.steps.map((s, i) => ({ number: String(i + 1), ...s }))}
      />

      <ServiceFAQ items={faq} />

      <ServiceCTA title={cta.title} description={cta.description} />

      <Footer />
    </div>
  );
};

export default WealthManagement;
