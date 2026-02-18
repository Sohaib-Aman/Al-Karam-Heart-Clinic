import {
  Activity,
  Heart,
  Stethoscope,
  Clock,
  Zap,
  Monitor,
  Microscope,
} from "lucide-react";
import Reveal from "./ScrollAnimation";

const services = [
  {
    icon: Stethoscope,
    title: "Consultation",
    desc: "Expert consultation for Cardiac Patients, Hypertension, Diabetes Mellitus & Blood Disorders.",
  },
  {
    icon: Activity,
    title: "E.C.G",
    desc: "Electrocardiogram testing to monitor your heart's electrical activity.",
  },
  {
    icon: Heart,
    title: "Echocardiography & Colour Doppler",
    desc: "Detailed ultrasound imaging to assess heart structure and blood flow.",
  },
  {
    icon: Clock,
    title: "Exercise Tolerance Test (E.T.T)",
    desc: "Stress testing to evaluate heart function during physical ease.",
  },
  {
    icon: Monitor,
    title: "Cardiac Monitors",
    desc: "Continuous heart monitoring for accurate diagnosis and observation.",
  },
  {
    icon: Zap,
    title: "Cardiac Defibrillator",
    desc: "Life-saving equipment for restoring normal heart rhythm effectively.",
  },
  {
    icon: Microscope,
    title: "Latest Computerized Lab",
    desc: "State-of-the-art laboratory for precise and comprehensive diagnostic testing.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-accent/50 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              What We Offer
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Our Services
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-primary/50 rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, index) => (
            <Reveal key={s.title} delay={index * 100}>
              <div className="group glass-card rounded-2xl p-8 hover:shadow-heart transition-all duration-500 hover:-translate-y-2 border-white/40 dark:border-white/10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-white text-primary shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
