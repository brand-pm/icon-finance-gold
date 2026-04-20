import { Link } from "react-router-dom";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceHero = ({ eyebrow, title, description, image, imageAlt }: ServiceHeroProps) => {
  const localize = useLocalizedPath();
  return (
  <section className="relative bg-navy overflow-hidden pt-24 pb-12" style={{ minHeight: "35vh" }}>
    {/* Background image — stretched across right side */}
    <div className="absolute inset-0">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.7) saturate(1.2)", objectPosition: "60% center" }}
      />
      {/* Gradient overlays to blend with navy */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
    </div>

    <div className="container-main relative z-10 flex items-center" style={{ minHeight: "28vh" }}>
      <div className="max-w-xl">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-4 md:mb-6">{eyebrow}</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-5 md:mb-6"
            style={{ fontSize: "clamp(28px,5vw,48px)" }}
          >
            {title}
          </h1>
          <p className="text-white/70 text-[15px] md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed">
            {description}
          </p>
          <Link to={localize("/contact")} className="btn-gold px-8 py-4 inline-block">
            Start a dialogue
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ServiceHero;
