import { motion } from "framer-motion";
import { Search, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Define Your Project",
    description: "Input your property location, project type, and requirements. Our platform instantly begins gathering relevant data from hundreds of sources.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "AI Analyzes Everything",
    description: "Our AI processes location data, market trends, zoning regulations, demographics, and comparable projects to deliver comprehensive insights.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Make Smarter Decisions",
    description: "Receive actionable reports with feasibility assessments, risk analysis, and optimized planning recommendations backed by data.",
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
            The fast way to actually{" "}
            <span className="text-gradient">get AI working</span> in your business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to transform your project development process.
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
