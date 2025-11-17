import { motion } from 'framer-motion';
import {
  Calendar,
  Target,
  Star,
  Handshake,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

const Events = () => {
  const eventSections = [
    {
      icon: Calendar,
      title: 'Présentation générale',
      content:
        "La Conférence des Femmes Leaders du Bénin est un événement phare organisé par GLOW EMPIRE, offrant une plateforme d'échange, d'inspiration et de réseautage dédiée aux femmes leaders, entrepreneures et professionnelles du Bénin et d’ailleurs.",
    },
    {
      icon: Target,
      title: 'Objectifs',
      content:
        "Célébrer les réussites féminines, promouvoir le leadership, encourager le networking et inspirer la prochaine génération grâce à des panels, ateliers et témoignages à fort impact.",
    },
    {
      icon: Star,
      title: 'Moments forts',
      content:
        "Panels inspirants, ateliers de développement personnel et professionnel, sessions de networking stratégique, remise de distinctions honorifiques et animations culturelles valorisant la femme africaine.",
    },
    {
      icon: Handshake,
      title: 'Partenaires',
      content:
        "Institutions publiques, entreprises engagées pour l’égalité, ONG internationales et médias partenaires unissent leurs forces pour garantir le succès et l’impact de cet événement majeur.",
    },
    {
      icon: TrendingUp,
      title: 'Bilan et impact',
      content:
        "Plus de 500 participantes, 20 intervenantes de haut niveau, 50+ partenariats noués, 15 initiatives entrepreneuriales lancées, et une couverture médiatique nationale et internationale remarquable.",
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
              Conférence des Femmes Leaders du Bénin
            </h1>
            <p className="text-2xl text-yellow-300 font-semibold mb-4">
              1ʳᵉ Édition – 2025
            </p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {eventSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
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
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
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
              Rendez-vous en mars 2026
            </h3>
            <p className="text-xl text-white/90">
              Pour une édition encore plus inspirante
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;