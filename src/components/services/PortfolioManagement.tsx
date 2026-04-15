import { Link } from "react-router-dom";

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

const PortfolioManagement = ({ title, description, steps }: PortfolioManagementProps) => (
  <section className="relative">
    <div className="grid lg:grid-cols-2">
      {/* Left — dark */}
      <div className="bg-navy p-12 lg:p-20 flex flex-col justify-center">
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

      {/* Right — steps */}
      <div
        className="p-12 lg:p-20 grid grid-cols-1 sm:grid-cols-2 gap-8"
        style={{ background: "linear-gradient(135deg, #F5F3F0 0%, #EDE9E4 100%)" }}
      >
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-3">
            <span className="text-gold font-light text-2xl">{step.number}</span>
            <h4 className="text-charcoal font-semibold text-sm">{step.title}</h4>
            <ul className="space-y-1.5">
              {step.items.map((item, j) => (
                <li key={j} className="text-slate text-xs flex items-start gap-2">
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

export default PortfolioManagement;
