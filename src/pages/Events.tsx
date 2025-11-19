import { motion } from "framer-motion";
import {
  Calendar,
  Target,
  Star,
  Handshake,
  TrendingUp,
  Sparkles,
  Mic,
  Lightbulb,
  BookOpen,
} from "lucide-react";

const Events = () => {
  const eventSections = [
    {
      icon: Lightbulb,
      title: "Masterclass : Esprit Entrepreneurial",
      images: [
        "https://i.ibb.co/5G6xzGp/entreprenariat1.jpg",
        "https://i.ibb.co/3Y2pgW6/entreprenariat2.jpg",
        "https://i.ibb.co/pRXgG6D/entreprenariat3.jpg",
      ],
      content:
        "Une session immersive visant à développer la créativité, l'analyse stratégique et la discipline nécessaires pour entreprendre efficacement. Les participants ont acquis des compétences clés pour transformer leurs idées en projets viables.",
    },
    {
      icon: Mic,
      title: "Masterclass : Prise de Parole en Public",
      images: [
        "https://i.ibb.co/tYkYmLM/priseparole1.jpg",
        "https://i.ibb.co/1d36Wcp/priseparole2.jpg",
        "https://i.ibb.co/VNfRtx7/priseparole3.jpg",
      ],
      content:
        "Une formation pratique dédiée à l'éloquence, la confiance en soi et la communication persuasive. Les exercices interactifs ont permis aux participants de maîtriser l'art de captiver et d'influencer un auditoire.",
    },
    {
      icon: BookOpen,
      title: "Présentation de AIVOKA – IA Juridique",
      images: [
        "https://i.ibb.co/7tFhJs3/aivoka1.jpg",
        "https://i.ibb.co/Yh7kx1p/aivoka2.jpg",
        "https://i.ibb.co/30Bsx04/aivoka3.jpg",
      ],
      content:
        "Un événement marquant présentant AIVOKA, une solution LegalTech basée sur l'intelligence artificielle. Cet outil révolutionnaire facilite l'accès à l'information juridique et améliore l'efficacité des professionnels du droit.",
    },
    {
      icon: Calendar,
      title: "Conférence des Femmes Leaders du Bénin – 1ʳᵉ Édition",
      images: [
        "https://i.ibb.co/9pTLDk7/conference1.jpg",
        "https://i.ibb.co/6RD2pXD/conference2.jpg",
        "https://i.ibb.co/cLxF8vs/conference3.jpg",
      ],
      content:
        "Un rassemblement historique réunissant plus de 500 participantes, avec des panels inspirants, des témoignages de haut niveau, des sessions de networking stratégique et des distinctions honorifiques.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#026086] via-[#30C8D6] to-[#026086] text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Nos Événements GLOW EMPIRE
            </h1>
            <p className="text-2xl text-yellow-300 font-semibold mb-4">
              Formations • Conférences • Innovations
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {eventSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* ICON */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-md">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-[#026086] mb-3">
                    {section.title}
                  </h2>
                  <div className="w-20 h-1 bg-yellow-400 mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {section.content}
                  </p>

                  {/* IMAGES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {section.images.map((img, i) => (
                      <div key={i} className="w-full h-48 overflow-hidden rounded-xl shadow-md">
                        <img
                          src={img}
                          alt={section.title + " image " + (i + 1)}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-12 text-center shadow-2xl"
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              2ᵉ Édition – Conférence des Femmes Leaders du Bénin
            </h3>
            <p className="text-xl text-white/90 mb-3">
              Prévue pour mars 2026
            </p>
            <p className="text-lg text-white/80">
              Une édition encore plus inspirante, plus immersive et plus valorisante.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
