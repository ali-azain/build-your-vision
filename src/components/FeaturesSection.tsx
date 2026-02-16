import { motion } from "framer-motion";
import { Brain, Database, Box, MapPin, TrendingUp, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Automate data collection and processing for property, location, and market intelligence with cutting-edge AI.",
  },
  {
    icon: Box,
    title: "BIM Integration",
    description: "Seamlessly integrate with Building Information Modeling tools for real-time project visualization and planning.",
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Leverage massive datasets to make data-driven investment and planning decisions with confidence.",
  },
  {
    icon: MapPin,
    title: "Location Due Diligence",
    description: "Comprehensive location analysis covering infrastructure, demographics, zoning, and market dynamics.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time market trends, comparable transactions, and predictive analytics for informed decision-making.",
  },
  {
    icon: Settings,
    title: "Planning Optimization",
    description: "Optimize your project plans with AI-driven recommendations for better outcomes and reduced risk.",
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
            Plug AI into your{" "}
            <span className="text-gradient">real estate workflows</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to digitalize project development, from initial assessment to final planning.
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
