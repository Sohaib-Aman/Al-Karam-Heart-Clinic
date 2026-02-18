import Reveal from "./ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-accent/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Text */}
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                About Us
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Meet Dr. Aman Ullah Tahir
              </h2>
              <div className="prose prose-lg text-muted-foreground leading-relaxed mx-auto">
                <p>
                  Dr. Aman Ullah Tahir is a respected heart specialist known for
                  his deep clinical expertise and compassionate approach to
                  patient care. With years of dedicated experience in
                  cardiology, he has earned a strong reputation for accurately
                  diagnosing complex heart conditions and providing advanced,
                  evidence-based treatment plans.
                </p>
                <p className="mt-4">
                  His practice is built on precision, ethical medical guidance,
                  and a patient-centered philosophy that prioritizes long-term
                  heart health and overall well-being.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
