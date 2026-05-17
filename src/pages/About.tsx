import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceHero from "../components/services/ServiceHero";
import Philosophy from "../components/services/Philosophy";
import PortfolioManagement from "../components/services/PortfolioManagement";
import ServiceCTA from "../components/services/ServiceCTA";
import TeamSection from "../components/about/TeamSection";
import TeamStats from "../components/about/TeamStats";
import aboutSymbol from "../assets/about-symbol.png";
import teamPlaceholder from "../assets/team-placeholder.jpg";
import olegPhoto from "../assets/team/oleg-zabolotnyi.jpg";
import yuriiPhoto from "../assets/team/yurii-labenko.jpg";
import maksymPhoto from "../assets/team/maksym-sydorov.jpg";
import kseniaPhoto from "../assets/team/ksenia-romanchuk.jpg";

// Photos are matched by position in the team array (same order across all locales):
// 0: Founder, 1: CEO, 2: CBDO, 3: Partnership Development Manager
const TEAM_PHOTOS_BY_INDEX: string[] = [olegPhoto, yuriiPhoto, kseniaPhoto, maksymPhoto];
const TEAM_LINKEDIN_BY_INDEX: string[] = [
  "https://www.linkedin.com/in/oleg-zabolotnyi/",
  "https://www.linkedin.com/in/yurii-labenko-178259a0/",
  "https://www.linkedin.com/in/ksenia-romanchuk-abb745375/",
  "https://www.linkedin.com/in/mvesna/",
];

const About = () => {
  const { t } = useTranslation();
  const philosophyItems = t("about.philosophy.items", { returnObjects: true }) as Array<{ title: string; description: string }>;
  const storySteps = t("about.story.steps", { returnObjects: true }) as Array<{ title: string; timeline: string; result: string; activities: string[] }>;
  const teamMembers = t("about.team.members", { returnObjects: true }) as Array<{ role: string; name: string; bio: string }>;

  return (
    <div className="min-h-screen">
      <Seo pageKey="about" />
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

      <TeamStats />

      <TeamSection
        eyebrow={t("about.team.eyebrow")}
        title={t("about.team.title")}
        members={teamMembers.map((m, idx) => ({
          role: m.role,
          name: m.name,
          bio: m.bio,
          image: TEAM_PHOTOS_BY_INDEX[idx] ?? teamPlaceholder,
          linkedin: TEAM_LINKEDIN_BY_INDEX[idx],
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

      <ServiceCTA
        title={t("about.cta.title")}
        description={t("about.cta.description")}
      />

      <Footer />
    </div>
  );
};

export default About;
