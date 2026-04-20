import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/services/ServiceHero";
import Philosophy from "../components/services/Philosophy";
import PortfolioManagement from "../components/services/PortfolioManagement";
import ServiceCTA from "../components/services/ServiceCTA";
import TeamSection from "../components/about/TeamSection";
import aboutSymbol from "../assets/about-symbol.png";
import teamPlaceholder from "../assets/team-placeholder.jpg";

const About = () => {
  const { t } = useTranslation();
  const philosophyItems = t("about.philosophy.items", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const storySteps = t("about.story.steps", { returnObjects: true }) as Array<{ title: string; timeline: string; result: string; activities: string[] }>;
  const teamMembers = t("about.team.members", { returnObjects: true }) as Array<{ role: string; name: string; bio: string }>;

  return (
    <div className="min-h-screen">
      <Header />

      <ServiceHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        description={t("about.hero.description")}
        image={aboutSymbol}
        imageAlt={t("about.hero.imageAlt")}
      />

      <Philosophy
        sectionTitle={t("about.philosophy.title")}
        subtitle={t("about.philosophy.subtitle")}
        items={philosophyItems.map((item, idx) => ({
          number: String(idx + 1).padStart(2, "0"),
          title: item.title,
          description: item.description,
        }))}
      />

      <PortfolioManagement
        title={t("about.story.title")}
        description={t("about.story.description")}
        steps={storySteps.map((s, idx) => ({
          number: String(idx + 1),
          title: s.title,
          timeline: s.timeline,
          result: s.result,
          activities: s.activities,
        }))}
      />

      <TeamSection
        eyebrow={t("about.team.eyebrow")}
        title={t("about.team.title")}
        members={teamMembers.map((m) => ({
          role: m.role,
          name: m.name,
          bio: m.bio,
          image: teamPlaceholder,
          linkedin: "#",
        }))}
      />

      <ServiceCTA
        title={t("about.cta.title")}
        description={t("about.cta.description")}
      />

      <Footer />
    </div>
  );
};

export default About;
