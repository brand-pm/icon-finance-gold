import { Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface TeamMember {
  role: string;
  name: string;
  bio: string;
  image: string;
  linkedin?: string;
}

interface TeamSectionProps {
  eyebrow?: string;
  title: string;
  members: TeamMember[];
}

const TeamSection = ({ eyebrow, title, members }: TeamSectionProps) => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const eyebrowText = eyebrow ?? t("about.team.eyebrow");

  return (
    <section
      className="section-padding marble-texture-strong"
      style={{ background: "linear-gradient(180deg, #F5F3F0 0%, #EDE9E4 100%)" }}
    >
      <div className="container-main" ref={ref}>
        <div
          className="text-center mb-16 opacity-0 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{eyebrowText}</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {title}
          </h2>
          <div className="gold-separator mb-6">
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {members.map((m, i) => (
            <article
              key={m.name}
              data-radius-block
              className="bg-white flex flex-col opacity-0 animate-fade-up h-full group"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                animationDelay: `${0.2 + i * 0.1}s`,
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
              }}
            >
              <div className="relative overflow-hidden bg-charcoal/10" style={{ aspectRatio: "4/5" }}>
                <div
                  className="absolute inset-0 z-10 mix-blend-color group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, #0F162D 0%, #E0A776 100%)" }}
                />
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="eyebrow mb-2 min-h-[2.5rem]">{m.role}</p>
                <h3 className="text-charcoal font-semibold text-lg mb-3">{m.name}</h3>
                <p className="text-slate text-sm leading-relaxed flex-1 text-center">{m.bio}</p>
                <a
                  href={m.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-5 inline-flex items-center justify-center w-9 h-9 border border-gold/40 text-gold hover:bg-gold hover:text-navy transition-colors duration-300"
                  style={{ borderRadius: "9999px" }}
                >
                  <Linkedin size={16} strokeWidth={1.75} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
