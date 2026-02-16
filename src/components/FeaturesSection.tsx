import { motion } from "framer-motion";
import { Brain, Database, Box, MapPin, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-gestützte Analyse",
    description: "Automatisieren Sie Datenerfassung und -verarbeitung für Immobilien-, Standort- und Marktinformationen mit modernster KI vor der Entwurfsphase.",
  },
  {
    icon: Box,
    title: "BIM von Anfang an",
    description: "Beginnen Sie mit BIM, nicht als nachträglicher Gedanke. IFC- und openBIM-Standards von den frühesten Projektphasen an integriert für maximalen Mehrwert.",
  },
  {
    icon: Database,
    title: "Standort-Due-Diligence",
    description: "Umfassende automatisierte Standortanalyse zu Makro-/Mikrolage, Demografie, Infrastruktur und Marktdynamik.",
  },
  {
    icon: MapPin,
    title: "Frühe Entscheidungsfindung",
    description: "Treffen Sie kritische Entscheidungen über Struktur, Nutzung und Skalierbarkeit vor Entwurfsbeginn — wo der größte Hebel liegt.",
  },
  {
    icon: Sparkles,
    title: "Generatives Design",
    description: "KI-gesteuertes generatives Design für Variantenerstellung, Dichteoptimierung und Einhaltung gesetzlicher Vorschriften vom Konzept bis zur Ausführung.",
  },
  {
    icon: TrendingUp,
    title: "Machbarkeit & Kostentransparenz",
    description: "Echtzeit-Machbarkeitsstudien, Baukostenprognosen und Renditeberechnungen basierend auf Live-Marktdaten und BIM-Modellen.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="product" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Integrieren Sie KI in Ihre{" "}
            <span className="text-gradient">Immobilien-Workflows</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alles, was Sie brauchen, um die Projektentwicklung zu digitalisieren, von der ersten Bewertung bis zur finalen Planung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
