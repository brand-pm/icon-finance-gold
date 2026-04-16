import { Link } from "react-router-dom";
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
        <div className="grid lg:grid-cols-[38%_62%] gap-16 items-start">
          {/* Left — sticky text block */}
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow mb-4">Work Process</p>
            <h2
              className="text-white font-light mb-5 whitespace-pre-line"
              style={{ fontSize: "clamp(28px, 5vw, 42px)" }}
            >
              {title}
            </h2>
            <div className="gold-separator justify-start mb-6">
              <div className="dot" />
              <div className="dot-lg" />
              <div className="dot" />
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

          {/* Right — stage cards */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative overflow-hidden"
                style={{
                  background: "hsl(224 54% 8%)",
                  border: "1px solid rgba(224,167,118,0.12)",
                }}
              >
                {/* Marble texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    backgroundImage: `url(${marbleTexture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.08,
                  }}
                />

                <div className="relative z-[1] p-8 grid sm:grid-cols-[1fr_auto] gap-6">
                  {/* Left: Stage info */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-gold text-[11px] uppercase tracking-[0.2em] font-semibold">
                        Stage {step.number}
                      </span>
                      <span className="text-white/35 text-[13px]">
                        {step.timeline}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-medium leading-snug mb-6 whitespace-pre-line">
                      {step.title}
                    </h3>
                    {step.result && (
                      <div className="mt-2">
                        <span className="text-white/40 text-sm">Result:</span>
                        <p className="text-white/80 text-sm mt-1">{step.result}</p>
                      </div>
                    )}
                  </div>

                  {/* Right: Activities */}
                  <div className="sm:w-[240px]">
                    <p className="text-white/40 text-sm mb-3">Activities:</p>
                    <ul className="space-y-2">
                      {step.activities.map((item, j) => (
                        <li
                          key={j}
                          className="text-white/70 text-sm leading-relaxed flex items-start gap-2.5"
                        >
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
