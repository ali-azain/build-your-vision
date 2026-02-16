import { motion } from "framer-motion";

const logos = [
  "Deutsche Bahn", "Siemens", "CBRE", "JLL", "Colliers", "Cushman & Wakefield"
];

const LogosSection = () => {
  return (
    <section className="section-padding py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading real estate professionals
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {logos.map((name) => (
            <span
              key={name}
              className="text-muted-foreground/40 font-display font-semibold text-lg tracking-wide"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogosSection;
