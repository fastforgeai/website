import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const companies = ['Cisco', 'Urban Company', 'L.E.K. Consulting', 'EY', 'Akamai'];

export function SecondaryHero() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            The AI knowledge layer for{' '}
            <span className="text-gradient">product lifecycle data</span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Leverage your existing PLM and engineering data to reduce rework, improve data trust, 
            and enable faster, more confident product decisions—from concept to production.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Button variant="outline" size="lg" className="group border-primary/50 hover:bg-primary/10">
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Built by engineers, consultants, and AI experts from complex product environments
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {companies.map((company) => (
                <span 
                  key={company}
                  className="text-lg font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
