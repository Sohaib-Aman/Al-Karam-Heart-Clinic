import { Activity, Heart, Stethoscope, Syringe, HeartPulse, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Cardiac Consultation",
    desc: "Comprehensive heart health evaluation with our experienced cardiologists.",
  },
  {
    icon: Activity,
    title: "ECG & Stress Test",
    desc: "Advanced diagnostic tests to monitor heart rhythm and performance.",
  },
  {
    icon: Stethoscope,
    title: "Echocardiography",
    desc: "Detailed ultrasound imaging of your heart's structure and function.",
  },
  {
    icon: Syringe,
    title: "Angiography",
    desc: "Minimally invasive procedures to diagnose and treat blockages.",
  },
  {
    icon: Heart,
    title: "Heart Surgery",
    desc: "Expert surgical care including bypass and valve replacement.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Personalized plans to reduce heart disease risk and stay healthy.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group glass-card rounded-xl p-8 hover:shadow-heart transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
