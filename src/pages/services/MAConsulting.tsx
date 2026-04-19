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

const MAConsulting = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="M&A Consulting"
      title="From Growth to Exit — Strategic Advice at Every Stage"
      description="Icon Finance provides independent M&A advisory for business owners and entrepreneurs navigating acquisitions, sales, mergers, and capital raising. We protect your interests from first conversation to final close."
      image={heroImg}
      imageAlt="M&A consulting symbol"
      imageFit="contain"
      imagePosition="right center"
    />

    <WhoBenefits
      sectionTitle={"Built for Owners Making\nHigh-Stakes Decisions"}
      items={[
        {
          title: "Business Owners Planning an Exit",
          description: "You are considering selling your business and want to ensure you receive full value — with the right structure, the right buyers, and the right terms. We manage the entire process on your behalf.",
        },
        {
          title: "Entrepreneurs Seeking Acquisitions",
          description: "You want to grow through acquisition but need experienced guidance on target identification, valuation, due diligence, and deal structuring. We act as your independent advisor throughout.",
        },
        {
          title: "Companies Raising Capital",
          description: "You need growth capital — debt, equity, or a combination — and want to approach the right investors with the right story and structure. We prepare, position, and represent you.",
        },
        {
          title: "Family Businesses in Transition",
          description: "You are navigating a generational transition, partnership restructuring, or partial liquidity event. We bring both financial and family dynamics expertise to these complex situations.",
        },
      ]}
    />

    <Philosophy
      sectionTitle={"Independent Advice.\nNo Hidden Agendas."}
      subtitle="Most M&A advisors are paid on completion — which creates pressure to close deals rather than protect your interests. We operate differently: our advice is driven by what is right for you, not by transaction fees or banking relationships."
      items={[
        { number: "01", title: "Owner-Side Only", description: "We represent buyers or sellers — never both sides of the same transaction. Your interests are always our only focus." },
        { number: "02", title: "Full Process Management", description: "From preparation and positioning through negotiation and close — we manage every stage so you can focus on running your business." },
        { number: "03", title: "Valuation Discipline", description: "We provide rigorous, independent valuation analysis — ensuring you never leave value on the table or overpay for an acquisition." },
        { number: "04", title: "Network Access", description: "Access to a curated network of strategic buyers, financial investors, and capital providers across Europe and beyond." },
      ]}
    />

    <ResultsStats
      eyebrow="Why It Matters"
      title="What Independent M&A Advisory Delivers"
      items={[
        { main: "Independent", subtitle: "", label: "No banking affiliations or conflicted relationships" },
        { main: "Full Value", subtitle: "", label: "Rigorous preparation and positioning maximizes outcome" },
        { main: "Confidential", subtitle: "", label: "Strict process control — only the right parties engaged" },
        { main: "Structured", subtitle: "", label: "Tax and legal structure optimized from day one" },
        { main: "Network", subtitle: "", label: "Access to qualified buyers and investors across Europe" },
        { main: "End-to-End", subtitle: "", label: "One advisor from strategy through signed documents" },
      ]}
    />

    <InvestmentStrategies
      strategies={[
        {
          name: "Exit Advisory",
          description: "We manage the full sale process on behalf of business owners — from preparation and valuation through buyer identification, negotiation, and close.",
          items: ["Business preparation and positioning", "Buyer identification and approach", "Negotiation and deal structuring"],
          image: strategyExit,
        },
        {
          name: "Acquisition Advisory",
          description: "We support buyers through the full acquisition process — target identification, valuation, due diligence, structuring, and post-merger integration planning.",
          items: ["Target identification and screening", "Valuation and due diligence", "Deal structuring and negotiation"],
          image: strategyAcquisition,
        },
        {
          name: "Capital Raising",
          description: "We help businesses raise growth capital from the right investors — equity, debt, or hybrid — with the right structure and on the right terms.",
          items: ["Investor identification and approach", "Investment memorandum preparation", "Term negotiation and close"],
          image: strategyCapital,
        },
        {
          name: "Due Diligence",
          description: "Independent financial, commercial, and legal due diligence — giving you a clear, unbiased picture of any transaction before you commit.",
          items: ["Financial and commercial analysis", "Risk identification and assessment", "Independent reporting to decision makers"],
          image: strategyDiligence,
        },
      ]}
    />

    <InvestmentOpportunities
      categories={[
        {
          name: "Transaction Services",
          items: [
            { title: "Exit and sale advisory", description: "full process management" },
            { title: "Acquisition support", description: "from target to close" },
            { title: "Merger advisory", description: "structure and integration" },
            { title: "Management buyout", description: "MBO and MBI transactions" },
            { title: "Business valuation", description: "independent and rigorous" },
          ],
        },
        {
          name: "Capital & Restructuring",
          dark: true,
          items: [
            { title: "Equity capital raising", description: "growth and expansion financing" },
            { title: "Debt advisory", description: "structure and lender negotiation" },
            { title: "Private placement", description: "qualified investor introductions" },
            { title: "Corporate restructuring", description: "ownership and operational" },
            { title: "IPO preparation", description: "readiness and positioning" },
            { title: "Strategic partnerships", description: "joint ventures and alliances" },
          ],
        },
      ]}
    />

    <PortfolioManagement
      title="How We Run Your Transaction"
      description="A disciplined process that maximizes value and minimizes execution risk."
      steps={[
        { number: "1", title: "Preparation & Positioning", timeline: "2–4 weeks", result: "Transaction Readiness", activities: ["Business analysis", "Valuation", "Information memorandum", "Process design"] },
        { number: "2", title: "Market Approach", timeline: "4–6 weeks", result: "Qualified Interest", activities: ["Buyer/investor identification", "Confidential outreach", "NDA management", "Initial meetings"] },
        { number: "3", title: "Negotiation & Structuring", timeline: "4–8 weeks", result: "Agreed Terms", activities: ["Offer evaluation", "Term negotiation", "Deal structuring", "Due diligence management"] },
        { number: "4", title: "Close & Transition", timeline: "4–6 weeks", result: "Completed Transaction", activities: ["Legal documentation", "Regulatory approvals", "Signing", "Post-close transition support"] },
      ]}
    />

    <ServiceFAQ
      items={[
        { question: "How are you compensated on M&A transactions?", answer: "We charge a retainer fee for advisory work and a success fee upon transaction completion. Fee structures are agreed transparently upfront. We never receive undisclosed payments from counterparties or investors." },
        { question: "How long does a typical sale process take?", answer: "A well-run sale process typically takes 6–12 months from preparation to close. Complex transactions or difficult market conditions may extend this timeline. We set realistic expectations from day one." },
        { question: "Can you maintain confidentiality during the process?", answer: "Yes. We manage the entire process under strict confidentiality protocols — including NDAs with all counterparties, controlled information release, and anonymized initial approaches where appropriate." },
        { question: "What size of transactions do you work on?", answer: "We typically work on transactions ranging from €5M to €200M in enterprise value. For larger or more complex transactions, we engage specialized partners from our network." },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default MAConsulting;
