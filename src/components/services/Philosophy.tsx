import { ArrowRight } from "lucide-react";

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

const Philosophy = ({ sectionTitle, subtitle, items }: PhilosophyProps) => (
  <section className="section-padding marble-texture" style={{ background: "linear-gradient(180deg, #EDE9E4 0%, #F5F3F0 100%)" }}>
    <div className="container-main">
      {/* Header */}
      <div className="text-center mb-16">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-offwhite p-8 flex flex-col gap-4 group hover:shadow-lg transition-shadow duration-300"
            style={{ border: "1px solid rgba(0,0,0,0.06)" }}
          >
            <span className="text-gold font-light text-3xl">{item.number}</span>
            <h3 className="text-charcoal font-semibold text-[15px]">{item.title}</h3>
            <p className="text-slate text-sm leading-relaxed flex-1">{item.description}</p>
            <ArrowRight className="w-5 h-5 text-gold mt-2 group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Philosophy;
