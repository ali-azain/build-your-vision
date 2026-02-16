import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const caseStudies = [
  {
    company: "Urban Developers AG",
    quote: "Early Build cut our due diligence time by 70%. We now assess 3x more locations in half the time, with better data quality than ever before.",
    person: "Thomas Mueller",
    role: "Head of Development",
    metric: "70%",
    metricLabel: "faster due diligence",
  },
  {
    company: "Proplan Architects",
    quote: "The BIM integration transformed our workflow. We get AI-driven insights directly in our planning environment, saving weeks of manual research.",
    person: "Anna Fischer",
    role: "Senior Architect",
    metric: "3x",
    metricLabel: "productivity increase",
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Real results from{" "}
            <span className="text-gradient">real projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {study.company}
                  </h3>
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-gradient">
                  {study.metric}
                </span>
                <span className="text-sm text-muted-foreground">
                  {study.metricLabel}
                </span>
              </div>

              <div className="relative">
                <Quote className="text-primary/20 absolute -top-1 -left-1" size={24} />
                <p className="text-muted-foreground leading-relaxed pl-6 italic">
                  "{study.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-semibold text-sm">
                  {study.person.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{study.person}</p>
                  <p className="text-xs text-muted-foreground">{study.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
