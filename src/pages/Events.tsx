import { motion } from 'framer-motion';
import { Calendar, Target, Star, Handshake, TrendingUp, Sparkles } from 'lucide-react';

const Events = () => {
  const eventSections = [
    {
      icon: Calendar,
      title: 'Présentation générale',
      content:
        "La Conférence des Femmes Leaders du Bénin est un événement phare organisé par GLOW EMPIRE, créant une plateforme d'échange, d'inspiration et de réseautage pour les femmes leaders, entrepreneures et professionnelles du Bénin et d'ailleurs.",
    },
    {
      icon: Target,
      title: 'Objectifs',
      content:
        "Célébrer les réussites féminines, promouvoir le leadership féminin, créer des opportunités de networking et inspirer la prochaine génération de femmes leaders à travers des témoignages et ateliers enrichissants.",
    },
    {
      icon: Star,
      title: 'Moments forts',
      content:
        "Panels de discussion avec des leaders inspirantes, ateliers interactifs sur le développement personnel et professionnel, sessions de networking stratégique, remise de prix aux femmes d'exception et spectacles culturels célébrant la femme africaine.",
    },
    {
      icon: Handshake,
      title: 'Partenaires',
      content:
        "Nous collaborons avec des institutions gouvernementales, des entreprises privées engagées pour l'égalité des genres, des ONG internationales et des médias nationaux pour garantir le succès et l'impact de cet événement majeur.",
    },
    {
      icon: TrendingUp,
      title: 'Bilan et impact',
      content:
        "Plus de 500 participantes, 20 intervenantes de renommée, création de 50+ partenariats stratégiques, lancement de 15 initiatives entrepreneuriales et une couverture médiatique nationale et internationale exceptionnelle.",
    },
  ];

  return (
    <div className="min-h-screen bg-lightGray">
      <section className="relative py-20 bg-gradient-to-br from-deepBlue via-royalBlue to-deepBlue">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Conférence des Femmes Leaders du Bénin
            </h1>
            <p className="text-2xl text-gold font-semibold mb-4">
              1ʳᵉ Édition - 2025
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {eventSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gold mb-4">
                    {section.title}
                  </h2>
                  <div className="w-16 h-1 bg-gold mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gold to-yellow-600 rounded-2xl p-12 text-center shadow-2xl"
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
