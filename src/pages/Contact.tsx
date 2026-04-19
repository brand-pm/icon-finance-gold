import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marbleHero from "../assets/marble-mono-1.jpg";

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="relative bg-navy overflow-hidden pt-24 pb-12" style={{ minHeight: "35vh" }}>
    <div className="absolute inset-0">
      <img
        src={marbleHero}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,22,45,0.95) 40%, rgba(15,22,45,0.6) 100%)",
        }}
      />
    </div>

    <div className="container-main relative z-10 flex items-center" style={{ minHeight: "28vh" }}>
      <div className="max-w-xl">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-6">Contact</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-6"
            style={{ fontSize: "clamp(32px,5vw,48px)" }}
          >
            Start a Confidential Conversation
          </h1>
          <p className="text-white/70 text-base max-w-lg leading-relaxed">
            We listen first. We only propose a path forward when we are confident we can add
            meaningful value to your situation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- CONTACT DETAILS + FORM ---------- */
const detailBlocks = [
  { title: "Office", body: "Warsaw, Poland" },
  { title: "Email", body: "info@iconfinance.io" },
  { title: "Response Time", body: "We respond to all inquiries within 24 hours." },
  {
    title: "Confidentiality",
    body: "All information shared with us is treated with strict professional discretion. NDA available on request.",
  },
];

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Please add a bit more detail").max(2000),
});

const ContactBody = () => {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const labelClass = "block text-white/70 text-xs uppercase tracking-wider mb-2";
  const inputClass =
    "w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Message sent. We will respond within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact-form"
      ref={ref}
      className="relative marble-texture-strong section-padding"
      style={{ background: "#F5F3F0" }}
    >
      <div className="container-main grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT — details */}
        <div className="opacity-0 animate-fade-up flex flex-col" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4">Get in Touch</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(28px,4vw,38px)" }}>
            How to Reach Us
          </h2>
          <div className="gold-separator mb-10">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>

          <div className="flex flex-col">
            {detailBlocks.map((b, i) => (
              <div key={b.title}>
                <div className="py-6">
                  <h3 className="text-charcoal font-medium text-base mb-2 uppercase tracking-wider">
                    {b.title}
                  </h3>
                  <p className="text-slate text-base leading-relaxed max-w-md">{b.body}</p>
                </div>
                {i < detailBlocks.length - 1 && (
                  <div className="gold-separator opacity-70">
                    <div className="line" />
                    <div className="dot" />
                    <div className="dot-lg" />
                    <div className="dot" />
                    <div className="line" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form (same dark navy floating card) */}
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

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First name</label>
                <input
                  type="text"
                  maxLength={80}
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
                  maxLength={80}
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
                maxLength={255}
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
                <option value="special" className="bg-navy">Special Solutions</option>
                <option value="other" className="bg-navy">Other</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Message</label>
              <textarea
                rows={4}
                maxLength={2000}
                placeholder="Tell us about your situation — assets, goals, timeline, or anything else relevant."
                className={`${inputClass} resize-none`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-gold w-full py-4 text-[12px] mt-2">
              Send Request
            </button>

            <p className="text-white/50 text-xs leading-relaxed mt-1">
              We respond within 24 hours. All information is strictly confidential.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ---------- BOTTOM CTA ---------- */
const BottomCTA = () => {
  const ref = useScrollReveal();
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section ref={ref} className="bg-navy section-padding">
      <div className="container-main text-center max-w-2xl mx-auto">
        <div className="opacity-0 animate-fade-up">
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(28px,4vw,40px)" }}>
            Not Sure Where to Start?
          </h2>
          <div className="gold-separator mx-auto mb-8">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10">
            Many of our clients come to us without a clear brief — just a sense that their current
            situation could be better managed. That is a perfectly good place to begin.
          </p>
          <button onClick={scrollToForm} className="btn-gold px-8 py-4 inline-block">
            Send Us a Message
          </button>
        </div>
      </div>
    </section>
  );
};

/* ---------- PAGE ---------- */
const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <ContactBody />
    <BottomCTA />
    <Footer />
  </div>
);

export default Contact;
