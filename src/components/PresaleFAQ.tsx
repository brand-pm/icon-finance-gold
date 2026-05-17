import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const PresaleFAQ = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = t("presaleFAQ.items", { returnObjects: true }) as FAQItem[];

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-main" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-up text-center flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
            <p className="eyebrow mb-4">{t("presaleFAQ.eyebrow")}</p>
            <h2 className="text-charcoal font-light whitespace-pre-line" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
              {t("presaleFAQ.title")}
            </h2>
            <div className="gold-separator mt-6">
              <div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" />
            </div>
          </div>

          <div className="flex flex-col opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-black/10 transition-all duration-300"
                  style={{
                    borderLeft: isOpen ? "2px solid hsl(var(--gold))" : "2px solid transparent",
                    background: isOpen ? "hsl(var(--gold) / 0.04)" : "transparent",
                    paddingLeft: isOpen ? "16px" : "0",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-gold"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-medium text-[15px] transition-colors ${isOpen ? "text-gold" : "text-charcoal"}`}>
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "400px" : "0" }}>
                    <p className="text-slate text-sm leading-relaxed pb-5">{item.answer}</p>
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

export default PresaleFAQ;
