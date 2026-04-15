import { Link } from "react-router-dom";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceHero = ({ eyebrow, title, description, image, imageAlt }: ServiceHeroProps) => (
  <section className="relative bg-navy overflow-hidden pt-28 pb-20">
    <div className="container-main relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
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
            Get Started
          </Link>
        </div>

        {/* Right — icon */}
        <div className="flex items-center justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <img src={image} alt={imageAlt} className="w-[340px] h-[340px] object-contain" />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceHero;
