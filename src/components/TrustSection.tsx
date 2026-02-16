import { motion } from "framer-motion";
import { Shield, Users, Lock, RefreshCw } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "DSGVO-konform", description: "Vollständige Datenschutz-Compliance für europäische Märkte" },
  { icon: Lock, title: "Unternehmenssicherheit", description: "SOC 2-zertifiziert mit Ende-zu-Ende-Verschlüsselung" },
  { icon: Users, title: "Kollaborativ", description: "Echtzeit-Zusammenarbeit für Teams jeder Größe" },
  { icon: RefreshCw, title: "Immer aktuell", description: "Kontinuierliche Datenaktualisierungen aus offiziellen Quellen" },
];

const TrustSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Vertraut von Branchenführern.{" "}
            <span className="text-gradient">Gebaut für Innovation.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Vollmitglied der TUM Venture Labs Built Environment — Treiber der digitalen Transformation im Bau- und Immobilienwesen mit modernster Technologie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5"
            >
              <item.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
