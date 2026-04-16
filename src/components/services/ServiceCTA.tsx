import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const ref = useScrollReveal();

  const inputClass =
    "w-full bg-transparent border border-black/10 px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="relative" ref={ref}>
      <div className="grid lg:grid-cols-2">
        {/* Left — marble bg */}
        <div className="marble-texture-strong p-12 lg:p-20 flex flex-col justify-center opacity-0 animate-fade-up" style={{ background: "linear-gradient(135deg, #F5F3F0 0%, #EDE9E4 100%)", animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <p className="text-slate text-sm leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Right — form on dark */}
        <div className="bg-navy p-12 lg:p-20 flex flex-col justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-gold font-light text-xl mb-8">Send Us a Message</h3>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Your phone (optional)"
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <textarea
              placeholder="Tell us about your situation — assets, goals, timeline, or anything else relevant."
              rows={4}
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className="btn-gold px-8 py-4 text-[12px] self-stretch">
              Send Request
            </button>
            <p className="text-white/50 text-xs leading-relaxed">
              We respond to all inquiries within 24 hours. All information is treated with strict confidentiality.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
