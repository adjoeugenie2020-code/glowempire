import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Monitor,
  Users,
  Palette,
  GraduationCap,
  Award,
  X
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Communication & Événementiel',
      short: "Stratégies et événements percutants pour valoriser votre image.",
      details: "Nous concevons des stratégies sur mesure, gestion complète d'événements et relations publiques pour maximiser votre impact.",
      color: 'from-deepBlue to-royalBlue'
    },
    {
      icon: Monitor,
      title: 'Digital & Technologie',
      short: 'Solutions web et digitales innovantes pour votre entreprise.',
      details: 'Conception de sites web, applications mobiles, marketing digital et transformation digitale pour renforcer votre présence en ligne.',
      color: 'from-royalBlue to-blue-600'
    },
    {
      icon: Users,
      title: 'Coaching & Développement',
      short: 'Accompagnement pour leadership et performance.',
      details: 'Coaching individuel et collectif pour développer compétences, confiance et leadership de vos équipes.',
      color: 'from-gold to-amber-600'
    },
    {
      icon: Palette,
      title: 'Créatif & Visuel',
      short: 'Design graphique, identité visuelle et contenus captivants.',
      details: 'Création de contenus visuels, vidéos et identités de marque pour captiver votre audience et renforcer votre image.',
      color: 'from-gold to-yellow-500'
    },
    {
      icon: GraduationCap,
      title: 'Formations Professionnelles',
      short: 'Programmes adaptés pour booster vos compétences.',
      details: 'Formations en communication, digital, leadership et compétences professionnelles pour entreprises et particuliers.',
      color: 'from-royalBlue to-cyan-500'
    },
    {
      icon: Award,
      title: 'Événements Signature',
      short: 'Organisation d’événements majeurs inspirants et networking.',
      details: 'Conception, organisation et logistique d’événements comme conférences ou galas pour impact et visibilité maximales.',
      color: 'from-deepBlue to-purple-600'
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-lightGray">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-deepBlue via-royalBlue to-deepBlue text-center">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-6"
          >
            Des solutions complètes et sur mesure pour transformer vos ambitions en réalité.
          </motion.p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* GRID SERVICES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-gold cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-deepBlue text-center mb-2">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.short}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16 mb-24">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold hover:bg-yellow-500 text-deepBlue font-semibold px-10 py-4 rounded-2xl shadow-2xl transition-all"
        >
          Demander un devis
        </motion.button>
      </section>

      {/* MODAL DETAILS */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl max-w-xl w-full p-8 relative shadow-2xl">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-deepBlue"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center text-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-2xl flex items-center justify-center`}
                  >
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-deepBlue">{selectedService.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{selectedService.details}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Services;
