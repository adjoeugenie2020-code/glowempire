import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', page: 'home' },
    { name: 'À Propos', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Événements', page: 'events' },
    { name: 'Équipe', page: 'team' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <Sparkles className="w-8 h-8 text-gold" />
            <span className="text-2xl font-bold text-deepBlue">
              GLOW EMPIRE
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'text-gold'
                    : 'text-deepBlue hover:text-gold'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-deepBlue p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-deepBlue to-royalBlue z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-8 h-8 text-gold" />
                    <span className="text-xl font-bold text-white">
                      GLOW EMPIRE
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.page}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavigate(item.page)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                        currentPage === item.page
                          ? 'bg-gold text-deepBlue'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
