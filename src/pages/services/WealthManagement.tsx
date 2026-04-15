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
      sectionTitle="Who Benefits from Our Wealth Management"
      items={[
        {
          title: "Top Managers & Professionals",
          description: "Our partnership with top-tier asset managers and financial professionals ensures access to exclusive strategies, institutional-grade analytics, and premium service tailored to sophisticated portfolios.",
        },
        {
          title: "Business Owners & HNI",
          description: "We help high-net-worth individuals and business owners navigate complex financial landscapes, offering tailored wealth structuring, succession planning, and investment strategies aligned with their unique goals.",
        },
        {
          title: "Affluent Families",
          description: "Our multi-generational approach helps affluent families preserve and grow wealth through customized estate planning, tax-efficient strategies, and comprehensive financial stewardship.",
        },
        {
          title: "International Investors",
          description: "For clients with cross-border interests, we provide multi-jurisdictional expertise, currency management, and globally diversified portfolio solutions to optimize international wealth.",
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
        { main: "$500", suffix: "+", subtitle: "million", label: "Assets under management" },
        { main: "95", suffix: "%", subtitle: "year-on-year", label: "Client retention" },
        { main: "12", suffix: "%", subtitle: "per annum", label: "Average return (over 5 years)" },
        { main: "1.4", subtitle: "Sharpe ratio", label: "(risk/return)" },
        { main: "-8", suffix: "%", subtitle: "Maximum drawdown", label: "(during 2020 crisis)" },
        { main: "$5", suffix: "M", subtitle: "Average portfolio size", label: "" },
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
            { title: "Equities", description: "Global equity markets with focus on quality and value" },
            { title: "Fixed Income", description: "Government and corporate bonds across maturities" },
            { title: "Real Estate", description: "Direct and indirect real estate investments" },
            { title: "Cash & Equivalents", description: "Money market and short-term instruments" },
          ],
        },
        {
          name: "Alternative Investments",
          items: [
            { title: "Hedge Funds", description: "Multi-strategy and market-neutral approaches" },
            { title: "Private Equity", description: "Growth capital and buyout opportunities" },
            { title: "Venture Capital", description: "Early-stage and growth-stage investments" },
            { title: "Commodities", description: "Precious metals, energy, and agricultural products" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Manage Your Portfolio"
      description="Our systematic approach ensures your portfolio is continuously optimized to meet your financial objectives while managing risk effectively."
      steps={[
        { number: "01", title: "Analysis & Planning", items: ["In-depth financial analysis", "Risk profiling and assessment", "Goal-based strategy formulation", "Tax-optimized planning"] },
        { number: "02", title: "Portfolio Construction", items: ["Strategic asset allocation", "Instrument selection", "Diversification framework", "Position sizing and entry"] },
        { number: "03", title: "Active Management", items: ["Continuous market monitoring", "Portfolio rebalancing", "Tactical opportunity capture", "Risk exposure adjustment"] },
        { number: "04", title: "Reporting & Control", items: ["Monthly performance reports", "Quarterly strategy reviews", "Compliance monitoring", "Transparent fee disclosure"] },
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
