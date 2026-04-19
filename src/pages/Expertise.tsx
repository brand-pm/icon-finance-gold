import { Link } from "react-router-dom";
import { Briefcase, Users, Globe, Building2, Heart, Shield } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCTA from "../components/services/ServiceCTA";
import { useScrollReveal } from "../hooks/useScrollReveal";
import marbleHero from "../assets/expertise-hero-bg.jpg";

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
      {/* Top gradient — guarantees navbar readability */}
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 60%, rgba(10,15,30,0) 100%)",
        }}
      />
      {/* Main left-to-right overlay for hero text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,22,45,0.94) 35%, rgba(15,22,45,0.55) 100%)",
        }}
      />
    </div>

    <div className="container-main relative z-10 flex items-center" style={{ minHeight: "28vh" }}>
      <div className="max-w-xl">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-6">Expertise</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-6"
            style={{ fontSize: "clamp(32px,5vw,48px)" }}
          >
            Decades of Experience.<br />One Integrated Team.
          </h1>
          <p className="text-white/70 text-base max-w-lg mb-10 leading-relaxed">
            We bring together specialists in wealth management, family office, structuring, tax,
            and corporate advisory — working as one team around each client's complete financial
            life.
          </p>
          <Link to="/contact" className="btn-gold px-8 py-4 inline-block">
            Start a dialogue
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- SECTION 1 — COMPETENCIES ---------- */
const competencies = [
  {
    n: "01",
    title: "Wealth Management",
    body: "Independent investment management and portfolio advisory for entrepreneurs and families. No product commissions. No institutional quotas. Only advice aligned with your goals.",
  },
  {
    n: "02",
    title: "Family Office",
    body: "We design and operate family office structures for multi-generational families — coordinating investments, governance, succession, and reporting from a single point.",
  },
  {
    n: "03",
    title: "Structuring & Tax",
    body: "International wealth structuring and tax planning across multiple jurisdictions — designed to protect assets, reduce unnecessary tax drag, and ensure full legal compliance.",
  },
  {
    n: "04",
    title: "Corporate Advisory",
    body: "M&A advisory, exit planning, capital raising, and due diligence for business owners — from early growth through to final transaction close.",
  },
];

const Competencies = () => {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      className="relative marble-texture-strong section-padding"
      style={{ background: "#F5F3F0" }}
    >
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-20 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4">Our Competencies</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(32px,5vw,48px)" }}>
            What We Do
          </h2>
          <div className="gold-separator mx-auto">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16">
          {competencies.map((c, i) => (
            <div
              key={c.n}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div
                className="text-gold font-light leading-none mb-6"
                style={{ fontSize: "clamp(56px,7vw,80px)" }}
              >
                {c.n}
              </div>
              <h3 className="text-charcoal font-light mb-4" style={{ fontSize: "clamp(22px,2.4vw,28px)" }}>
                {c.title}
              </h3>
              <div className="w-12 h-px bg-gold/60 mb-5" />
              <p className="text-slate text-base leading-relaxed max-w-md">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SECTION 2 — INDUSTRIES ---------- */
const industries = [
  { Icon: Briefcase, title: "Entrepreneurs & Founders", body: "Business owners navigating the intersection of personal and corporate wealth at every stage of growth." },
  { Icon: Users, title: "Multi-Generational Families", body: "Families managing wealth across two or three generations with complex governance and succession needs." },
  { Icon: Globe, title: "International Clients", body: "Individuals and families with assets, residency, and interests spread across multiple jurisdictions." },
  { Icon: Building2, title: "Post-Exit Principals", body: "Founders and executives following a liquidity event who need disciplined capital deployment and protection." },
  { Icon: Heart, title: "Philanthropists", body: "Families and individuals seeking to deploy capital for lasting impact through structured giving." },
  { Icon: Shield, title: "Corporate & Institutional", body: "Companies and family businesses requiring independent M&A, capital, and restructuring advisory." },
];

const Industries = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-navy section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-20 opacity-0 animate-fade-up">
          <p className="eyebrow mb-4" style={{ color: "#E0A776" }}>Industries We Serve</p>
          <h2 className="text-white font-light mb-6" style={{ fontSize: "clamp(32px,5vw,48px)" }}>
            Who We Work With
          </h2>
          <div className="gold-separator mx-auto">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {industries.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <Icon className="text-gold mb-6" size={36} strokeWidth={1.25} />
              <h3 className="text-white font-light mb-3" style={{ fontSize: "20px" }}>
                {title}
              </h3>
              <div className="w-10 h-px bg-gold/50 mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SECTION 3 — INTERNATIONAL EXPERIENCE ---------- */
const jurisdictions = [
  { name: "Poland", desc: "Primary hub and regulatory base" },
  { name: "European Union", desc: "Cross-border structuring and compliance" },
  { name: "UAE / Dubai", desc: "Holding structures and residency planning" },
  { name: "Cyprus & Malta", desc: "EU-based tax planning vehicles" },
  { name: "Luxembourg", desc: "Fund and family holding structures" },
  { name: "BVI & Cayman", desc: "International holding vehicles" },
];

const International = () => {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      className="relative marble-texture-strong section-padding"
      style={{ background: "#F5F3F0" }}
    >
      <div className="container-main grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left */}
        <div className="opacity-0 animate-fade-up text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="eyebrow mb-4">International Experience</p>
          <h2 className="text-charcoal font-light mb-6" style={{ fontSize: "clamp(32px,5vw,48px)" }}>
            Where We Work
          </h2>
          <div className="gold-separator mb-8">
            <div className="line" />
            <div className="dot" />
            <div className="dot-lg" />
            <div className="dot" />
            <div className="line" />
          </div>
          <p className="text-slate text-base lg:text-lg leading-relaxed max-w-md">
            Our clients' lives do not stop at one border — and neither does our expertise.
            We coordinate across jurisdictions, time zones, and regulatory frameworks to give
            clients a single coherent view of their international wealth.
          </p>
        </div>

        {/* Right — jurisdiction grid */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {jurisdictions.map((j) => (
            <div key={j.name} className="border-l border-gold/40 pl-5">
              <div className="text-charcoal font-medium text-base mb-1.5">{j.name}</div>
              <div className="text-slate text-sm leading-relaxed">{j.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- SECTION 4 — KEY NUMBERS ---------- */
const stats = [
  { n: "15+", label: "Years in wealth management" },
  { n: "4", label: "Core service disciplines" },
  { n: "6+", label: "Jurisdictions covered" },
  { n: "4", label: "Languages spoken" },
];

const KeyNumbers = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="bg-navy section-padding">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div
                className="text-gold font-light leading-none mb-4"
                style={{ fontSize: "clamp(56px,7vw,84px)" }}
              >
                {s.n}
              </div>
              <div className="w-10 h-px bg-gold/50 mx-auto mb-4" />
              <p className="text-white/70 text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- PAGE ---------- */
const Expertise = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Competencies />
    <Industries />
    <International />
    <KeyNumbers />
    <ServiceCTA
      title="Start a Confidential Conversation"
      description="Arrange a private consultation with our team. We will listen to your situation first — and only propose a path forward if we are confident we can add meaningful value."
    />
    <Footer />
  </div>
);

export default Expertise;
