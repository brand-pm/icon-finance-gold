import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface BenefitItem {
  title: string;
  description: string;
}

interface WhoBenefitsProps {
  sectionTitle: string;
  items: BenefitItem[];
}

const WhoBenefits = ({ sectionTitle, items }: WhoBenefitsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useScrollReveal();

  return (
    <section className="section-padding marble-texture" style={{ background: "linear-gradient(180deg, #F5F3F0 0%, #EDE9E4 100%)" }}>
      <div className="container-main" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow mb-4">Who Benefits</p>
            <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
              {sectionTitle}
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`transition-colors duration-300 ${isOpen ? "bg-navy" : "border-b border-black/10"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 px-5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-xs ${isOpen ? "text-gold" : "text-gold"}`}>◆</span>
                      <span className={`font-medium text-[15px] ${isOpen ? "text-white" : "text-charcoal"}`}>{item.title}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "200px" : "0" }}
                  >
                    <p className={`text-sm leading-relaxed pb-5 px-5 pl-12 ${isOpen ? "text-white/60" : "text-slate"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
