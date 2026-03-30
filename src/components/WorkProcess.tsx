import { Clock } from "lucide-react";
import marbleTexture from "../assets/marble-texture.svg";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stages = [
  { title: "Introduction and\nanalysis", duration: "1–2 weeks", desc: "We study your situation, goals\nand current asset structure" },
  { title: "Strategy development\nand planning", duration: "2–3 weeks", desc: "We develop a bespoke wealth\nmanagement strategy" },
  { title: "Implementation\nof solutions", duration: "4–8 weeks", desc: "We implement the agreed strategy\nand structure the assets" },
  { title: "Management and\ncontrol", duration: "Ongoing", desc: "We provide continuous support\nand optimization" },
];

const WorkProcess = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #131A31 0%, #0A0F1E 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
          {/* Left — sticky */}
          <div className="opacity-0 animate-fade-up lg:sticky lg:top-32">
            <p className="eyebrow mb-4">Work Process</p>
            <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
              How We Work<br />with Clients
            </h2>
            <div className="gold-separator justify-start mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-white/50 text-base mb-10">
              Each stage is adapted to your family, assets and jurisdictions
            </p>
            <a href="#contact" className="btn-gold px-8 py-4 inline-block">Start a dialogue</a>
          </div>

          {/* Right — stages with connecting dots */}
          <div className="flex flex-col gap-6 relative">
            {stages.map((stage, i) => (
              <div key={i} className="relative">
                {/* Connecting dotted line between cards */}
                {i < stages.length - 1 && (
                  <div className="absolute left-8 top-full h-6 flex flex-col items-center justify-center z-10">
                    <div className="w-px h-1.5 bg-gold/40" />
                    <div className="w-1 h-1 bg-gold/50 rotate-45 my-0.5" />
                    <div className="w-px h-1.5 bg-gold/40" />
                  </div>
                )}

                {/* Card */}
                <div
                  className="opacity-0 animate-fade-up relative overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {/* Marble texture overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: `url(${marbleTexture})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="p-7 flex flex-col sm:flex-row gap-6 relative z-[1]">
                    {/* Left side: stage label + title with vertical dots */}
                    <div className="flex-1">
                      <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
                        Stage {i + 1}
                      </p>
                      <div className="flex items-start gap-3">
                        {/* Vertical decorative dots */}
                        <div className="flex flex-col items-center gap-1.5 pt-1.5 shrink-0">
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                        </div>
                        <h3 className="text-white text-xl font-normal leading-snug whitespace-pre-line">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right side: duration + description */}
                    <div className="sm:w-[240px] shrink-0">
                      <div className="flex items-center gap-1.5 text-white/45 text-[13px] mb-3">
                        <Clock size={13} strokeWidth={1.5} />
                        <span>Duration: {stage.duration}</span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
