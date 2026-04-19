import { Linkedin } from "lucide-react";
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

const TeamSection = ({ eyebrow = "Our Team", title, members }: TeamSectionProps) => {
  const ref = useScrollReveal();

  return (
    <section
      className="section-padding marble-texture-strong"
      style={{ background: "linear-gradient(180deg, #F5F3F0 0%, #EDE9E4 100%)" }}
    >
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div
          className="text-center mb-16 opacity-0 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2
            className="text-charcoal font-light mb-4"
            style={{ fontSize: "clamp(26px,4vw,38px)" }}
          >
            {title}
          </h2>
          <div className="gold-separator mb-6">
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
          </div>
        </div>

        {/* Cards */}
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
                <img
                  src={m.image}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="eyebrow mb-2">{m.role}</p>
                <h3 className="text-charcoal font-semibold text-lg mb-3">{m.name}</h3>
                <p className="text-slate text-sm leading-relaxed flex-1">{m.bio}</p>
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
