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
import infinityImg from "../../assets/infinity-symbol.png";

const WealthManagement = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Wealth Management"
      title="Preserving and Growing Capital Across Generations"
      description="Icon Finance delivers independent wealth management for entrepreneurs, business owners, and families with complex financial lives. We combine institutional expertise with the personal attention your capital deserves."
      image={infinityImg}
      imageAlt="Infinity symbol — wealth preservation across generations"
    />

    <WhoBenefits
      sectionTitle={"Built for Those\nWith More at Stake"}
      items={[
        {
          title: "Business Owners",
          description: "You have built significant wealth through your business — but your personal capital remains exposed to the same risks. We help you separate, structure, and protect what you have earned, independently of your operating business.",
        },
        {
          title: "Entrepreneurs After Exit",
          description: "You have sold your company or stepped back from operations and now face a different challenge: preserving and deploying substantial liquidity. We design structures that protect your proceeds and put them to work with discipline.",
        },
        {
          title: "Multi-Generational Families",
          description: "Family wealth that spans two or three generations requires more than a portfolio. We coordinate investment strategy with governance, succession planning, and family alignment — so capital serves the family, not the other way around.",
        },
        {
          title: "International Clients",
          description: "Assets spread across multiple jurisdictions demand more than local advice. We bring cross-border expertise to reduce complexity, eliminate redundant tax drag, and give you a single coherent view of your wealth.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"How We Think\nAbout Your Wealth"}
      subtitle="We operate without product commissions, bank affiliations, or placement fees. Every recommendation we make is driven by your goals alone — not by distribution agreements or institutional quotas. This independence is the foundation of everything we do."
      items={[
        { number: "01", title: "Independent Advice", description: "No conflicts of interest. No affiliated products. We are compensated only by you — which means we work only for you." },
        { number: "02", title: "Integrated Approach", description: "We coordinate investment strategy with tax planning, structuring, and succession — so your financial decisions are always coherent across every dimension." },
        { number: "03", title: "Active Risk Management", description: "Continuous monitoring across all asset classes and custodians. We act on risk before it becomes loss." },
        { number: "04", title: "Full Transparency", description: "Clear, consolidated reporting across all your accounts and holdings. You always know exactly where you stand." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="What Independent Wealth Management Delivers"
      items={[
        { main: "Fee-Based", subtitle: "", label: "No product commissions or placement fees — ever" },
        { main: "Senior Access", subtitle: "", label: "You work directly with experienced professionals, not junior managers" },
        { main: "Cross-Border", subtitle: "", label: "Expertise across multiple jurisdictions and asset classes" },
        { main: "Consolidated", subtitle: "", label: "Single view of all your wealth, regardless of where assets are held" },
        { main: "Confidential", subtitle: "", label: "Strict discretion as a professional and legal obligation" },
        { main: "Long-Term", subtitle: "", label: "We measure success in decades, not quarters" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Conservative Strategy",
          description: "Focused on capital preservation and stable income through high-quality fixed income instruments and dividend-paying equities. Suitable for clients prioritizing protection over growth.",
          items: ["Capital preservation as the primary objective", "High-quality bonds and investment grade credit", "Low volatility, stable income profile"],
        },
        {
          name: "Balanced Strategy",
          description: "A diversified approach combining income-generating assets with selective equity exposure. Designed for clients seeking steady growth with controlled downside risk.",
          items: ["Equal focus on growth and income", "Broad diversification across asset classes", "Moderate risk with long-term appreciation"],
        },
        {
          name: "Growth Strategy",
          description: "Equity-oriented portfolio with meaningful allocation to alternative investments. For clients with longer time horizons and higher tolerance for short-term volatility.",
          items: ["Equity-led with alternative diversifiers", "Private markets and real asset exposure", "Higher return potential over 5–10 year horizon"],
        },
        {
          name: "Opportunistic Strategy",
          description: "High-conviction, concentrated exposure to high-growth opportunities including private equity, venture, and emerging markets. Suitable for a portion of a larger diversified portfolio.",
          items: ["Concentrated bets in high-conviction themes", "Private equity, venture, and special situations", "Maximum return potential with commensurate risk"],
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Traditional Assets",
          items: [
            { title: "Developed market equities", description: "US, Europe, Japan" },
            { title: "Equities of emerging markets", description: "China, India, Latin America" },
            { title: "Government bonds", description: "US Treasuries, German Bunds" },
            { title: "Corporate bonds", description: "Investment grade and high yield" },
            { title: "Money market and deposits", description: "" },
          ],
        },
        {
          name: "Alternative Investments",
          dark: true,
          items: [
            { title: "Private Equity", description: "direct investments in companies" },
            { title: "Venture funds", description: "technology startups" },
            { title: "Hedge funds", description: "market neutral, long/short" },
            { title: "Real estate", description: "commercial and residential" },
            { title: "Commodities", description: "gold, oil, agricultural" },
            { title: "Crypto assets", description: "Bitcoin, Ethereum" },
            { title: "Infrastructure projects", description: "" },
            { title: "Art and collectibles", description: "" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Work With You"
      description="A structured process built around your family, your assets, and your jurisdictions."
      steps={[
        { number: "1", title: "Discovery & Planning", timeline: "1–2 weeks", result: "Investment Policy Statement (IPS)", activities: ["Full asset and liability audit", "Goal setting", "Risk profiling", "Tax position review"] },
        { number: "2", title: "Portfolio Construction", timeline: "3–4 weeks", result: "Diversified Portfolio", activities: ["Strategic allocation", "Instrument selection", "Due diligence", "Account and custody setup"] },
        { number: "3", title: "Active Management", timeline: "Ongoing", result: "Optimal risk/return profile", activities: ["Daily monitoring", "Tactical adjustments", "Quarterly rebalancing", "Risk management"] },
        { number: "4", title: "Reporting & Review", timeline: "Regular", result: "Full transparency and control", activities: ["Monthly reports", "Quarterly meetings", "Annual strategy review", "Tax reporting"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "What is the minimum investment threshold?", answer: "We typically work with clients whose investable assets start from $500,000. For family office and structuring mandates, the threshold may be higher depending on complexity." },
        { question: "How are your fees structured?", answer: "We operate on a transparent, fee-based model. Fees are agreed in advance and based on assets under advisory — we receive no commissions, rebates, or payments from product providers." },
        { question: "Can I access my funds at any time?", answer: "Yes. Your assets are held at independent custodians in your name and remain fully accessible. We recommend consulting with your advisor before significant withdrawals to assess portfolio impact." },
        { question: "How do you protect client confidentiality?", answer: "Confidentiality is both a professional obligation and a legal one. Client information is never shared with third parties without explicit consent. NDA arrangements are available on request." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default WealthManagement;
