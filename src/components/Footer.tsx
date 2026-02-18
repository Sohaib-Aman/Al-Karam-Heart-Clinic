import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" fill="currentColor" />
              <span className="font-display text-lg font-bold text-secondary-foreground">
                Al-Karam Heart Clinic & Diagnostic Centre, Khanewal    
              </span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Your trusted partner in cardiac health. Expert care, compassionate
              service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "About", "Contact"].map((l) =>
              <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-secondary-foreground/60 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors">

                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors">

                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors">

                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Contact</h4>
            <p className="text-sm text-secondary-foreground/60 leading-relaxed">
              123 Heart Street, Medical District<br />
              City — 560001<br />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} HeartCare Clinic. All rights reserved.
        </div>
      </div>
    </footer>);

};

export default Footer;