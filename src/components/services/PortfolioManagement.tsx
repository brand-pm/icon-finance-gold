import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface Step {
  number: string;
  title: string;
  items: string[];
}

interface PortfolioManagementProps {
  title: string;
  description: string;
  steps: Step[];
}

const PortfolioManagement = ({ title, description, steps }: PortfolioManagementProps) => {
  const ref = useScrollReveal();

  return (
    <section className="relative" ref={ref}>
      <div className="grid lg:grid-cols-2">
        {/* Left — dark */}
        <div className="bg-navy p-12 lg:p-20 flex flex-col justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Process</p>
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-md">
            {description}
          </p>
          <Link to="/#contact" className="btn-gold px-8 py-4 inline-block self-start text-[12px]">
            Start a dialogue
          </Link>
        </div>

        {/* Right — steps on dark bg */}
        <div className="bg-navy p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-6"
              style={{ border: "1px solid rgba(224,167,118,0.12)", background: "rgba(255,255,255,0.03)" }}
            >
              <span className="eyebrow">Step {step.number}</span>
              <h4 className="text-white font-semibold text-sm">{step.title}</h4>
              <div className="w-8 h-px bg-gold/30 my-1" />
              <ul className="space-y-1.5">
                {step.items.map((item, j) => (
                  <li key={j} className="text-white/50 text-xs flex items-start gap-2">
                    <span className="text-gold text-[6px] mt-1.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioManagement;
