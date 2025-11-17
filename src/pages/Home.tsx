import { motion } from 'framer-motion';
import { Sparkles, Monitor, Users, Palette, Megaphone, Globe2, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const services = [
    { icon: Megaphone, title: 'Communication' },
    { icon: Monitor, title: 'Digital' },
    { icon: Palette, title: 'Créatif' },
    { icon: Users, title: 'Coaching' },
    { icon: Globe2, title: 'Stratégie' },
    { icon: Sparkles, title: 'Innovation' },
  ];

  // TYPEWRITER TEXT
  const phrases = [
    "✨ L'art rencontre la stratégie.",
    "🚀 Votre marque, notre mission.",
    "🎨 Créons ensemble votre univers.",
    "💡 L’innovation au service de l’image."
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= phrases.length) return;
    const timeout = setTimeout(() => {
      setSubIndex(prev => (reverse ? prev - 1 : prev + 1));
      if (!reverse && subIndex === phrases[index].length) {
        setTimeout(() => setReverse(true), 1000);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="bg-[#01010A] text-white overflow-hidden">

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 py-24 min-h-screen bg-gradient-to-br from-[#000814] via-[#001D3D] to-[#000814]">
        {/* Halo lumineux global */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Texte à gauche */}
        <div className="relative z-10 md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Faites briller <span className="text-yellow-400">votre empire</span> digital
          </motion.h1>

          {/* Typewriter */}
          <div className="text-yellow-400 text-lg font-semibold h-8 overflow-hidden whitespace-nowrap border-r-2 border-yellow-400 pr-2 animate-cursor">
            {phrases[index].substring(0, subIndex)}
          </div>

          <p className="text-white/80 max-w-md">
            Glow Empire, l’agence qui fusionne art, stratégie et technologie pour révéler l’excellence de votre marque.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="relative bg-yellow-400 text-deepBlue font-semibold px-6 py-3 rounded-xl overflow-hidden shadow-lg"
            >
              <span className="relative z-10">Découvrir nos pôles</span>
              <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-30"></div>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="relative border-2 border-yellow-400 text-white px-6 py-3 rounded-xl overflow-hidden"
            >
              <span className="relative z-10">Nous contacter</span>
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-50"></div>
            </motion.a>
          </div>
        </div>

        {/* Image à droite */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="relative border-double border-4 border-yellow-400 rounded-[15px] overflow-hidden shadow-[0_0_30px_#FFD70080]">
            <img
              src="https://i.ibb.co/yDgY0fh/e160b590-0336-4255-bd08-8b6ac201f812.jpg"
              alt="Glow Empire"
              className="object-cover w-full h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Curseur clignotant */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-cursor {
          animation: blink 1s infinite;
        }
      `}</style>

      {/* === SERVICES === */}
      <section id="services" className="relative bg-white py-24 px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001D3D]">Nos pôles d’excellence</h2>
          <p className="text-gray-500 mt-3">
            Des solutions globales pour sublimer votre présence digitale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#001D3D] to-[#000814] text-white rounded-2xl p-10 shadow-lg flex flex-col items-center justify-center overflow-hidden"
            >
              {/* 🌙 Lune animée */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 opacity-10"
              >
                <div className="relative">
                  <Moon size={180} className="text-yellow-400/70" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400/40 blur-3xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>

              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 mt-3 text-center">
                Découvrez notre expertise dans le domaine {service.title.toLowerCase()} pour booster votre impact.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === ABOUT === */}
      <section className="py-24 px-8 bg-gradient-to-r from-[#000814] via-[#001D3D] to-[#000814] text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Notre Vision</h2>
        <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
          Faire de chaque projet une expérience lumineuse, où créativité et stratégie fusionnent pour bâtir des marques fortes et inoubliables.
        </p>
      </section>

      {/* === PORTFOLIO === */}
      <section className="py-24 px-8 bg-white text-[#001D3D] text-center">
        <h2 className="text-4xl font-bold mb-6">Réalisations</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Découvrez quelques projets où nos équipes ont transformé la vision de nos clients en réalité digitale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1,2,3].map((i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
              <img src={`/images/work-${i}.jpg`} alt="" className="object-cover w-full h-64" />
            </div>
          ))}
        </div>
      </section>

      {/* === TEAM === */}
      <section className="py-24 px-8 bg-[#001D3D] text-center text-white">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">L’Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1,2,3].map((i) => (
            <div key={i} className="relative bg-white/5 rounded-2xl p-8 shadow-lg transition">
              <div className="absolute inset-0 bg-yellow-400/10 blur-xl opacity-30"></div>
              <img src={`/images/team-${i}.jpg`} alt="" className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-yellow-400 shadow-[0_0_25px_#FFD70080]" />
              <h3 className="text-xl font-semibold">Membre {i}</h3>
              <p className="text-white/70">Expert GLOW EMPIRE</p>
            </div>
          ))}
        </div>
      </section>

      {/* === CONTACT === */}
      <section id="contact" className="py-24 px-8 bg-gradient-to-b from-[#000814] via-[#001D3D] to-[#000814] text-center text-white">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Contactez-nous</h2>
        <p className="text-white/70 mb-10">Vous avez un projet ou une idée ? Donnons-lui vie ensemble.</p>
        <motion.a
          href="mailto:contact@glowempire.com"
          whileHover={{ scale: 1.05 }}
          className="relative bg-yellow-400 text-[#001D3D] font-semibold px-10 py-4 rounded-2xl shadow-lg"
        >
          <span className="relative z-10">Envoyer un message</span>
          <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40"></div>
        </motion.a>
      </section>

    </div>
  );
};

export default Home;
