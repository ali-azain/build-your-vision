import { motion } from "framer-motion";
import { Search, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Definieren Sie Ihr Projekt",
    description: "Geben Sie Ihren Immobilienstandort, Projekttyp und Anforderungen ein. Unsere Plattform beginnt sofort, relevante Daten aus Hunderten von Quellen zu sammeln.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "KI analysiert alles",
    description: "Unsere KI verarbeitet Standortdaten, Markttrends, Bebauungsvorschriften, Demografie und vergleichbare Projekte, um umfassende Erkenntnisse zu liefern.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Treffen Sie klügere Entscheidungen",
    description: "Erhalten Sie umsetzbare Berichte mit Machbarkeitsbewertungen, Risikoanalysen und optimierten Planungsempfehlungen auf Datenbasis.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Der schnelle Weg, um{" "}
            <span className="text-gradient">KI in Ihrem Unternehmen</span> zum Laufen zu bringen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drei einfache Schritte zur Transformation Ihres Projektentwicklungsprozesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <span className="text-6xl font-display font-bold text-primary/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="relative pt-8 pl-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
