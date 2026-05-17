import { useTranslation } from "react-i18next";
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
    <section className="section-padding bg-offwhite">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">{t("comparison.eyebrow")}</p>
          <h2 className="text-charcoal font-light max-w-3xl mx-auto" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {t("comparison.title")}
          </h2>
          <div className="gold-separator mt-6">
            <div className="line" /><div className="dot" /><div className="dot-lg" /><div className="dot" /><div className="line" />
          </div>
        </div>

        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {/* Desktop table */}
          <div className="hidden md:block rounded-xl overflow-hidden border border-charcoal/10 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-[11px] uppercase tracking-[0.12em] font-medium w-1/3">{h.parameter}</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-[0.12em] font-medium text-gold w-1/3">{h.iconFinance}</th>
                  <th className="px-6 py-4 text-[11px] uppercase tracking-[0.12em] font-medium text-white/70 w-1/3">{h.privateBank}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-offwhite/40" : "bg-white"}>
                    <td className="px-6 py-5 text-slate text-sm align-top">{r.parameter}</td>
                    <td className="px-6 py-5 text-charcoal text-sm font-medium align-top">{r.iconFinance}</td>
                    <td className="px-6 py-5 text-slate text-sm align-top">{r.privateBank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden flex flex-col gap-4">
            {rows.map((r, i) => (
              <div key={i} className="rounded-xl border border-charcoal/10 bg-white p-5">
                <p className="text-[10px] uppercase tracking-[0.12em] text-slate font-semibold mb-3">{r.parameter}</p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-gold mb-1">{h.iconFinance}</p>
                    <p className="text-charcoal text-sm font-medium">{r.iconFinance}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-slate mb-1">{h.privateBank}</p>
                    <p className="text-slate text-sm">{r.privateBank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-slate/80 text-xs italic text-center max-w-2xl mx-auto mt-8">
          {t("comparison.disclaimer")}
        </p>
      </div>
    </section>
  );
};

export default ComparisonBlock;
