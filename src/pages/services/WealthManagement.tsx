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
      title="Professional Wealth Management For Affluent Families"
      description="Icon Financial provides bespoke wealth management strategies for high-net-worth individuals and families. Our team of seasoned professionals delivers personalized solutions, combining institutional-grade expertise with a client-first philosophy to preserve and grow your wealth across generations."
      image={infinityImg}
      imageAlt="Infinity symbol — wealth preservation across generations"
    />

    <WhoBenefits
      sectionTitle="Who Benefits from&#10;Our Wealth Management"
      items={[
        {
          title: "Top Managers & Professionals",
          description: "You have accumulated substantial capital and want to ensure its protection and growth without personal involvement in management.",
        },
        {
          title: "Business Owners After Exit",
          description: "You have sold your company or exited operational management and need professional management of the capital received.",
        },
        {
          title: "Affluent Families",
          description: "Your family capital exceeds $10 million and requires a structured approach to management and preservation.",
        },
        {
          title: "International Investors",
          description: "You have assets in different countries and currencies, and need centralized management and optimization.",
        },
      ]}
    />

    <Philosophy
      sectionTitle="Icon Finance Wealth Management Philosophy"
      subtitle="We apply an institutional approach to private wealth management, combining the best practices of global investment houses with the flexibility and personalization of a family office. Each portfolio is built individually, taking into account the client's goals and time horizon."
      items={[
        { number: "01", title: "Global Approach", description: "Investments in developed and emerging markets worldwide" },
        { number: "02", title: "Active Management", description: "Tactical allocation to capitalize on market opportunities" },
        { number: "03", title: "Risk Control", description: "Continuous monitoring and management of all types of risks" },
        { number: "04", title: "Diversification", description: "Distribution across 15+ asset classes to reduce risk" },
      ]}
    />

    <ResultsStats
      items={[
        { prefix: "$", main: "500", suffix: "+", subtitle: "million", label: "Assets under management" },
        { main: "95", suffix: "%", subtitle: "year-on-year", label: "Client retention" },
        { main: "12", suffix: "%", subtitle: "per annum", label: "Average return (over 5 years)" },
        { main: "1.4", suffix: "", subtitle: "Sharpe ratio", label: "(risk/return)" },
        { main: "-8", suffix: "%", subtitle: "Maximum drawdown", label: "(during 2020 crisis)" },
        { prefix: "$", main: "5", suffix: "M", subtitle: "Average portfolio size", label: "" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Conservative Strategy",
          description: "A conservative approach focused on capital preservation and stable income generation through high-quality fixed income instruments and dividend-paying equities.",
          items: ["Low-risk fixed income focus", "Stable income generation", "Capital preservation priority"],
        },
        {
          name: "Balanced Strategy",
          description: "A balanced strategy offering a mix of growth and income through diversified asset allocation across equities, fixed income, and alternative investments.",
          items: ["Balanced risk-return profile", "Diversified asset allocation", "Long-term growth orientation"],
        },
        {
          name: "Growth Strategy",
          description: "An aggressive growth strategy targeting higher returns through active management and concentrated positions in high-conviction equity and alternative opportunities.",
          items: ["Higher risk tolerance", "Focus on capital appreciation", "Active management approach"],
        },
        {
          name: "Aggressive Strategy",
          description: "A high-conviction approach focused on maximum capital appreciation through concentrated positions in emerging markets, venture capital, and high-growth sectors.",
          items: ["Maximum growth potential", "Concentrated high-conviction bets", "Emerging markets exposure"],
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
      title="How We Manage Your Portfolio"
      description="Each stage is adapted to your family, assets and jurisdictions"
      steps={[
        { number: "1", title: "Analysis & Planning", timeline: "1–2 weeks", result: "Investment Policy Statement (IPS)", activities: ["Audit of current assets and liabilities", "Defining investment goals and constraints", "Risk profile and time horizon analysis", "Tax planning and optimization"] },
        { number: "2", title: "Portfolio Construction", timeline: "3–4 weeks", result: "Diversified Portfolio", activities: ["Strategic asset allocation", "Selection of specific instruments", "Due diligence of managers and funds", "Opening accounts and structuring"] },
        { number: "3", title: "Active Management", timeline: "Ongoing", result: "Optimal risk/return ratio", activities: ["Daily market monitoring", "Tactical allocation adjustments", "Portfolio rebalancing (quarterly)", "Risk and liquidity management"] },
        { number: "4", title: "Reporting & Control", timeline: "Regular", result: "Full transparency and control", activities: ["Monthly portfolio reports", "Quarterly client meetings", "Annual strategy review", "Tax reporting"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "What is the minimum amount you work with?", answer: "Our minimum investment amount is $500,000. This allows us to provide the level of personalized service and diversification that our clients expect." },
        { question: "What fees do you charge?", answer: "We operate on a transparent fee structure with management fees based on assets under management. There are no hidden charges, and all fees are disclosed upfront before engagement." },
        { question: "Can I withdraw funds at any time?", answer: "Yes, you can access your funds at any time. We recommend discussing withdrawals with your advisor to ensure they align with your long-term financial plan." },
        { question: "How are my assets protected?", answer: "Your assets are held at independent custodians and are fully segregated. We maintain comprehensive insurance coverage and follow strict compliance protocols." },
      ]}
    />

    <ServiceCTA
      title="Start Managing Your Wealth Today"
      description="Arrange a confidential consultation with our team to discuss your financial goals and discover how Icon Finance can help you preserve and grow your wealth."
    />

    <Footer />
  </div>
);

export default WealthManagement;
