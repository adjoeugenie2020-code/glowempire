import { motion } from 'framer-motion';
import { Sparkles, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative">
      {/* Barre tricolore au-dessus du footer */}
      <div className="w-full h-2 flex">
        <div className="w-1/3 h-full bg-green-500"></div>
        <div className="w-1/3 h-full bg-yellow-400"></div>
        <div className="w-1/3 h-full bg-red-500"></div>
      </div>

      {/* Footer */}
      <footer className="bg-[#01010A] pt-12 pb-8 relative"> {/* bleu nuit dark */}
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-gold" />
              <span className="text-2xl font-bold text-white">GLOW EMPIRE</span>
            </div>
            <p className="text-white/80 mb-6">
              Révélons la lumière qui brille en vous
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <motion.a href="https://www.facebook.com/share/1Aykp5xSKq/?mibextid=wwXIfr" whileHover={{ scale: 1.2 }} className="text-white">
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-white">
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="w-24 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-gold font-semibold text-lg">Powered by Rénato TCHOBO</p>
            <p className="text-white/60 text-sm mt-2">
              © 2025 GLOW EMPIRE. Tous droits réservés.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
