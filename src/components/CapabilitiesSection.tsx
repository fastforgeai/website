import { motion } from 'framer-motion';
import { Settings, Link2, Zap, Sparkles } from 'lucide-react';

const capabilities = [
  {
    icon: Settings,
    title: 'Adaptive PLM configuration',
    description: 'Continuously evolve data models, workflows, and business rules without hardcoding or long customization cycles—so PLM adapts as your organization changes.',
  },
  {
    icon: Link2,
    title: 'Enterprise-wide connectivity',
    description: 'Seamlessly connect PLM with ERP, MES, ALM, CAD, and surrounding systems to ensure data flows reliably across engineering, manufacturing, and operations.',
  },
  {
    icon: Zap,
    title: 'Faster change, safer upgrades',
    description: 'Accelerate upgrades, patches, and enhancements using automation and AI-driven validation—reducing regression risk and dependency on manual testing.',
  },
  {
    icon: Sparkles,
    title: 'Cleaner data, better adoption',
    description: 'Improve usability, data hygiene, and consistency by detecting gaps, broken links, and process friction that prevent teams from trusting or using PLM effectively.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function CapabilitiesSection() {
  return (
    <section id="solutions" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Modernize PLM{' '}
            <span className="text-gradient">without disruption</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Introduce intelligence, automation, and trust—without ripping and replacing your PLM stack.
          </motion.p>
        </div>

        {/* Capability Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {capabilities.map((capability) => (
            <motion.div
              key={capability.title}
              variants={cardVariants}
              className="gradient-border group p-8 rounded-xl bg-card hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                {capability.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
