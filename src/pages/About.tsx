import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Users, Star } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const sections = [
    {
      icon: Lightbulb,
      title: "Présentation Générale",
      content:
        "GLOW EMPIRE est une agence multidisciplinaire basée à Cotonou, au Bénin. Nous combinons créativité, technologie et expertise pour offrir des solutions innovantes dans les domaines de la communication, du digital, du coaching et de la création visuelle.",
    },
    {
      icon: Target,
      title: "Objectif",
      content:
        "Notre objectif est d'accompagner les entreprises, les entrepreneurs et les talents dans leur développement en leur offrant des services de qualité supérieure qui répondent à leurs besoins spécifiques.",
    },
    {
      icon: Eye,
      title: "Vision",
      content:
        "Devenir la référence en Afrique de l'Ouest dans les domaines de la communication digitale, de l'événementiel et du développement personnel, en inspirant l'excellence et l'innovation.",
    },
    {
      icon: Heart,
      title: "But Fondamental",
      content:
        "Révéler le potentiel de chaque individu et organisation en leur permettant de briller dans leur domaine respectif, tout en créant un impact positif durable dans la société.",
    },
    {
      icon: Star,
      title: "Valeurs",
      content:
        "Innovation, intégrité, excellence et collaboration sont au cœur de nos actions pour construire des projets significatifs et durables.",
    },
    {
      icon: Users,
      title: "Équipe",
      content:
        "Notre équipe rassemble des experts passionnés en stratégie, création et digital, dédiés à accompagner nos clients vers le succès.",
    },
  ];

  /* ------------------ TYPEWRITER ------------------ */
  const phrases = [
    "Créativité & Stratégie.",
    "Votre marque, notre mission.",
    "Innovation & Impact.",
    "Excellence à chaque étape.",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));

      if (!reverse && subIndex === phrases[index].length) {
        setTimeout(() => setReverse(true), 800);
      } else if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, reverse ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="min-h-screen bg-[#F5FAFC]">

      {/* ------------------- HERO ------------------- */}
      <section
        className="relative py-24 bg-gradient-to-br from-[#026086] via-[#027599] to-[#026086]
        text-white shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 text-center grid place-items-center gap-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold tracking-wide"
          >
            À Propos de GLOW EMPIRE
          </motion.h1>

          <div className="w-32 h-1 bg-[#30C8D6] rounded-full"></div>

          {/* TYPEWRITER */}
          <div className="text-[#30C8D6] text-xl md:text-2xl font-semibold h-8 overflow-hidden whitespace-nowrap border-r-2 border-[#30C8D6] pr-3 animate-cursor">
            {phrases[index].substring(0, subIndex)}
          </div>
        </div>
      </section>

      {/* ------------------- SECTIONS ------------------- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#e7f2f5] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-5">

                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-[#30C8D6] flex items-center justify-center shadow-md">
                  <section.icon className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#026086] mb-3">
                    {section.title}
                  </h2>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ------------------- CURSEUR ------------------- */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-cursor {
          animation: blink 1s infinite;
        }
      `}</style>

    </div>
  );
};

export default About;
