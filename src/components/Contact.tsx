import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const subjects = [
  "Wealth Management", "Family Office", "Structuring & Tax",
  "Corporate Services", "Special Solutions", "Other",
];

const inputClass =
  "w-full p-4 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.15)] text-white placeholder:text-white/40 text-sm outline-none focus:border-gold transition-colors duration-300";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-offwhite marble-texture" ref={ref}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left */}
          <div className="relative flex flex-col items-center justify-center p-12 text-center opacity-0 animate-fade-up">
            <p className="eyebrow mb-4">Contact Form</p>
            <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(28px,5vw,42px)" }}>
              Start Managing Your Wealth Today
            </h2>
            <div className="gold-separator mb-6">
              <div className="dot" /><div className="dot-lg" /><div className="dot" />
            </div>
            <p className="text-slate text-base max-w-md">
              We respond personally within 24 hours. No call centers, no intermediaries.
            </p>
          </div>

          {/* Right */}
          <div className="bg-navy p-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-gold text-[28px] font-light mb-2">Send Us a Message</h3>
            <p className="text-white/70 text-sm mb-8">
              Leave an inquiry and our expert will contact you within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className={inputClass} />
                <input type="text" placeholder="Last name" className={inputClass} />
              </div>
              <input type="email" placeholder="Work email" className={inputClass} />
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`${inputClass} ${!subject ? "text-white/40" : ""}`}
              >
                <option value="" disabled>Subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s} className="bg-navy text-white">{s}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full btn-gold py-4 text-[13px] font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
