import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Step {
  number: string;
  title: string;
  timeline: string;
  result: string;
  activities: string[];
}

interface PortfolioManagementProps {
  title: string;
  description: string;
  steps: Step[];
}

const PortfolioManagement = ({ title, description, steps }: PortfolioManagementProps) => {
  const ref = useScrollReveal();

  return (
    <section className="bg-navy" ref={ref}>
      <div className="container-main section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — sticky text block */}
          <div className="lg:sticky lg:top-24 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow mb-4">Work Process</p>
            <h2 className="text-white font-light mb-5" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              {title}
            </h2>
            <div className="gold-separator justify-start mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
              {description}
            </p>
            <Link to="/#contact" className="btn-outline-gold px-8 py-3 inline-block text-[13px]">
              Start a dialogue
            </Link>
          </div>

          {/* Right — stacked stage cards */}
          <div className="flex flex-col gap-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative marble-texture p-8 md:p-10"
                style={{
                  border: "1px solid rgba(224,167,118,0.12)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Left column: stage info + title + result */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                          Stage {step.number}
                        </span>
                        <span className="text-white/40 text-xs">{step.timeline}</span>
                      </div>
                      <h4 className="text-white font-semibold text-lg md:text-xl">{step.title}</h4>
                    </div>
                    <div className="mt-8">
                      <span className="text-gold/60 text-xs">Result:</span>
                      <p className="text-white text-sm mt-1">{step.result}</p>
                    </div>
                  </div>

                  {/* Right column: activities */}
                  <div>
                    <span className="text-white/40 text-xs mb-3 block">Activities:</span>
                    <ul className="space-y-2.5">
                      {step.activities.map((item, j) => (
                        <li key={j} className="text-white/70 text-sm flex items-start gap-2.5">
                          <span className="text-gold text-[7px] mt-1.5 shrink-0">◆</span>
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default PortfolioManagement;
