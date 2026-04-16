import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import marbleTexture from "../../assets/marble-texture.svg";
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
  ctaLink?: string;
  ctaLabel?: string;
  ctaVariant?: "outline" | "filled";
}

const PortfolioManagement = ({
  title,
  description,
  steps,
  ctaLink = "/#contact",
  ctaLabel = "Start a dialogue",
  ctaVariant = "outline",
}: PortfolioManagementProps) => {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      style={{ background: "linear-gradient(180deg, #131A31 0%, #0A0F1E 100%)" }}
    >
      <div className="container-main section-padding">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
          {/* Left — sticky text block */}
          <div className="lg:sticky lg:top-24 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow mb-4">Work Process</p>
            <h2 className="text-white font-light mb-5" style={{ fontSize: "clamp(28px, 5vw, 42px)" }}>
              {title}
            </h2>
            <div className="gold-separator justify-start mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-white/50 text-base mb-10 max-w-sm">
              {description}
            </p>
            <Link
              to={ctaLink}
              className={`${ctaVariant === "filled" ? "btn-gold" : "btn-outline-gold"} px-8 py-3 inline-block text-[13px]`}
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Right — stacked stage cards (WorkProcess style) */}
          <div className="flex flex-col gap-6 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connecting dotted line between cards */}
                {i < steps.length - 1 && (
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
                    background: "hsl(224 54% 8%)",
                    border: "1px solid rgba(224,167,118,0.15)",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {/* Marble texture overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]"
                    style={{
                      backgroundImage: `url(${marbleTexture})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="p-7 flex flex-col sm:flex-row gap-6 relative z-[1]">
                    {/* Left side: stage label + title with vertical dots */}
                    <div className="flex-1">
                      <p className="text-gold text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
                        Stage {step.number}
                      </p>
                      <div className="flex items-start gap-3">
                        {/* Vertical decorative dots */}
                        <div className="flex flex-col items-center gap-1.5 pt-1.5 shrink-0">
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                          <div className="w-1 h-1 bg-gold/40 rotate-45" />
                        </div>
                        <h3 className="text-white text-xl font-normal leading-snug">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right side: duration + activities */}
                    <div className="sm:w-[260px] shrink-0">
                      <div className="flex items-center gap-1.5 text-white/45 text-[13px] mb-3">
                        <Clock size={13} strokeWidth={1.5} />
                        <span>Duration: {step.timeline}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {step.activities.map((item, j) => (
                          <li key={j} className="text-white/55 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-gold text-[6px] mt-1.5 shrink-0">◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      {step.result && (
                        <div className="mt-4 pt-3 border-t border-white/5">
                          <span className="text-gold/60 text-xs">Result: </span>
                          <span className="text-white/70 text-xs">{step.result}</span>
                        </div>
                      )}
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

export default PortfolioManagement;
