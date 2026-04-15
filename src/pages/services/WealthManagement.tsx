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
      description="We are a boutique wealth management firm that provides personalized financial planning and investment management services to high net worth individuals, families, and institutions. Our team of experienced professionals is dedicated to helping you achieve your financial goals."
      image={infinityImg}
      imageAlt="Infinity symbol — wealth preservation across generations"
    />

    <WhoBenefits
      sectionTitle="Who Benefits from Our Wealth Management"
      items={[
        {
          title: "Top Tier Managers & Private Banks",
          description: "Our team has extensive experience working with top-tier managers and private banks, allowing us to provide our clients with access to exclusive investment opportunities and personalized service.",
        },
        {
          title: "Exclusive Customer-First Focus",
          description: "We prioritize the needs of our customers above all else, ensuring that every aspect of our service is tailored to meet their unique financial goals and objectives.",
        },
        {
          title: "Differentiated Expertise",
          description: "Our team brings a diverse range of expertise from various industries, including finance, law, and accounting, enabling us to provide comprehensive solutions for complex financial challenges.",
        },
        {
          title: "Institutional Grade Investors",
          description: "We leverage institutional-grade resources and technology to deliver superior investment performance and risk management for our clients.",
        },
      ]}
    />

    <Philosophy
      sectionTitle="Icon Financial Wealth Management Philosophy"
      subtitle="At Icon Financial, we believe in a holistic approach to wealth management that encompasses all aspects of your financial life."
      items={[
        { number: "01", title: "Goal-Oriented Planning", description: "We work closely with you to understand your financial goals and develop a customized plan to help you achieve them." },
        { number: "02", title: "Asset Allocation", description: "We strategically allocate your assets across different classes to optimize returns while managing risk." },
        { number: "03", title: "Risk Management", description: "We employ sophisticated risk management techniques to protect your portfolio from market volatility." },
        { number: "04", title: "Tax Efficiency", description: "We implement tax-efficient strategies to minimize your tax liability and maximize your after-tax returns." },
      ]}
    />

    <ResultsStats
      items={[
        { value: "$500M+", label: "Assets Under Management" },
        { value: "95%", label: "Client Retention Rate" },
        { value: "12%", label: "Annualized Return" },
        { value: "1.4x", label: "Sharpe Ratio" },
        { value: "~8%", label: "Maximum Drawdown" },
        { value: "$5M+", label: "Average Client Portfolio" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Conservative",
          description: "A conservative approach focused on capital preservation and stable income generation through high-quality fixed income and dividend-paying equities.",
          items: ["Low-risk investments", "Stable income generation", "Capital preservation focus"],
        },
        {
          name: "Balanced",
          description: "A balanced strategy offering a mix of growth and income through diversified asset allocation across equities, fixed income, and alternatives.",
          items: ["Balanced risk-return profile", "Diversified asset allocation", "Long-term growth orientation"],
        },
        {
          name: "Growth",
          description: "An aggressive growth strategy targeting higher returns through active management and concentrated positions in high-conviction opportunities.",
          items: ["Higher risk tolerance", "Focus on capital appreciation", "Active management approach"],
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
        { number: "01", title: "Research & Analysis", items: ["In-depth market research", "Fundamental analysis", "Technical analysis", "Economic forecasting"] },
        { number: "02", title: "Portfolio Construction", items: ["Strategic asset allocation", "Tactical adjustments", "Rebalancing", "Risk management"] },
        { number: "03", title: "Performance Monitoring", items: ["Regular performance reviews", "Benchmark comparison", "Attribution analysis", "Reporting"] },
        { number: "04", title: "Client Communication", items: ["Quarterly meetings", "Annual reports", "Ad-hoc updates", "Educational resources"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "What is the minimum investment amount?", answer: "Our minimum investment amount is $500,000. This allows us to provide the level of personalized service and diversification that our clients expect." },
        { question: "How often do you rebalance portfolios?", answer: "We review portfolios quarterly and rebalance as needed based on market conditions and your financial objectives. Tactical adjustments may be made more frequently." },
        { question: "Can I withdraw funds at any time?", answer: "Yes, you can access your funds at any time. We recommend discussing withdrawals with your advisor to ensure they align with your long-term financial plan." },
        { question: "Are my assets protected?", answer: "Your assets are held at independent custodians and are fully segregated. We maintain comprehensive insurance coverage and follow strict compliance protocols." },
      ]}
    />

    <ServiceCTA
      title="Start Managing Your Wealth Today"
      description="Ready to take control of your financial future? Contact us today to schedule a consultation with one of our experienced wealth management professionals."
    />

    <Footer />
  </div>
);

export default WealthManagement;
