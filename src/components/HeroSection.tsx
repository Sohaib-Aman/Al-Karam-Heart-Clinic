import { Heart, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-primary">
          <Heart className="h-40 w-40" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-10 text-primary">
          <Heart className="h-60 w-60" fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
          <Heart className="h-96 w-96" fill="currentColor" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <Heart
            className="mx-auto mb-6 h-16 w-16 text-primary animate-pulse-heart"
            fill="currentColor"
          />
          <h1 className="font-display text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Your Heart,{" "}
            <span className="text-gradient-heart">Our Priority</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/70 font-body">
            Providing world-class cardiac care with compassion and cutting-edge
            technology. Trust your heart to the best hands.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923006897004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-heart hover:opacity-90 transition"
            >
              <Phone className="h-5 w-5" />
              Book via WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-secondary-foreground/20 px-8 py-4 text-base font-semibold text-secondary-foreground hover:border-primary hover:text-primary transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
