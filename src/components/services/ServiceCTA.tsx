import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface ServiceCTAProps {
  title: string;
  description: string;
}

const ServiceCTA = ({ title, description }: ServiceCTAProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  const ref = useScrollReveal();

  const labelClass = "block text-white/70 text-xs uppercase tracking-wider mb-2";
  const inputClass =
    "w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="relative marble-texture-strong" style={{ background: "#F5F3F0" }} ref={ref}>
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
        {/* Left — centered horizontally and vertically */}
        <div className="opacity-0 animate-fade-up text-center flex flex-col items-center" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(26px,4vw,36px)" }}>
            {title}
          </h2>
          <div className="gold-separator mb-6">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
          <p className="text-slate text-sm leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        {/* Right — floating dark card */}
        <div
          data-radius-block
          className="bg-navy opacity-0 animate-fade-up"
          style={{
            padding: "40px",
            animationDelay: "0.2s",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35)",
          }}
        >
          <h3 className="font-light mb-3" style={{ fontSize: "28px", color: "#E0A776" }}>
            Send Us a Message
          </h3>
          <p className="mb-8" style={{ fontSize: "14px", color: "#9CA3AF" }}>
            Leave an inquiry and our expert will contact you within 24 hours.
          </p>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputClass}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClass}>Last name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputClass}
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Work email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className={inputClass}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClass}>Subject</label>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%23E0A776' stroke-width='1.5'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  paddingRight: "40px",
                }}
              >
                <option value="" className="bg-navy">Select a subject</option>
                <option value="wealth" className="bg-navy">Wealth Management</option>
                <option value="family" className="bg-navy">Family Office</option>
                <option value="structuring" className="bg-navy">Structuring & Tax</option>
                <option value="ma" className="bg-navy">M&A Consulting</option>
                <option value="other" className="bg-navy">Other</option>
              </select>
            </div>

            <button type="submit" className="btn-gold w-full py-4 text-[12px] mt-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
