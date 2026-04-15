import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <section className="section-padding marble-texture" style={{ background: "linear-gradient(180deg, #F5F3F0 0%, #EDE9E4 100%)" }}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="eyebrow mb-4">Who Benefits</p>
            <h2 className="text-charcoal font-light" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
              {sectionTitle}
            </h2>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div key={i} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-gold text-xs">◆</span>
                    <span className="text-charcoal font-medium text-[15px]">{item.title}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === i ? "200px" : "0" }}
                >
                  <p className="text-slate text-sm leading-relaxed pb-5 pl-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
