import { useScrollReveal } from "../hooks/useScrollReveal";

const cards = [
  { num: "01", title: "Confidentiality", desc: "Absolute protection of client information and assets", icon: "∞" },
  { num: "02", title: "Global Expertise", desc: "Operating in 5+ jurisdictions with international partners", icon: "◈" },
  { num: "03", title: "Personal Approach", desc: "Custom solutions for families involve tailoring approaches", icon: "◉" },
  { num: "04", title: "Transparency", desc: "Detailed reporting and monitoring of all assets", icon: "◎" },
];

const WhyUs = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-offwhite marble-texture" ref={ref}>
      <div className="container-main">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">Why Icon Finance</p>
          <h2 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
            Your Trusted Partner in Wealth Management
          </h2>
          <p className="text-slate text-base max-w-[560px] mx-auto">
            We combine global expertise with personal attention to deliver exceptional wealth management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 opacity-0 animate-fade-up"
              style={{
                border: "1px solid rgba(224,167,118,0.15)",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="text-gold font-light text-5xl opacity-90 mb-4">{card.num}</div>
              <h3 className="text-charcoal text-lg font-medium mb-3">{card.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-6">{card.desc}</p>
              <div className="text-gold text-2xl">{card.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
