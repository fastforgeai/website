import { motion } from 'framer-motion';

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Webinars', 'Case Studies'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">F</span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">Fastforge</span>
            </a>
            <p className="text-sm text-muted-foreground">
              AI-native intelligence for PLM modernization.
            </p>
          </div>

          {/* Links */}
          
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Fastforge. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
