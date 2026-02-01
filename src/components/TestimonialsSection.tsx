import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The PLM environment, whether it's 3DX or Teamcenter, is incredibly complex. You need massive computing power just to load a model, and if the server slows down during an update, the entire company's productivity takes a hit.",
    role: "Systems Engineering Lead",
    company: "Global Aerospace Manufacturer"
  },
  {
    quote: "PLM tools like Teamcenter or Windchill only serve half the purpose. They are great for version control and releasing data so manufacturing gets a clear BOM, but they are terrible for communication.",
    role: "Head of R&D",
    company: "Consumer Electronics Company"
  },
  {
    quote: "We depend heavily on external vendors for even small PLM changes. Most mechanical organizations simply don't have the internal capability to build or maintain these systems on their own.",
    role: "Program Manager",
    company: "Large Electrical Equipment Manufacturer"
  },
  {
    quote: "Teamcenter is very expensive and, honestly, the user experience needs improvement. To get adoption, you have to beat the ease of a Google Sheet, which these tools just don't do.",
    role: "Engineering Systems Lead",
    company: "Electric Mobility Company"
  },
  {
    quote: "Out of the box, Windchill gives you very little; we have to write custom code for almost everything, which creates a huge dependency on vendors.",
    role: "PLM Business Administrator",
    company: "Consumer Durables Manufacturer"
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
            What PLM teams are{' '}
            <span className="text-gradient">saying</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Voices from inside real-world PLM environments.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Metric Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border p-10 rounded-2xl bg-card"
          >
            <div className="text-7xl md:text-8xl font-display font-bold text-gradient mb-4">
              50+
            </div>
            <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
              product organizations engaged
            </h3>
            <p className="text-muted-foreground">
              Across engineering, manufacturing, R&D, and digital transformation teams 
              working with complex PLM landscapes.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[320px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="gradient-border p-8 rounded-2xl bg-card"
              >
                <Quote className="w-10 h-10 text-primary/40 mb-6" />
                
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="border-t border-border pt-6">
                  <p className="font-medium text-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
