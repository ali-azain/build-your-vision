import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-xl font-bold text-foreground">
              early<span className="text-gradient">build</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Digitale Lösungen für die Projektentwicklung. Effizientere Prozesse für Architekten, Immobilienentwickler und Bauunternehmen.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#product" className="hover:text-foreground transition-colors">Funktionen</a></li>
              <li><a href="/#how-it-works" className="hover:text-foreground transition-colors">Wie es funktioniert</a></li>
              <li><a href="/#case-studies" className="hover:text-foreground transition-colors">Fallstudien</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Preise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Datenschutz</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Schwadermühlstraße 3 D‑, 90556 Cadolzburg</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+499103918468" className="hover:text-foreground transition-colors">+49 9103 9184685</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@earlybuild.ai" className="hover:text-foreground transition-colors">info@earlybuild.ai</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Early Build GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-foreground transition-colors">AGB</a>
            <a href="#" className="hover:text-foreground transition-colors">DSGVO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
