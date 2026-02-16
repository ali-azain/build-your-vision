import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glow-border p-12 md:p-20 text-center"
          style={{
            background: "linear-gradient(145deg, hsl(220 18% 10%) 0%, hsl(220 20% 6%) 100%)",
          }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[300px] rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Treffen Sie kritische Entscheidungen{" "}
              <span className="text-gradient">vor Entwurfsbeginn</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Schließen Sie sich führenden Architekten, Entwicklern und Kommunen an, die mit datengestützten Erkenntnissen und BIM beginnen — nicht als nachträglicher Gedanke, sondern von Tag eins an.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8">
                Demo anfragen
                <ArrowRight className="ml-1" size={18} />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8">
                Vertrieb kontaktieren
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
