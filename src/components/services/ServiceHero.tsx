import { Link } from "react-router-dom";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceHero = ({ eyebrow, title, description, image, imageAlt }: ServiceHeroProps) => (
  <section className="relative bg-navy overflow-hidden pt-28 pb-20" style={{ minHeight: "70vh" }}>
    {/* Background image — stretched across right side */}
    <div className="absolute inset-0">
      <img
        src={image}
        alt=""
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[55%] h-[90%] object-contain opacity-80 hidden lg:block"
        style={{ filter: "brightness(0.85) saturate(1.2)" }}
      />
      {/* Gradient overlays to blend with navy */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy" />
    </div>

    <div className="container-main relative z-10 flex items-center" style={{ minHeight: "55vh" }}>
      <div className="max-w-xl">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1
            className="text-gold font-light leading-[1.15] mb-6"
            style={{ fontSize: "clamp(32px,5vw,48px)" }}
          >
            {title}
          </h1>
          <p className="text-white/70 text-base max-w-lg mb-10 leading-relaxed">
            {description}
          </p>
          <Link to="/#contact" className="btn-gold px-8 py-4 inline-block">
            Start a dialogue
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHero;
