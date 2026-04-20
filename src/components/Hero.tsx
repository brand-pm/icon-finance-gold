import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import heroBg from "../assets/hero-cubes.webp";

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

const Hero = () => {
  const localize = useLocalizedPath();
  return (
  <section
    className="relative flex items-center overflow-hidden pt-20"
    style={{ minHeight: '60vh', backgroundColor: '#070D20' }}
  >
    {/* Background — designer's cube pattern at 10% opacity over #070D20 */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.1 }}
        fetchPriority="high"
        decoding="async"
      />
    </div>

    <div className="container-main relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full py-12 lg:py-0">
        {/* Left */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4 md:mb-6">Wealth Management</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-5 md:mb-6"
            style={{ fontSize: "clamp(28px,6vw,56px)" }}
          >
            Preserving & Growing Wealth Across Generations
          </h1>
          <p className="text-white/70 text-[15px] md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed">
            Comprehensive wealth management for families and entrepreneurs with
            international expertise and a tailored approach
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link to={localize("/contact")} className="btn-gold px-6 md:px-8 py-3.5 md:py-4">Start a dialogue</Link>
            <Link to={localize("/expertise")} className="btn-outline-gold px-6 md:px-8 py-3.5 md:py-4">Our expertise</Link>
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
};

export default Hero;
