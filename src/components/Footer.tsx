import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-deepBlue to-royalBlue py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold text-white">GLOW EMPIRE</span>
          </div>
          <p className="text-white/80 mb-6">
            Révélons la lumière qui brille en vous
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gold font-semibold text-lg">
            Powered by Rénato TCHOBO
          </p>
          <p className="text-white/60 text-sm mt-2">
            © 2025 GLOW EMPIRE. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
