import { useTranslation } from "react-i18next";
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
import heroImg from "../../assets/corporate-services-symbol.png";
import strategyExit from "../../assets/ma-exit.jpg";
import strategyAcquisition from "../../assets/ma-acquisition.jpg";
import strategyCapital from "../../assets/ma-capital.jpg";
import strategyDiligence from "../../assets/ma-diligence.jpg";

const strategyImages = [strategyExit, strategyAcquisition, strategyCapital, strategyDiligence];

const MAConsulting = () => {
  const { t } = useTranslation();
  const base = "servicePages.maConsulting";

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
      <Header />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={heroImg}
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

export default MAConsulting;
