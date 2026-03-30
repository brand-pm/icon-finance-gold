import { Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stages = [
  { title: "Introduction and analysis", duration: "1–2 weeks", desc: "We study your situation, goals and current asset structure" },
  { title: "Strategy development and planning", duration: "2–3 weeks", desc: "We develop a bespoke wealth management strategy" },
  { title: "Implementation of solutions", duration: "4–8 weeks", desc: "We implement the agreed strategy and structure the assets" },
  { title: "Management and control", duration: "Ongoing", desc: "We provide continuous support and optimization" },
];

const WorkProcess = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, #131A31 0%, #0A0F1E 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="grid lg:grid-cols-[40%_60%] gap-16">
          {/* Left */}
          <div className="opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">Work Process</p>
            <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
              How We Work with Clients
            </h2>
            <div className="gold-separator justify-start mb-6">
              <div className="dot" /><div className="dot" />
            </div>
            <p className="text-white/60 text-base mb-10">
              Each stage is adapted to your family, assets and jurisdictions
            </p>
            <a href="#contact" className="btn-gold px-8 py-4 inline-block">Start a dialogue</a>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="opacity-0 animate-slide-in-right p-6 border relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.08)",
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.012 0.004' numOctaves='5' seed='2' result='n'/%3E%3CfeColorMatrix type='saturate' values='0' in='n' result='g'/%3E%3CfeComponentTransfer in='g' result='c'%3E%3CfeFuncA type='linear' slope='2' intercept='0'/%3E%3C/feComponentTransfer%3E%3CfeBlend in='SourceGraphic' in2='c' mode='multiply'/%3E%3C/filter%3E%3Crect width='800' height='800' filter='url(%23m)' fill='%23ffffff' opacity='0.08'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                  }}
                />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[10px] mb-1">Stage {i + 1}</p>
                    <h3 className="text-white text-xl font-normal">{stage.title}</h3>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="flex items-center gap-1 text-white/50 text-[13px] mb-1">
                      <Clock size={12} /> Duration: {stage.duration}
                    </div>
                    <p className="text-white/60 text-sm">{stage.desc}</p>
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
