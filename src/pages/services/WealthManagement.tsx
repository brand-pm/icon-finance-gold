import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceHero from "../../components/services/ServiceHero";
import WhoBenefits from "../../components/services/WhoBenefits";
import Philosophy from "../../components/services/Philosophy";
import InvestmentOpportunities from "../../components/services/InvestmentOpportunities";
import InvestmentStrategies from "../../components/services/InvestmentStrategies";
import ServiceCTA from "../../components/services/ServiceCTA";
import infinityImg from "../../assets/infinity-symbol.png";

const WealthManagement = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="Wealth Management"
      title="Your Capital. Structured for Generations."
      description="We provide independent, conflict-free wealth management for entrepreneurs and families navigating complex financial lives — from portfolio strategy to cross-border asset coordination."
      image={infinityImg}
      imageAlt="Infinity symbol — wealth preservation across generations"
    />

    <WhoBenefits
      sectionTitle={"Built for Those With\nMore at Stake"}
      items={[
        {
          title: "Business Owners",
          description: "You've built significant wealth through your company — but your personal capital is still tied to the same risks. We help you separate, structure, and protect what you've earned.",
        },
        {
          title: "Multi-Generational Families",
          description: "Wealth that spans two or three generations requires more than a portfolio. We coordinate investment strategy with governance, succession, and family alignment.",
        },
        {
          title: "International Clients",
          description: "Assets in multiple jurisdictions demand more than local advice. We bring cross-border expertise to simplify complexity and reduce unnecessary tax drag.",
        },
        {
          title: "Entrepreneurs Post-Exit",
          description: "After a liquidity event, preserving capital becomes as critical as growing it. We design structures that protect your proceeds and put them to work deliberately.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"Independence Is Our\nCompetitive Advantage"}
      subtitle={"Most wealth managers are compensated by the products they sell. We are not. Icon Finance operates on a fee-based model with no product commissions, no hidden incentives, and no conflicts of interest — only advice aligned with your goals.\n\nWe treat each client relationship as a long-term partnership. That means understanding your full financial picture: not just your portfolio, but your business interests, family structure, tax position, and long-term intentions.\n\nOur team brings experience across private banking, asset management, and family office advisory — giving you access to institutional-grade thinking without institutional bureaucracy."}
      items={[]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Comprehensive. Coordinated. Ongoing.",
          items: [
            { title: "Investment Strategy & Asset Allocation", description: "Custom portfolio construction based on your risk profile, liquidity needs, tax situation, and long-term objectives. Reviewed and rebalanced proactively — not reactively." },
            { title: "Portfolio Management & Monitoring", description: "Active oversight of your investments across asset classes and custodians. You receive consolidated reporting with full transparency on performance, fees, and positioning." },
            { title: "Alternative Investments", description: "Access to private equity, private credit, hedge funds, and real assets — with independent due diligence and allocation recommendations tailored to your portfolio." },
            { title: "Currency & Liquidity Management", description: "Strategic management of cash flows, currency exposure, and liquidity reserves to ensure your capital is always positioned efficiently." },
            { title: "Tax-Aware Investment Planning", description: "Investment decisions made in coordination with your tax position. We work alongside your tax advisors or provide integrated tax planning as part of our service." },
            { title: "Consolidated Reporting", description: "A single, clear view of your entire wealth — across all accounts, custodians, and asset classes. Delivered quarterly or on demand." },
          ],
        },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Truly Independent",
          description: "We are not affiliated with any bank, fund manager, or product provider. Our recommendations are driven by your interests alone — not by distribution agreements or placement fees.",
          items: [],
        },
        {
          name: "Integrated Expertise",
          description: "Wealth management at this level cannot exist in isolation. We coordinate seamlessly with structuring, tax, and family office services — so your financial strategy is always coherent across every dimension.",
          items: [],
        },
        {
          name: "Senior-Level Access",
          description: "You work directly with experienced professionals — not handed off to junior relationship managers. Every client receives dedicated senior attention throughout the engagement.",
          items: [],
        },
      ]}
    />

    <ServiceCTA
      title="Ready to Take a Clearer View of Your Wealth?"
      description="A conversation costs nothing. We'll listen first, and only propose a path forward if we're confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default WealthManagement;
