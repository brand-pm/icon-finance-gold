import { useTranslation } from "react-i18next";
import { Check, Minus } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Row {
  parameter: string;
  iconFinance: string;
  privateBank: string;
}

const ComparisonBlock = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const rows = t("comparison.rows", { returnObjects: true }) as Row[];
  const h = t("comparison.headers", { returnObjects: true }) as Row;

  return (
    <section className="section-padding bg-offwhite" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <div
          className="text-center mb-6 md:mb-8 opacity-0 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="eyebrow mb-4">{t("comparison.eyebrow")}</p>
          <h2
            className="text-charcoal font-light mb-4 max-w-3xl"
            style={{ fontSize: "clamp(26px,4vw,38px)" }}
          >
            {t("comparison.title")}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
        </div>

        {/* Disclaimer — after separator, before table */}
        <div
          className="mb-10 md:mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <p className="text-slate/70 text-xs italic text-center max-w-2xl mx-auto">
            {t("comparison.disclaimer")}
          </p>
        </div>

        {/* Column headers — desktop only */}
        <div
          className="hidden md:grid grid-cols-12 gap-6 mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="col-span-3 pl-8">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate">
              {h.parameter}
            </p>
          </div>
          <div className="col-span-5 pl-8 border-l-2 border-gold/40">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-gold">
              {h.iconFinance}
            </p>
          </div>
          <div className="col-span-4 pl-8">
            <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-slate/70">
              {h.privateBank}
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-3 md:gap-2">
          {rows.map((r, i) => (
            <article
              key={i}
              className="group bg-white rounded-xl border border-charcoal/10 opacity-0 animate-fade-up transition-all duration-300 hover:border-gold/40 hover:shadow-[0_12px_32px_-16px_rgba(224,167,118,0.25)]"
              style={{ animationDelay: `${0.25 + i * 0.08}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center p-6 md:p-7">
                {/* Parameter */}
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-3 mb-2 md:mb-0">
                    <span className="text-gold/70 text-xs font-semibold tracking-[0.18em] transition-colors duration-300 group-hover:text-gold">
                      0{i + 1}
                    </span>
                    <span className="md:hidden text-[10px] uppercase tracking-[0.18em] font-semibold text-slate">
                      {h.parameter}
                    </span>
                  </div>
                  <p className="text-charcoal text-[16px] md:text-[15px] font-medium leading-snug">
                    {r.parameter}
                  </p>
                </div>

                {/* Icon Finance */}
                <div className="md:col-span-5 md:pl-8 md:border-l-2 md:border-gold/30 md:group-hover:border-gold transition-colors duration-300 pt-4 md:pt-0 border-t border-gold/15 md:border-t-0">
                  <p className="md:hidden text-[10px] uppercase tracking-[0.18em] font-semibold text-gold mb-2">
                    {h.iconFinance}
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                    </span>
                    <p className="text-navy text-[15px] font-medium leading-snug">
                      {r.iconFinance}
                    </p>
                  </div>
                </div>

                {/* Private Bank */}
                <div className="md:col-span-4 md:pl-8 pt-4 md:pt-0 border-t border-charcoal/10 md:border-t-0">
                  <p className="md:hidden text-[10px] uppercase tracking-[0.18em] font-semibold text-slate/70 mb-2">
                    {h.privateBank}
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-slate/10 flex items-center justify-center">
                      <Minus className="w-3 h-3 text-slate" strokeWidth={2.5} />
                    </span>
                    <p className="text-slate text-[14px] leading-snug">
                      {r.privateBank}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonBlock;
