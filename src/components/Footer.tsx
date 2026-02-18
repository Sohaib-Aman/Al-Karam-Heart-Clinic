import { Heart } from "lucide-react";
import Reveal from "./ScrollAnimation";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-20 pb-12 relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <Heart
                className="h-6 w-6 text-primary animate-pulse-heart"
                fill="currentColor"
              />
              <span className="font-display text-lg font-bold text-secondary-foreground">
                Al-Karam Heart Clinic & Diagnostic Centre, Khanewal
              </span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-xs">
              Your trusted partner in cardiac health. Expert care, compassionate
              service, and state-of-the-art facilities.
            </p>
          </Reveal>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Services", "About", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/50 group-hover:w-2 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Follow Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://chat.whatsapp.com/EwLKEqRJAYyFKs4bKylth9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1G2AWULT5S/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/amantahir7191?igsh=cDhzdXFrcDZqb2lw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-6">
              Contact
            </h4>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed mb-2">
              18-Z Block, People's Colony,
              <br />
              Opposite Circuit House,
              <br />
              Eid Gah Road, Khanewal
            </p>
            <a
              href="tel:+923006338808"
              className="text-sm text-secondary-foreground/60 leading-relaxed mb-4"
            >
              +92-300-6897004
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-secondary-foreground/10 pt-8 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Al-Karam Heart Clinic. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
