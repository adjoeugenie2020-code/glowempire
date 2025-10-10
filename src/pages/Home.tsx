import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Monitor, Users, Palette, Star } from "lucide-react";

export default function Home() {
  const services = [
    { icon: MessageCircle, title: "Communication & Événementiel", color: "from-yellow-400 to-amber-600" },
    { icon: Monitor, title: "Digital & Technologie", color: "from-blue-400 to-indigo-600" },
    { icon: Users, title: "Coaching & Leadership", color: "from-pink-400 to-rose-600" },
    { icon: Palette, title: "Créatif & Visuel", color: "from-purple-400 to-fuchsia-600" },
    { icon: Star, title: "Formations", color: "from-teal-400 to-emerald-600" },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 relative">
        <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-r from-yellow-500 via-indigo-500 to-blue-800 -z-10" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-yellow-400">GLOW EMPIRE</span><br />
            Révélons votre éclat.
          </h1>
          <p className="text-gray-300 text-lg">
            Une agence créative, digitale et humaine qui propulse les talents, les marques et les idées.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-semibold shadow-lg shadow-yellow-500/30"
              href="#services"
            >
              Découvrir nos pôles
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-white/40 rounded-xl font-semibold hover:bg-white/10"
              href="#vision"
            >
              Notre vision
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-0"
        >
          <img
            src="/images/glow-hero.jpg"
            alt="Glow Empire"
            className="w-[420px] md:w-[520px] rounded-[20px] border-[6px] border-double border-yellow-400 shadow-[0_0_40px_rgba(255,215,0,0.3)]"
          />
        </motion.div>
      </section>

      {/* SECTION - PRÉSENTATION */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-yellow-400"
        >
          Présentation
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          GLOW EMPIRE est une entreprise béninoise multidisciplinaire qui connecte les idées, les marques et les talents.
          Nous révélons le potentiel des individus et des entreprises à travers la créativité, la stratégie et la technologie.
        </p>
      </section>

      {/* SECTION - SERVICES */}
      <section id="services" className="py-24 px-6 md:px-20 bg-[#0f0f0f]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Nos Pôles d’Excellence
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${s.color} shadow-lg shadow-black/40 text-center`}
            >
              <s.icon className="w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION - VISION */}
      <section id="vision" className="py-24 px-6 md:px-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6 text-yellow-400"
        >
          Notre Vision
        </motion.h2>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
          Devenir un acteur de référence dans la communication, le digital et le développement humain en Afrique francophone.
          Nous croyons en une jeunesse créative, connectée et porteuse de lumière.
        </p>
      </section>

      {/* SECTION - OBJECTIF */}
      <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6 text-yellow-400"
        >
          Notre Objectif
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Créer un écosystème durable qui soutient la jeunesse, favorise la créativité et stimule la réussite à travers
          des solutions innovantes et humaines.
        </p>
      </section>

      {/* SECTION - ÉVÉNEMENTS */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-yellow-500 via-orange-600 to-amber-700 text-center text-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Événements Signature
        </motion.h2>
        <p className="max-w-3xl mx-auto text-lg font-medium">
          Des expériences qui inspirent, connectent et valorisent la jeunesse béninoise à travers des conférences, galas et
          programmes de formation.
        </p>
      </section>
    </div>
  );
}
