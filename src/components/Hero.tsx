import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, prefix: "$", suffix: "M", label: "under management" },
  { value: 100, prefix: "", suffix: "+", label: "family clients" },
  { value: 15, prefix: "", suffix: "+", label: "years of experience" },
  { value: 5, prefix: "", suffix: "", label: "jurisdictions" },
];

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const StatCard = ({ stat }: { stat: (typeof stats)[0] }) => {
  const { count, ref } = useCounter(stat.value);
  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-gold font-light" style={{ fontSize: "clamp(36px,6vw,52px)" }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-[13px] text-white/60 mt-2">{stat.label}</div>
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-navy overflow-hidden pt-20">
    {/* Background pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(224,167,118,0.06)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(19,26,49,0.8)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23E0A776' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="container-main relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-6">Wealth Management</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-6"
            style={{ fontSize: "clamp(32px,6vw,56px)" }}
          >
            Preserving & Growing Wealth Across Generations
          </h1>
          <p className="text-white/70 text-base max-w-lg mb-10 leading-relaxed">
            Comprehensive wealth management for families and entrepreneurs with
            international expertise and a tailored approach
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold px-8 py-4">Start a dialogue</a>
            <a href="#services" className="btn-outline-gold px-8 py-4">Our expertise</a>
          </div>
        </div>

        {/* Right — Stats grid */}
        <div
          className="grid grid-cols-2 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
              style={{ borderColor: "rgba(224,167,118,0.3)" }}
            >
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
