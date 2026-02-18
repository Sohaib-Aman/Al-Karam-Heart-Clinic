import { Heart, Phone } from "lucide-react";
import Reveal from "./ScrollAnimation";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent/20" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <Reveal>
          <Heart
            className="mx-auto mb-6 h-16 w-16 text-primary animate-pulse-heart drop-shadow-xl"
            fill="currentColor"
          />
          <h1 className="font-display text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Your Heart,{" "}
            <span className="text-gradient-heart">Our Priority</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/70 font-body mb-10 leading-relaxed">
            Providing world-class cardiac care with compassion and cutting-edge
            technology. Trust your heart to the best hands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923006897004"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-heart hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Phone className="h-5 w-5 relative z-10" />
              <span className="relative z-10">Book via WhatsApp</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-secondary-foreground/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-secondary-foreground hover:border-primary hover:text-primary hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
