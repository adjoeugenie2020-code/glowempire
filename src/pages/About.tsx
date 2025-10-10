import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const sections = [
    {
      icon: Lightbulb,
      title: 'Présentation Générale',
      content:
        'GLOW EMPIRE est une agence multidisciplinaire basée à Cotonou, au Bénin. Nous combinons créativité, technologie et expertise pour offrir des solutions innovantes dans les domaines de la communication, du digital, du coaching et de la création visuelle.',
    },
    {
      icon: Target,
      title: 'Objectif',
      content:
        "Notre objectif est d'accompagner les entreprises, les entrepreneurs et les talents dans leur développement en leur offrant des services de qualité supérieure qui répondent à leurs besoins spécifiques.",
    },
    {
      icon: Eye,
      title: 'Vision',
      content:
        "Devenir la référence en Afrique de l'Ouest dans les domaines de la communication digitale, de l'événementiel et du développement personnel, en inspirant l'excellence et l'innovation.",
    },
    {
      icon: Heart,
      title: 'But Fondamental',
      content:
        'Révéler le potentiel de chaque individu et organisation en leur permettant de briller dans leur domaine respectif, tout en créant un impact positif durable dans la société.',
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              À Propos de GLOW EMPIRE
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-600 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
