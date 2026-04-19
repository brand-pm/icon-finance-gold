import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/services/ServiceHero";
import Philosophy from "../components/services/Philosophy";
import ResultsStats from "../components/services/ResultsStats";
import InvestmentStrategies from "../components/services/InvestmentStrategies";
import InvestmentOpportunities from "../components/services/InvestmentOpportunities";
import PortfolioManagement from "../components/services/PortfolioManagement";
import ServiceFAQ from "../components/services/ServiceFAQ";
import ServiceCTA from "../components/services/ServiceCTA";
import marbleHero from "../assets/marble-calacatta-gold.jpg";
import industryEntrepreneurs from "../assets/expertise-entrepreneurs.jpg";
import industryFamilies from "../assets/expertise-families.jpg";
import industryInternational from "../assets/expertise-international.jpg";
import industryCorporate from "../assets/expertise-corporate.jpg";

const Expertise = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Expertise"
      title="Decades of Experience. One Integrated Team."
      description="Icon Finance brings together specialists in wealth management, family office, structuring, tax, and corporate advisory — working as one team around each client's complete financial life."
      image={marbleHero}
      imageAlt="Calacatta gold marble — premium expertise"
    />

    <Philosophy
      sectionTitle={"What We\nDo Best"}
      subtitle="Our expertise is not divided into silos. Every discipline we practice is connected — because your financial life does not exist in isolated compartments."
      items={[
        { number: "01", title: "Wealth Management", description: "Independent portfolio management, asset allocation, and investment advisory for entrepreneurs and families with complex financial lives." },
        { number: "02", title: "Family Office", description: "Full-service family office design and operations — from governance and succession to consolidated reporting and generational planning." },
        { number: "03", title: "Structuring & Tax", description: "International wealth structuring, tax planning, and compliance across multiple jurisdictions — fully integrated with investment and succession strategy." },
        { number: "04", title: "Corporate Advisory", description: "M&A, exit planning, capital raising, and due diligence for business owners at every stage of their company's lifecycle." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="The Icon Finance Difference"
      items={[
        { main: "Independent", subtitle: "", label: "No bank affiliations, no product commissions, ever" },
        { main: "Integrated", subtitle: "", label: "All disciplines working together around one client" },
        { main: "Senior", subtitle: "", label: "Direct access to experienced professionals at all times" },
        { main: "Cross-Border", subtitle: "", label: "Expertise across multiple European jurisdictions" },
        { main: "Discreet", subtitle: "", label: "Absolute confidentiality as a professional standard" },
        { main: "Long-Term", subtitle: "", label: "Client relationships measured in decades, not mandates" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Entrepreneurs & Business Owners",
          description: "We work with founders and business owners at every stage — from growing a company to preparing for exit. We understand that personal and business wealth are deeply intertwined, and we manage both.",
          items: ["Pre-exit and post-exit wealth planning", "Business and personal wealth coordination", "M&A advisory and capital strategy"],
          image: industryEntrepreneurs,
        },
        {
          name: "Multi-Generational Families",
          description: "Families with wealth spanning two or three generations need more than investment management. We design the governance, succession, and education frameworks that keep family capital — and family unity — intact.",
          items: ["Family office design and operations", "Succession and inheritance planning", "Next generation financial education"],
          image: industryFamilies,
        },
        {
          name: "International Clients",
          description: "Clients with assets, residency, and interests across multiple countries face unique complexity. We provide the cross-border coordination that turns that complexity into a manageable, efficient structure.",
          items: ["Multi-jurisdiction structuring", "Residency and tax planning", "Consolidated cross-border reporting"],
          image: industryInternational,
        },
        {
          name: "Corporate & Institutional",
          description: "We work with corporations, family businesses, and institutional investors on M&A transactions, capital raising, and strategic advisory — bringing the same independence and rigour as in our private client work.",
          items: ["M&A and transaction advisory", "Capital raising and investor relations", "Corporate governance and restructuring"],
          image: industryCorporate,
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Jurisdictions We Cover",
          items: [
            { title: "Poland", description: "primary hub, regulatory expertise" },
            { title: "European Union", description: "cross-border structuring and compliance" },
            { title: "UAE / Dubai", description: "holding structures and residency planning" },
            { title: "Cyprus & Malta", description: "EU-based holding and tax planning" },
            { title: "Luxembourg", description: "fund structures and family holdings" },
            { title: "BVI & Cayman Islands", description: "international holding vehicles" },
          ],
        },
        {
          name: "What Cross-Border Means in Practice",
          dark: true,
          items: [
            { title: "Multi-jurisdiction tax analysis", description: "global tax position in one view" },
            { title: "International entity coordination", description: "companies, trusts, foundations" },
            { title: "CRS & FATCA compliance", description: "full regulatory transparency" },
            { title: "Residency planning", description: "for individuals and families" },
            { title: "Cross-border succession", description: "inheritance across jurisdictions" },
            { title: "Currency and FX coordination", description: "multi-currency portfolio management" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="Our Client Engagement Model"
      description="Every client relationship follows the same disciplined process — regardless of mandate size or complexity."
      steps={[
        { number: "1", title: "Discovery", timeline: "Week 1–2", result: "Complete Client Picture", activities: ["Goals", "Assets", "Family structure", "Tax position", "Existing advisors"] },
        { number: "2", title: "Analysis & Design", timeline: "Week 3–4", result: "Integrated Advisory Plan", activities: ["Gap analysis", "Opportunity mapping", "Structure review", "Recommendations"] },
        { number: "3", title: "Implementation", timeline: "Week 5–8", result: "Solutions in Place", activities: ["Structure setup", "Portfolio construction", "Advisor coordination", "Documentation"] },
        { number: "4", title: "Partnership", timeline: "Ongoing", result: "Long-term client relationship", activities: ["Regular reviews", "Reporting", "Proactive advice", "Life event response"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "Do you work with clients outside Poland?", answer: "Yes. While our office is based in Warsaw, we serve clients across Europe and internationally. The nature of wealth management and structuring work means most of our engagement is not location-dependent." },
        { question: "Do you work alongside existing advisors?", answer: "Yes — and we prefer it. We often act as a coordinating layer above existing legal, tax, and investment advisors, ensuring all advice is coherent and working toward the same goals." },
        { question: "What languages do you work in?", answer: "Our team works in English, Polish, Ukrainian, and Russian — reflecting the diversity of our client base across Central and Eastern Europe." },
        { question: "How do you charge for your services?", answer: "Fee structures vary by mandate — advisory retainers, AUM-based fees, and project fees depending on the service. All fees are agreed transparently in advance. We receive no commissions or third-party payments." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default Expertise;
