import { motion } from 'framer-motion';
import productVisual from '@/assets/product-visual.png';

export function ProductSection() {
  return (
    <section id="product" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              Product
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Tomorrow's PLM intelligence,{' '}
            <span className="text-gradient">today</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Coming soon
          </motion.p>

          {/* Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
            <img 
              src={productVisual} 
              alt="PLM Intelligence Platform Visualization"
              className="relative w-64 h-64 mx-auto object-contain animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
