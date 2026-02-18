import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "./ScrollAnimation";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              Get In Touch
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Contact Us
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-primary/50 rounded-full" />
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    18-Z Block, People's Colony, Opposite Circuit House, Eid Gah
                    Road, Khanewal
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href="https://chat.whatsapp.com/EwLKEqRJAYyFKs4bKylth9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block font-medium"
                  >
                    Join WhatsApp Channel
                  </a>
                  <br />
                  <a
                    href="tel:+923006338808"
                    className="text-primary hover:underline mt-1 inline-block font-medium"
                  >
                    +92 300 6338808 (Phone)
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:amanullahtahir@hotmail.com"
                    className="text-primary hover:underline mt-2 inline-block font-medium"
                  >
                    amanullahtahir@hotmail.com
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="glass-card rounded-2xl p-6 flex items-start gap-5 hover:border-primary/30 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    We are open 7 days a week.
                  </p>
                  <p className="text-muted-foreground mt-1 font-semibold text-primary/80">
                    Ramadan Timings:
                    <br />
                    Monday to Sunday: 12:00 PM to 05:00 PM
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm italic">
                    (Please call for appointment between 09:00 AM to 04:00 PM)
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Google Map */}
          <Reveal delay={300} className="h-full">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl h-full min-h-[400px] ring-1 ring-black/5">
              <iframe
                title="HeartCare Clinic Location"
                src="https://maps.google.com/maps?q=30.303186,71.937271&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
