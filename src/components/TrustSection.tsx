import { motion } from "framer-motion";
import { Shield, Users, Lock, RefreshCw } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "GDPR Compliant", description: "Full data protection compliance for European markets" },
  { icon: Lock, title: "Enterprise Security", description: "SOC 2 certified with end-to-end encryption" },
  { icon: Users, title: "Collaborative", description: "Real-time collaboration for teams of any size" },
  { icon: RefreshCw, title: "Always Up-to-Date", description: "Continuous data updates from official sources" },
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
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Secure. Reliable.{" "}
            <span className="text-gradient">Collaborative.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Built for enterprise-grade real estate workflows with security and compliance at its core.
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
