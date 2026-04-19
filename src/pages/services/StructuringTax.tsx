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
import heroImg from "../../assets/structuring-tax-symbol.png";
import strategyWealth from "../../assets/structuring-wealth.jpg";
import strategyTax from "../../assets/structuring-tax-planning.jpg";
import strategyTrusts from "../../assets/structuring-trusts.jpg";
import strategyEstate from "../../assets/structuring-estate.jpg";

const StructuringTax = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Structuring & Tax"
      title="Structure That Protects. Planning That Preserves."
      description="Icon Finance provides international wealth structuring and tax planning for entrepreneurs, families, and investors with assets across multiple jurisdictions. We turn complexity into clarity."
      image={heroImg}
      imageAlt="Structuring and tax symbol"
    />

    <WhoBenefits
      sectionTitle={"Built for Those Facing\nComplex Tax Realities"}
      items={[
        {
          title: "International Asset Holders",
          description: "You hold assets in multiple countries — real estate, companies, investments, bank accounts. Without proper structuring, you face overlapping tax obligations, regulatory exposure, and unnecessary costs.",
        },
        {
          title: "Entrepreneurs Before and After Exit",
          description: "The tax consequences of selling a business can be significant — or minimized with the right structure in place beforehand. We help you plan ahead and protect what you've built.",
        },
        {
          title: "Families Planning Succession",
          description: "Passing wealth to the next generation across borders involves inheritance taxes, forced heirship rules, and jurisdictional conflicts. We design structures that make succession orderly and efficient.",
        },
        {
          title: "Relocating Individuals and Families",
          description: "Changing your tax residency or domicile has profound implications for your global assets. We coordinate the full picture — before, during, and after your move.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"Structuring Built Around\nYour Life, Not a Template"}
      subtitle="Effective structuring is not about aggressive tax avoidance — it is about ensuring that your wealth is held in the most logical, efficient, and legally sound way possible. We work within the law, across jurisdictions, with your long-term interests as the only guide."
      items={[
        { number: "01", title: "Jurisdiction Analysis", description: "We assess every jurisdiction where you have assets, income, or residency — and identify the optimal holding structure for each situation." },
        { number: "02", title: "Integrated Planning", description: "Tax planning does not happen in isolation. We coordinate with your investment strategy, succession plan, and family office to ensure full coherence." },
        { number: "03", title: "Legal Compliance", description: "Every structure we design is fully compliant with applicable law. We work with qualified local counsel in each jurisdiction." },
        { number: "04", title: "Long-Term View", description: "We design for durability — structures that hold up as laws change, families grow, and circumstances evolve." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="What Proper Structuring Delivers"
      items={[
        { main: "Tax Efficient", subtitle: "", label: "Eliminate unnecessary tax drag across all jurisdictions" },
        { main: "Protected", subtitle: "", label: "Assets shielded from undue claims, creditors, and exposure" },
        { main: "Compliant", subtitle: "", label: "Fully legal structures that withstand regulatory scrutiny" },
        { main: "Succession Ready", subtitle: "", label: "Wealth transfers smoothly to the next generation" },
        { main: "Consolidated", subtitle: "", label: "All structures coordinated under one coherent framework" },
        { main: "Adaptable", subtitle: "", label: "Built to evolve as your life, laws, and assets change" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Wealth Structuring",
          description: "We design holding structures for your global assets — companies, real estate, investments, and liquid wealth — to ensure efficient ownership, protection, and management across jurisdictions.",
          items: ["Holding company and entity design", "Cross-border ownership optimization", "Asset protection frameworks"],
          image: strategyWealth,
        },
        {
          name: "Tax Planning",
          description: "Strategic tax planning that reduces your global tax burden through legitimate means — residency planning, income structuring, and treaty optimization across jurisdictions.",
          items: ["Multi-jurisdiction tax analysis", "Residency and domicile planning", "Tax treaty optimization"],
          image: strategyTax,
        },
        {
          name: "Trusts & Foundations",
          description: "Trusts and private foundations are powerful tools for asset protection, succession planning, and philanthropy. We advise on structure, jurisdiction, and administration.",
          items: ["Trust establishment and structuring", "Private foundation setup", "Ongoing administration and oversight"],
          image: strategyTrusts,
        },
        {
          name: "Estate Planning",
          description: "Comprehensive planning for the transfer of wealth across generations — minimizing inheritance tax, avoiding probate, and ensuring your assets reach the right people at the right time.",
          items: ["Cross-border succession planning", "Inheritance tax minimization", "Will and estate documentation"],
          image: strategyEstate,
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Structuring Services",
          items: [
            { title: "International holding structures", description: "companies, foundations, trusts" },
            { title: "Ownership optimization", description: "across multiple jurisdictions" },
            { title: "Asset protection planning", description: "creditor and legal exposure" },
            { title: "Corporate restructuring", description: "consolidation and simplification" },
            { title: "Residency and domicile planning", description: "for individuals and families" },
          ],
        },
        {
          name: "Tax Services",
          dark: true,
          items: [
            { title: "Multi-jurisdiction tax analysis", description: "global tax position mapping" },
            { title: "Income and dividend structuring", description: "efficient distribution planning" },
            { title: "Tax treaty optimization", description: "leverage bilateral agreements" },
            { title: "Exit tax planning", description: "pre-sale and post-sale structuring" },
            { title: "Compliance coordination", description: "across all relevant jurisdictions" },
            { title: "Reporting and disclosure", description: "CRS, FATCA, local requirements" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Structure Your Wealth"
      description="A methodical process from analysis to implementation and ongoing compliance."
      steps={[
        { number: "1", title: "Global Asset Mapping", timeline: "2–3 weeks", result: "Complete Wealth & Tax Map", activities: ["Asset inventory", "Jurisdiction review", "Current structure audit", "Tax exposure analysis"] },
        { number: "2", title: "Structure Design", timeline: "3–4 weeks", result: "Optimal Holding Framework", activities: ["Entity selection", "Jurisdiction planning", "Legal counsel coordination", "Compliance review"] },
        { number: "3", title: "Implementation", timeline: "4–8 weeks", result: "Fully Operational Structure", activities: ["Entity formation", "Account setup", "Asset transfer", "Documentation and registration"] },
        { number: "4", title: "Maintenance & Compliance", timeline: "Ongoing", result: "Compliant and efficient structure", activities: ["Annual reviews", "Regulatory updates", "Reporting obligations", "Structure optimization"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "Is international tax planning legal?", answer: "Yes. We design structures that are fully compliant with applicable law in every jurisdiction. Our approach is based on legitimate tax planning — not aggressive avoidance or evasion." },
        { question: "Which jurisdictions do you work with?", answer: "We work across major financial and holding jurisdictions including Poland, UAE, Cyprus, Malta, Luxembourg, BVI, Cayman, and others — always selecting the most appropriate jurisdiction for your specific situation." },
        { question: "Do I need to change my residency?", answer: "Not necessarily. Residency planning is one tool among many. We assess whether a residency change would benefit your overall position and only recommend it when it makes genuine sense." },
        { question: "How do you handle CRS and FATCA reporting?", answer: "We design structures with full transparency in mind. All our solutions are compatible with CRS and FATCA requirements, and we coordinate reporting obligations across jurisdictions." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default StructuringTax;
