import { useState } from "react";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const inputClass =
    "w-full bg-transparent border border-black/10 px-4 py-3 text-sm text-charcoal placeholder:text-slate/50 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        {/* Left — dark */}
        <div className="bg-navy p-12 lg:p-20 flex flex-col justify-center">
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Right — form */}
        <div
          className="p-12 lg:p-20 flex flex-col justify-center"
          style={{ background: "linear-gradient(135deg, #F5F3F0 0%, #EDE9E4 100%)" }}
        >
          <h3 className="text-charcoal font-light text-xl mb-8">Send Us a Message</h3>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className={inputClass}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className={inputClass}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone"
              className={inputClass}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <textarea
              placeholder="Message"
              rows={4}
              className={inputClass + " resize-none"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className="btn-gold px-8 py-4 text-[12px] self-start">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
