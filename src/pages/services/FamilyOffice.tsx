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
import familyImg from "../../assets/family-office-symbol.png";
import strategyConservative from "../../assets/strategy-conservative.jpg";
import strategyBalanced from "../../assets/strategy-balanced.jpg";
import strategyGrowth from "../../assets/strategy-growth.jpg";
import strategyOpportunistic from "../../assets/strategy-opportunistic.jpg";

const FamilyOffice = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Family Office"
      title="When Wealth Becomes a Family Responsibility"
      description="Icon Finance designs and operates family office structures for families navigating the complexity of multi-generational wealth — from investment coordination to succession, governance, and legacy planning."
      image={familyImg}
      imageAlt="Family office — multi-generational wealth coordination"
    />

    <WhoBenefits
      sectionTitle={"Built for Families\nThinking in Generations"}
      items={[
        {
          title: "Families With $10M+ in Assets",
          description: "Your family wealth has grown to a scale where informal management no longer works. You need a structured approach that coordinates investments, legal entities, taxes, and succession in one place.",
        },
        {
          title: "Business Owners Planning an Exit",
          description: "You are preparing to sell your business and thinking carefully about what happens next. A family office structure gives your post-exit capital the governance and management framework it deserves.",
        },
        {
          title: "Multi-Generational Families",
          description: "Your family spans two or three generations with different financial needs, risk appetites, and goals. We create the structure and processes that keep capital — and family — aligned.",
        },
        {
          title: "Families Relocating Internationally",
          description: "Moving across jurisdictions brings new tax obligations, regulatory requirements, and asset management challenges. We coordinate every dimension of your financial relocation from a single point.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"How We Build\nYour Family Office"}
      subtitle="A family office is not a product — it is an infrastructure. We design it around your family's specific composition, values, assets, and long-term intentions. No templates. No off-the-shelf solutions."
      items={[
        { number: "01", title: "Custom Design", description: "Every family office we build starts with a blank page. We map your family's full picture before recommending any structure." },
        { number: "02", title: "Full Coordination", description: "Investments, legal, tax, succession, and reporting — all coordinated from one place, eliminating gaps between advisors." },
        { number: "03", title: "Governance First", description: "We establish clear decision-making processes, family councils, and investment committees — so wealth doesn't create conflict." },
        { number: "04", title: "Succession Ready", description: "Every structure we build is designed with the next generation in mind — legally, financially, and in terms of family readiness." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="What a Proper Family Office Delivers"
      items={[
        { main: "Single Point", subtitle: "", label: "One place for all family financial decisions and reporting" },
        { main: "Conflict-Free", subtitle: "", label: "Governance structures that prevent wealth from dividing families" },
        { main: "Cross-Border", subtitle: "", label: "Coordination across jurisdictions, entities, and currencies" },
        { main: "Confidential", subtitle: "", label: "Full discretion — your family's affairs stay within your family" },
        { main: "Generational", subtitle: "", label: "Built to serve not just you, but your children and grandchildren" },
        { main: "Integrated", subtitle: "", label: "Investments, tax, legal, and succession under one framework" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Single Family Office",
          description: "A fully dedicated structure built exclusively for your family. Complete control, maximum confidentiality, and bespoke infrastructure — designed for families with $30M+ in assets.",
          items: ["Exclusive infrastructure for one family only", "Full control over investment and governance decisions", "Maximum confidentiality and customization"],
          image: strategyConservative,
        },
        {
          name: "Shared Family Office",
          description: "Access to institutional-grade family office services shared across a select group of families. The benefits of a full family office at a fraction of the standalone cost.",
          items: ["Institutional infrastructure at optimized cost", "Select group of non-competing families", "Shared operations, separate reporting and assets"],
          image: strategyBalanced,
        },
        {
          name: "Family Office Advisory",
          description: "You already have a family office but need an experienced outside perspective. We serve as your strategic advisor: reviewing structures, optimizing processes, and filling expertise gaps.",
          items: ["Independent review of existing family office", "Process optimization and governance upgrade", "On-demand senior expertise without full retainer"],
          image: strategyGrowth,
        },
        {
          name: "Virtual Family Office",
          description: "For families who want family office-level coordination without a physical infrastructure. We act as your outsourced family office, delivering all services without the overhead.",
          items: ["Full coordination without physical office costs", "Scalable — grows with your family's needs", "Ideal for families in transition or relocation"],
          image: strategyOpportunistic,
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Core Services",
          items: [
            { title: "Investment management and oversight", description: "across all custodians and accounts" },
            { title: "Consolidated financial reporting", description: "monthly, quarterly, annual" },
            { title: "Tax planning and compliance", description: "multi-jurisdiction coordination" },
            { title: "Legal entity management", description: "holding structures and corporate admin" },
            { title: "Cash flow and liquidity management", description: "family budgeting and distributions" },
          ],
        },
        {
          name: "Extended Services",
          dark: true,
          items: [
            { title: "Succession planning", description: "wills, trusts, inheritance structures" },
            { title: "Family governance", description: "councils, charters, decision frameworks" },
            { title: "Philanthropy management", description: "foundations, donor programs, impact" },
            { title: "Real estate coordination", description: "acquisition, management, disposition" },
            { title: "Art and lifestyle assets", description: "collection management, insurance, valuation" },
            { title: "Next generation education", description: "financial literacy, onboarding programs" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Build Your Family Office"
      description="A structured engagement from discovery to full operational family office."
      steps={[
        { number: "1", title: "Family Discovery", timeline: "2–4 weeks", result: "Family Wealth Map", activities: ["Asset inventory", "Family structure review", "Goal alignment", "Jurisdiction mapping"] },
        { number: "2", title: "Structure Design", timeline: "4–6 weeks", result: "Family Office Blueprint", activities: ["Entity design", "Governance framework", "Advisor coordination", "Reporting architecture"] },
        { number: "3", title: "Implementation", timeline: "6–8 weeks", result: "Operational Family Office", activities: ["Entity formation", "Account setup", "Policy documentation", "System onboarding"] },
        { number: "4", title: "Operations & Oversight", timeline: "Ongoing", result: "Fully managed family office", activities: ["Monthly reporting", "Investment oversight", "Family meetings", "Annual structure review"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "What is the minimum asset level for a family office?", answer: "A dedicated Single Family Office typically requires $30M+ in investable assets to be cost-efficient. Our Shared Family Office model is designed for families starting from $5–10M, and our Virtual Family Office has no strict minimum." },
        { question: "How is a family office different from a private bank?", answer: "A private bank sells products and manages your portfolio within their platform. A family office coordinates every dimension of your financial life — across all banks, advisors, and jurisdictions — with no product to sell and no conflicts of interest." },
        { question: "Can you work alongside our existing advisors?", answer: "Yes. We often work as a coordinating layer above existing legal, tax, and investment advisors — ensuring they work coherently together rather than in isolated silos." },
        { question: "How do you handle confidentiality across multiple family members?", answer: "We establish clear information boundaries at the outset. Each family member's personal financial information is protected, while consolidated family reporting is shared only with designated principals." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default FamilyOffice;
