import { Award, Clock, Users, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
  { icon: Heart, value: "98%", label: "Success Rate" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              About Us
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Trusted Cardiac Care for Your Family
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At HeartCare Clinic, we combine decades of clinical expertise with
              the latest in cardiac technology to deliver compassionate,
              patient-centered care. Our team of board-certified cardiologists is
              dedicated to helping you live a heart-healthy life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From preventive screenings to complex surgeries, we offer a full
              spectrum of cardiovascular services under one roof — because your
              heart deserves the very best.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-xl p-6 text-center hover:shadow-heart transition-all"
              >
                <s.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <p className="font-display text-2xl font-bold text-foreground">
                  {s.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
