import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioManagement from "../components/services/PortfolioManagement";
import WhyUs from "../components/WhyUs";
import Insights from "../components/Insights";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <PortfolioManagement
      title={"How We Work\nwith Clients"}
      description="Each stage is adapted to your family, assets and jurisdictions"
      steps={[
        { number: "1", title: "Introduction and\nanalysis", timeline: "1–2 weeks", result: "", activities: ["We study your situation, goals and current asset structure"] },
        { number: "2", title: "Strategy development\nand planning", timeline: "2–3 weeks", result: "", activities: ["We develop a bespoke wealth management strategy"] },
        { number: "3", title: "Implementation\nof solutions", timeline: "4–8 weeks", result: "", activities: ["We implement the agreed strategy and structure the assets"] },
        { number: "4", title: "Management and\ncontrol", timeline: "Ongoing", result: "", activities: ["We provide continuous support and optimization"] },
      ]}
      ctaLink="/#contact"
      ctaLabel="Start a dialogue"
      ctaVariant="filled"
    />
    <WhyUs />
    <Insights />
    <Contact />
    <Footer />
  </>
);

export default Index;
