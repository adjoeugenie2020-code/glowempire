import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Monitor,
  Users,
  Palette,
  GraduationCap,
  Award,
  X,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Communication & Événementiel",
      short: "Stratégies et événements percutants pour valoriser votre image.",
      details:
        "Nous concevons des stratégies sur mesure, gestion complète d'événements et relations publiques pour maximiser votre impact.",
      color: "from-[#026086] to-[#30C8D6]",
      image: "https://i.ibb.co/fY7RT8Gr/25c53919741f0fea59c17cf3e3a97b6f.jpg",
    },
    {
      icon: Monitor,
      title: "Digital & Technologie",
      short: "Solutions web et digitales innovantes pour votre entreprise.",
      details:
        "Conception de sites web, applications mobiles, marketing digital et transformation digitale pour renforcer votre présence en ligne.",
      color: "from-[#30C8D6] to-[#026086]",
      image: "https://i.ibb.co/GQK908hh/d3028a7b41218636593d458b4de6cbe8.jpg",
    },
    {
      icon: Users,
      title: "Coaching & Développement",
      short: "Accompagnement pour leadership et performance.",
      details:
        "Coaching individuel et collectif pour développer compétences, confiance et leadership de vos équipes.",
      color: "from-[#026086] to-[#30C8D6]",
      image: "https://i.ibb.co/8LnXNbbY/82f4ce8c5633788dc78c90aa40bce5cb.jpg",
    },
    {
      icon: Palette,
      title: "Créatif & Visuel",
      short: "Design graphique, identité visuelle et contenus captivants.",
      details:
        "Création de contenus visuels, vidéos et identités de marque pour captiver votre audience et renforcer votre image.",
      color: "from-[#30C8D6] to-[#026086]",
      image: "https://i.ibb.co/7NRTsBrt/42066bf3e46c354f48e6d17e7eaddfca.jpg",
    },
    {
      icon: GraduationCap,
      title: "Formations Professionnelles",
      short: "Programmes adaptés pour booster vos compétences.",
      details:
        "Formations en communication, digital, leadership et compétences professionnelles pour entreprises et particuliers.",
      color: "from-[#026086] to-[#30C8D6]",
      image: "https://i.ibb.co/zWYPMrNX/b78f066ff15ab77681bab950dba404ef.jpg",
    },
    {
      icon: Award,
      title: "Événements Signature",
      short: "Organisation d’événements majeurs inspirants et networking.",
      details:
        "Conception, organisation et logistique d’événements comme conférences ou galas pour impact et visibilité maximales.",
      color: "from-[#30C8D6] to-[#026086]",
      image: "https://i.ibb.co/pjMpM7nb/9b33c7951ffc835e4d02dc67ca4e2628.jpg",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#026086] via-[#30C8D6] to-[#026086] text-center">
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
            Des solutions professionnelles, adaptées et structurées pour répondre à vos besoins.
          </motion.p>

          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-[#30C8D6] cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />

              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-[#026086] text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.short}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-10 mb-24">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#30C8D6] hover:bg-[#26b4c2] text-white font-semibold px-10 py-4 rounded-2xl shadow-xl transition-all"
        >
          Demander un devis
        </motion.button>
      </section>

      {/* MODAL */}
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
                  className="absolute top-4 right-4 text-gray-500 hover:text-[#026086]"
                  onClick={() => setSelectedService(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center gap-4">
                  <img
                    src={selectedService.image}
                    alt="service"
                    className="w-full h-48 object-cover rounded-xl"
                  />

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-2xl flex items-center justify-center shadow-md`}
                  >
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-[#026086]">{selectedService.title}</h2>
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