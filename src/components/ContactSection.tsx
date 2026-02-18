import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info cards */}
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground mt-1">
                  18-Z Block, People's Colony, Opposite Circuit House, Eid Gah Road, Khanewal
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Phone / WhatsApp</h3>
                <a
                  href="https://wa.me/923006897004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-1 inline-block"
                >
                  +92 300 6897004 (WhatsApp)
                </a>
                <br />
                <a
                  href="tel:+923006338808"
                  className="text-primary hover:underline mt-1 inline-block"
                >
                  +92 300 6338808 (Phone)
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Email</h3>
                <a href="mailto:amanullahtahir@hotmail.com" className="text-primary hover:underline mt-1 inline-block">
                  amanullahtahir@hotmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Working Hours</h3>
                <p className="text-muted-foreground mt-1">
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: Emergency Only
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-border shadow-lg min-h-[400px]">
            <iframe
              title="HeartCare Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
