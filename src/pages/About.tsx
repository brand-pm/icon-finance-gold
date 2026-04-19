import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/services/ServiceHero";
import Philosophy from "../components/services/Philosophy";
import PortfolioManagement from "../components/services/PortfolioManagement";
import ServiceCTA from "../components/services/ServiceCTA";
import TeamSection from "../components/about/TeamSection";
import infinityImg from "../assets/infinity-symbol.png";
import teamPlaceholder from "../assets/team-placeholder.jpg";

const About = () => (
  <div className="min-h-screen">
    <Header />

    <ServiceHero
      eyebrow="About Icon Finance"
      title="About Icon Finance"
      description="We are an independent wealth management and family office advisory firm, built for clients who expect more than a product — and deserve more than a bank."
      image={infinityImg}
      imageAlt="Icon Finance — independent wealth management"
    />

    <Philosophy
      sectionTitle="What We Believe"
      subtitle="Three principles guide every relationship, every recommendation, and every decision we make on your behalf."
      items={[
        {
          number: "01",
          title: "Client Interests Above All",
          description:
            "We act as fiduciaries — always. Our independence from banks, funds, and product providers means every recommendation we make is driven by your goals alone.",
        },
        {
          number: "02",
          title: "Long-Term Relationships",
          description:
            "We measure our success in decades, not transactions. Our clients stay with us because we earn that relationship every year — not because they are locked in.",
        },
        {
          number: "03",
          title: "Confidentiality and Trust",
          description:
            "Your affairs are yours. We treat client information with absolute discretion — as a professional obligation and a personal one.",
        },
      ]}
    />

    <PortfolioManagement
      title={"Built Over Time.\nRefined by Experience."}
      description="From a small Warsaw practice to an independent multi-disciplinary firm — every chapter of our story has been shaped by client needs."
      steps={[
        {
          number: "1",
          title: "Foundation",
          timeline: "2009",
          result: "Independent advice, no conflicts of interest",
          activities: [
            "Established in Warsaw",
            "Founders from private banking and asset management",
            "Clear mandate from day one",
          ],
        },
        {
          number: "2",
          title: "Family Office Practice",
          timeline: "2013",
          result: "Dedicated multi-generational practice",
          activities: [
            "Coordinated investments",
            "Governance frameworks",
            "Succession planning under one roof",
          ],
        },
        {
          number: "3",
          title: "Structuring & Tax Expertise",
          timeline: "2017",
          result: "International wealth structuring capability",
          activities: [
            "Cross-border tax planning",
            "Holding and trust structures",
            "Response to client complexity",
          ],
        },
        {
          number: "4",
          title: "Corporate Advisory",
          timeline: "2021",
          result: "Full lifecycle support for entrepreneurs",
          activities: [
            "M&A advisory added",
            "Capital raising and exit support",
            "Personal and business wealth aligned",
          ],
        },
        {
          number: "5",
          title: "Icon Finance",
          timeline: "Today",
          result: "Independent multi-disciplinary advisory firm",
          activities: [
            "Entrepreneurs, families, business owners",
            "Clients across Europe",
            "Headquartered in Warsaw",
          ],
        },
      ]}
    />

    <TeamSection
      title="Meet the Team"
      members={[
        {
          role: "Founder",
          name: "Oleg Zabolotnyi",
          bio: "Founder of Icon Finance with a background in private banking and investment advisory. Oleg built the firm around a single principle: independent advice that serves clients — not institutions.",
          image: teamPlaceholder,
          linkedin: "#",
        },
        {
          role: "Chief Executive Officer",
          name: "Yurii Labenko",
          bio: "Yurii leads the firm's operations and client strategy. His experience spans investment management and financial advisory across Central and Eastern European markets.",
          image: teamPlaceholder,
          linkedin: "#",
        },
        {
          role: "Chief Business Development Officer",
          name: "Ksenia Romanchuk",
          bio: "Ksenia drives the firm's growth and partnership strategy. She brings deep expertise in building institutional-grade client relationships across private wealth markets.",
          image: teamPlaceholder,
          linkedin: "#",
        },
        {
          role: "Partnership Development Manager",
          name: "Maksym Sydorov",
          bio: "Maksym develops and manages Icon Finance's partner network — connecting clients with the right specialists across legal, tax, and investment disciplines.",
          image: teamPlaceholder,
          linkedin: "#",
        },
      ]}
    />

    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />

    <Footer />
  </div>
);

export default About;
