import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % navItems.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* -------- LOGO -------- */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="https://i.ibb.co/yDgY0fh/e160b590-0336-4255-bd08-8b6ac201f812.jpg"
              alt="Logo Glow Empire"
              className="w-12 h-12 object-cover rounded-full shadow-sm"
            />
            <span className="text-2xl font-extrabold tracking-wide text-deepBlue hidden lg:block">
              GLOW EMPIRE
            </span>
          </motion.div>

          {/* -------- SOCIALS MOBILE ONLY -------- */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 lg:hidden">
            <motion.a
              href="https://www.facebook.com/share/1Aykp5xSKq/?mibextid=wwXIfr"
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="text-deepBlue"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://instagram.com"
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="text-deepBlue"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </div>

          {/* -------- NAV DESKTOP -------- */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                animate={{
                  color:
                    currentPage === item.page
                      ? '#D4AF37'
                      : activeIndex === index
                      ? '#D4AF37'
                      : '#001D3D',
                  scale: currentPage === item.page ? 1.12 : 1,
                }}
                className="font-semibold text-lg transition-colors"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNavigate('contact')}
              className="bg-gold text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Demander un devis
            </motion.button>
          </nav>

          {/* -------- BURGER MENU -------- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-deepBlue p-2"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      {/* ---------------- MOBILE MENU ---------------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-72 bg-gradient-to-br from-deepBlue to-royalBlue text-white z-50 shadow-2xl p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.ibb.co/yDgY0fh/e160b590-0336-4255-bd08-8b6ac201f812.jpg"
                    alt="Logo Glow Empire"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-xl font-bold">GLOW EMPIRE</span>
                </div>

                <button onClick={() => setIsOpen(false)}>
                  <X className="w-7 h-7 text-white" />
                </button>
              </div>

              <nav className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      backgroundColor:
                        currentPage === item.page
                          ? '#D4AF37'
                          : activeIndex === index
                          ? '#D4AF37'
                          : 'transparent',
                    }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
                      currentPage === item.page
                        ? 'text-deepBlue'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavigate('contact')}
                  className="w-full mt-5 bg-gold text-white px-5 py-3 rounded-xl font-semibold shadow-md"
                >
                  Demander un devis
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
