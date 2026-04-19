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
import heroImg from "../../assets/special-solutions-symbol.png";
import strategyRealEstate from "../../assets/special-realestate.jpg";
import strategyArt from "../../assets/special-art.jpg";
import strategyPhilanthropy from "../../assets/special-philanthropy.jpg";
import strategyEsg from "../../assets/special-esg.jpg";

const SpecialSolutions = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Special Solutions"
      title="Beyond the Conventional. Built Around You."
      description="Icon Finance provides bespoke advisory for clients with unique assets, complex situations, and needs that fall outside standard wealth management. When conventional solutions are not enough, we design something better."
      image={heroImg}
      imageAlt="Special solutions symbol"
    />

    <WhoBenefits
      sectionTitle={"Built for the\nUnconventional Client"}
      items={[
        {
          title: "Collectors and Art Holders",
          description: "Your wealth includes significant art, collectibles, or other passion assets that require specialist management — valuation, insurance, storage, financing, and eventual disposition — handled with the same rigour as your financial portfolio.",
        },
        {
          title: "Real Estate Investors",
          description: "You hold substantial real estate across jurisdictions and need coordinated advisory on acquisition structuring, financing, management, and disposal — integrated with your broader wealth strategy.",
        },
        {
          title: "Philanthropists and Foundation Founders",
          description: "You want your wealth to create lasting impact beyond your own family. We help you design, establish, and operate philanthropic structures that reflect your values and maximize your impact.",
        },
        {
          title: "ESG and Impact Investors",
          description: "You want your investments to generate returns while aligning with your values. We design ESG and impact portfolios that do not compromise on financial discipline.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"Unconventional Problems\nRequire Bespoke Solutions"}
      subtitle="Standard wealth management frameworks were not built for clients with art collections, complex real estate portfolios, philanthropic ambitions, or impact investing mandates. We start from your specific situation and build from there."
      items={[
        { number: "01", title: "Asset-Specific Expertise", description: "We bring specialist knowledge to each asset class — art, real estate, philanthropy, ESG — rather than applying a generic framework." },
        { number: "02", title: "Full Integration", description: "Non-standard assets are integrated into your overall wealth strategy — not managed in isolation from your financial portfolio." },
        { number: "03", title: "Network of Specialists", description: "We coordinate with art advisors, real estate experts, legal counsel, and impact measurement specialists as needed." },
        { number: "04", title: "Values Alignment", description: "We take your values seriously as an investment parameter — whether that means ESG exclusions, impact targets, or philanthropic allocation." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="What Bespoke Advisory Delivers"
      items={[
        { main: "Specialist", subtitle: "", label: "Deep expertise in non-standard asset classes" },
        { main: "Integrated", subtitle: "", label: "All assets coordinated within one wealth strategy" },
        { main: "Bespoke", subtitle: "", label: "Solutions designed for your situation, not a template" },
        { main: "Impact", subtitle: "", label: "Philanthropy and ESG with real measurable outcomes" },
        { main: "Network", subtitle: "", label: "Access to curated specialists across asset classes" },
        { main: "Discreet", subtitle: "", label: "Sensitive assets managed with absolute confidentiality" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Real Estate Advisory",
          description: "Strategic advisory on real estate as a wealth asset — acquisition structuring, financing, portfolio management, and disposition — integrated with your broader investment strategy.",
          items: ["Acquisition and disposal advisory", "Ownership structure optimization", "Portfolio coordination and reporting"],
          image: strategyRealEstate,
        },
        {
          name: "Art & Lifestyle Assets",
          description: "Comprehensive management of art collections and lifestyle assets — valuation, insurance, storage, financing, and strategic disposition handled by specialists.",
          items: ["Collection valuation and documentation", "Insurance and storage coordination", "Art financing and disposition advisory"],
          image: strategyArt,
        },
        {
          name: "Philanthropy Advisory",
          description: "We help families and individuals design and operate philanthropic structures — foundations, donor programs, and impact initiatives — that reflect their values and create lasting change.",
          items: ["Philanthropic strategy and structure", "Foundation establishment and governance", "Impact measurement and reporting"],
          image: strategyPhilanthropy,
        },
        {
          name: "ESG & Impact Investing",
          description: "Portfolios built around your values without sacrificing financial returns. We design ESG frameworks, screen investments rigorously, and measure real-world impact alongside performance.",
          items: ["ESG policy and exclusion framework", "Impact investment selection", "ESG reporting and impact measurement"],
          image: strategyEsg,
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Asset Advisory",
          items: [
            { title: "Real estate portfolio advisory", description: "acquisition, management, disposal" },
            { title: "Art collection management", description: "valuation, insurance, storage" },
            { title: "Art financing", description: "liquidity against collection assets" },
            { title: "Lifestyle asset coordination", description: "yachts, aircraft, collectibles" },
            { title: "Alternative asset reporting", description: "integrated with financial portfolio" },
          ],
        },
        {
          name: "Impact & Legacy",
          dark: true,
          items: [
            { title: "Philanthropic strategy", description: "values-based giving frameworks" },
            { title: "Foundation establishment", description: "legal structure and governance" },
            { title: "Donor-advised programs", description: "flexible giving vehicles" },
            { title: "ESG portfolio construction", description: "screened and impact-focused" },
            { title: "Impact measurement", description: "real-world outcome tracking" },
            { title: "Legacy planning", description: "charitable and family legacy integration" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Approach Special Solutions"
      description="Every engagement starts with understanding your specific situation — not with a pre-built product."
      steps={[
        { number: "1", title: "Situation Assessment", timeline: "1–2 weeks", result: "Clear Problem Definition", activities: ["Asset review", "Goals alignment", "Specialist assessment", "Scope definition"] },
        { number: "2", title: "Solution Design", timeline: "2–4 weeks", result: "Bespoke Advisory Plan", activities: ["Framework design", "Specialist coordination", "Legal and tax review", "Approach confirmation"] },
        { number: "3", title: "Implementation", timeline: "4–8 weeks", result: "Solution in Operation", activities: ["Structure setup", "Specialist engagement", "Asset transfer", "Documentation and reporting"] },
        { number: "4", title: "Oversight & Reporting", timeline: "Ongoing", result: "Fully coordinated special assets", activities: ["Regular reporting", "Performance review", "Specialist coordination", "Annual strategy review"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "Can you manage art collections alongside a financial portfolio?", answer: "Yes. We treat art and collectibles as a distinct asset class within your overall wealth — with proper valuation, insurance, and reporting — integrated into your consolidated wealth picture." },
        { question: "What is the minimum for a philanthropic foundation?", answer: "This depends on the jurisdiction and structure. Private foundations can be established from relatively modest levels, while more complex structures require larger endowments. We assess the most appropriate vehicle for your goals and budget." },
        { question: "Does ESG investing mean lower returns?", answer: "Not necessarily. The evidence increasingly shows that well-constructed ESG portfolios can match or outperform conventional ones over the long term. We build ESG portfolios with the same financial rigour as any other." },
        { question: "Can you help with real estate in multiple countries?", answer: "Yes. We coordinate real estate advisory across jurisdictions — working with local specialists while providing a single point of coordination and consolidated reporting." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default SpecialSolutions;
