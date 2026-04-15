import { useScrollReveal } from "../../hooks/useScrollReveal";

interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

interface PhilosophyProps {
  sectionTitle: string;
  subtitle: string;
  items: PhilosophyItem[];
}

const Philosophy = ({ sectionTitle, subtitle, items }: PhilosophyProps) => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding marble-texture-strong" style={{ background: "linear-gradient(180deg, #EDE9E4 0%, #F5F3F0 100%)" }}>
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Our Approach</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(26px,4vw,38px)" }}>
            {sectionTitle}
          </h2>
          <p className="text-slate text-base max-w-[520px] mx-auto mb-6">{subtitle}</p>
          <div className="gold-separator">
            <div className="dot" /><div className="dot-lg" /><div className="dot" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 flex flex-col items-center text-center gap-4 group hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-500 opacity-0 animate-fade-up cursor-pointer origin-center relative"
              style={{ border: "1px solid rgba(0,0,0,0.06)", animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <span className="text-gold/40 font-light transition-colors duration-500 group-hover:text-gold" style={{ fontSize: "56px", lineHeight: 1 }}>
                {item.number}
              </span>
              <h3 className="text-charcoal font-semibold text-base">{item.title}</h3>
              <p className="text-slate text-sm leading-relaxed flex-1">{item.description}</p>
              <span className="text-gold text-xl mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">∞</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
