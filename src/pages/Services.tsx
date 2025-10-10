import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Monitor, Users, Palette, GraduationCap, Award, X } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'Communication & Événementiel',
      description:
        "Stratégies de communication percutantes, organisation d'événements professionnels et relations publiques pour valoriser votre image de marque.",
      details:
        "Nous concevons des stratégies de communication sur mesure, incluant branding, storytelling, et la gestion complète d'événements pour maximiser l'impact de votre marque.",
      color: 'from-royalBlue to-blue-600',
    },
    {
      icon: Monitor,
      title: 'Digital & Technologie',
      description:
        'Développement web et mobile, transformation digitale, marketing digital et solutions technologiques innovantes pour votre entreprise.',
      details:
        'Nos solutions digitales englobent la conception de sites web responsives, applications mobiles, campagnes digitales, et automatisation de processus pour booster votre présence en ligne.',
      color: 'from-deepBlue to-royalBlue',
    },
    {
      icon: Users,
      title: 'Coaching & Développement Personnel',
      description:
        'Accompagnement personnalisé pour le leadership, la gestion du stress, le développement de carrière et la réalisation de vos objectifs.',
      details:
        'Nous proposons des programmes de coaching individuels et collectifs pour améliorer compétences professionnelles, leadership, confiance en soi et performance globale.',
      color: 'from-gold to-amber-600',
    },
    {
      icon: Palette,
      title: 'Pôle Créatif & Visuel',
      description:
        "Design graphique, identité visuelle, production vidéo et création de contenus qui captivent et engagent votre audience.",
      details:
        'Notre équipe créative conçoit des identités visuelles, contenus graphiques et vidéos percutantes pour renforcer l’image et la visibilité de votre marque.',
      color: 'from-gold to-yellow-600',
    },
    {
      icon: GraduationCap,
      title: 'Formations Professionnelles',
      description:
        "Programmes de formation sur mesure en communication, digital, leadership et compétences professionnelles pour booster votre carrière.",
      details:
        'Nos formations sont conçues pour développer compétences techniques et managériales, adaptées aux besoins spécifiques des entreprises et professionnels.',
      color: 'from-royalBlue to-cyan-600',
    },
    {
      icon: Award,
      title: 'Événements Signature',
      description:
        "Organisation d'événements d'envergure comme la Conférence des Femmes Leaders du Bénin, créant des plateformes d'inspiration et de réseautage.",
      details:
        "Nous gérons la conception, organisation et logistique d'événements majeurs, garantissant impact, networking et visibilité maximale pour nos clients.",
      color: 'from-deepBlue to-purple-600',
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-lightGray">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-deepBlue via-royalBlue to-deepBlue text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Nos Services
          </motion.h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Des solutions complètes pour transformer vos ambitions en réalité
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* GRID SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)' }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-gold cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-deepBlue mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEMANDER UN DEVIS */}
      <motion.div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold hover:bg-yellow-500 text-deepBlue font-semibold px-10 py-4 rounded-2xl shadow-2xl transition-all"
        >
          Demander un devis
        </motion.button>
      </motion.div>

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
