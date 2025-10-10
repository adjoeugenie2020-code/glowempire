// Home.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Megaphone,
  Monitor,
  Palette,
  Users,
  Globe2,
  Mail,
} from "lucide-react";

/**
 * Notes :
 * - Remplace les images /images/... par tes propres URLs.
 * - Nécessite : TailwindCSS + framer-motion + lucide-react installés.
 */

export default function Home() {
  // slider (hero image)
  const [slide, setSlide] = useState(0);
  const slides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ]; // remplacer par tes images

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const services = [
    {
      icon: Megaphone,
      title: "Communication & Événementiel",
      short: "Stratégie, organisation d’événements, gestion & hôtessariat (GLOW AURA).",
      gradient: "bg-gradient-to-br from-[#D4AF37] to-[#FFDB70]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/30 to-transparent",
    },
    {
      icon: Monitor,
      title: "Digital & Technologie",
      short: "Sites, applis, marketing digital, SEO, social ads et email marketing.",
      gradient: "bg-gradient-to-br from-[#004F9E] to-[#0077E6]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#004F9E]/25 to-transparent",
    },
    {
      icon: Palette,
      title: "Pôle Créatif & Visuel",
      short: "Branding, design graphique, photo, vidéo et storytelling visuel.",
      gradient: "bg-gradient-to-br from-[#E09A00] to-[#FFD166]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E09A00]/22 to-transparent",
    },
    {
      icon: Users,
      title: "Coaching & Développement",
      short: "Coaching pro & perso, leadership, prise de parole et personal branding.",
      gradient: "bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6D28D9]/20 to-transparent",
    },
    {
      icon: Globe2,
      title: "Formations Professionnelles",
      short: "Communication, design, web & no-code, community management.",
      gradient: "bg-gradient-to-br from-[#D4AF37] to-[#FFDB70]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/18 to-transparent",
    },
    {
      icon: Sparkles,
      title: "Événements Signature",
      short: "Conférence des Femmes Leaders du Bénin et autres événements majeurs.",
      gradient: "bg-gradient-to-br from-[#004F9E] to-[#2EA3FF]",
      halo: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2EA3FF]/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-[#01010A] text-white antialiased">
      {/* ---------------- HERO ---------------- */}
      <header className="min-h-[72vh] flex items-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
        {/* arrière-plan + halos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-28 top-10 w-96 h-96 rounded-full blur-[120px] bg-[#004F9E]/20"></div>
          <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full blur-[160px] bg-[#D4AF37]/18"></div>
        </div>

        {/* LEFT text */}
        <div className="relative z-10 md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Révélons votre éclat.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-md text-white/80"
          >
            GLOW EMPIRE — révéler, propulser et connecter talents, marques et idées.
          </motion.p>

          <div className="mt-6 flex gap-4 items-center">
            {/* CTA principal avec glow derrière */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              className="relative inline-block rounded-lg px-6 py-3 font-semibold text-[#001B3A] bg-[#D4AF37] shadow-[0_8px_30px_rgba(212,175,55,0.22)] overflow-hidden"
            >
              <span className="relative z-10">Découvrir nos pôles</span>
              {/* lumière allumée derrière */}
              <span
                aria-hidden
                className="absolute -inset-1 -z-10 rounded-lg blur-2xl"
                style={{ background: "radial-gradient(circle,#D4AF3766,#D4AF3700)" }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="relative inline-block rounded-lg px-6 py-3 border border-[#D4AF37] text-white/90"
            >
              <span className="relative z-10">Nous contacter</span>
              <span
                aria-hidden
                className="absolute -inset-1 -z-10 rounded-lg blur-xl opacity-50"
                style={{ background: "radial-gradient(circle,#D4AF3733,#00000000)" }}
              />
            </motion.a>
          </div>

          {/* quick points */}
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs text-sm text-white/70">
            <div>• Communication & Événementiel</div>
            <div>• Digital & Technologie</div>
            <div>• Coaching & Formations</div>
            <div>• Pôle Créatif & Événements</div>
          </div>
        </div>

        {/* RIGHT image (inline) */}
        <div className="relative z-10 md:w-1/2 flex justify-end mt-10 md:mt-0">
          <div className="w-[420px] md:w-[520px] rounded-[15px] border-4 border-double border-[#D4AF37] overflow-hidden shadow-[0_30px_80px_rgba(212,175,55,0.12)]">
            <img
              src={slides[slide]}
              alt="Hero"
              className="object-cover w-full h-[360px]"
            />
            {/* léger overlay dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </header>

      {/* ---------------- NOS PÔLES D'EXCELLENCE (DARK GRID AVEC HALOS) ---------------- */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 relative">
        {/* grille halo globale */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-8 top-8 w-72 h-72 rounded-full blur-[120px] bg-[#004F9E]/14"></div>
          <div className="absolute right-12 top-24 w-96 h-96 rounded-full blur-[160px] bg-[#D4AF37]/12"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Nos Pôles d’Excellence</h2>
              <p className="mt-2 text-white/70 max-w-xl">
                Des solutions intégrées pour révéler la lumière de chaque projet — stratégie, création, technologie et impact humain.
              </p>
            </div>
          </div>

          {/* DARK GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl p-8 overflow-hidden"
                >
                  {/* HALO derrière chaque carte */}
                  <div
                    className="absolute -inset-6 -z-10 rounded-3xl"
                    style={{
                      filter: "blur(56px)",
                      background:
                        i % 2 === 0
                          ? "radial-gradient(ellipse at center, rgba(212,175,55,0.12), rgba(0,0,0,0))"
                          : "radial-gradient(ellipse at center, rgba(0,79,158,0.10), rgba(0,0,0,0))",
                    }}
                  />

                  {/* CARD surface (dark glass) */}
                  <div className="relative bg-gradient-to-b from-[#071028]/60 to-[#071028]/40 border border-white/6 rounded-2xl p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
                    {/* icon rond avec gradient */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${s.gradient} shadow-[0_8px_30px_rgba(0,0,0,0.45)]`}
                      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{s.short}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href="#contact"
                        className="relative inline-block px-4 py-2 rounded-lg text-sm font-medium bg-[#D4AF37] text-[#001B3A]"
                        style={{
                          boxShadow: "0 12px 30px rgba(212,175,55,0.16)",
                        }}
                      >
                        Demander un devis
                      </a>
                      <a className="text-sm text-white/60 underline">En savoir +</a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- A PROPOS (utilise ton texte complet fourni) ---------------- */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#001A34]">
        <div className="max-w-5xl mx-auto text-white/90">
          <h2 className="text-3xl font-bold text-gold mb-4">Présentation Générale</h2>
          <p className="leading-relaxed text-white/80 mb-4">
            GLOW EMPIRE est une entreprise pluridisciplinaire basée au Bénin, fondée pour révéler,
            propulser et connecter les talents, les marques et les idées. Elle s’impose comme un
            acteur clé du développement créatif, numérique, humain et entrepreneurial, en offrant des
            services intégrés qui favorisent la visibilité, la performance et la réussite.
          </p>

          <p className="leading-relaxed text-white/80 mb-2">
            Symbole du diamant, GLOW EMPIRE incarne la pureté, la force, la résilience et la lumière
            intérieure : chaque individu, marque ou projet possède un éclat unique que nous faisons
            briller.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gold mb-2">Objectif</h4>
              <p className="text-white/80 text-sm">
                Créer un écosystème innovant et durable qui soutient la jeunesse, favorise la créativité
                et renforce la compétitivité des entreprises à travers des solutions stratégiques,
                technologiques et humaines.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold mb-2">Vision</h4>
              <p className="text-white/80 text-sm">
                Devenir un leader national et sous-régional dans la communication, le digital, l’événementiel
                et le développement personnel, impactant la jeunesse béninoise et africaine.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gold mb-2">But</h4>
              <ul className="text-white/80 text-sm list-disc list-inside space-y-1">
                <li>Valoriser les talents et entreprises par des initiatives créatives.</li>
                <li>Créer des emplois durables et opportunités pour la jeunesse.</li>
                <li>Promouvoir leadership, confiance et excellence.</li>
                <li>Positionner le Bénin comme hub créatif en AF francophone.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PORTFOLIO / RÉALISATIONS ---------------- */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#050617]">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-bold">Réalisations</h3>
          <p className="text-white/70 mt-2">Quelques projets et événements notables réalisés par GLOW EMPIRE.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-2xl overflow-hidden border border-white/6">
              <img src={`/images/work-${n}.jpg`} alt={`work-${n}`} className="w-full h-56 object-cover" />
              <div className="p-4 bg-gradient-to-t from-black/40 to-transparent">
                <h4 className="font-semibold">Projet {n}</h4>
                <p className="text-sm text-white/70">Brève description du projet et impact.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ÉQUIPE ---------------- */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#00122A]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold text-gold">L’Équipe dirigeante</h3>
          <p className="text-white/70 mt-2">Jeunes talents, passion et expertise au service de votre réussite.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Riquier SOUSSIA", role: "PDG" },
            { name: "Alix DAS-NAVIS", role: "DG" },
            { name: "Faridath ABOUDOU", role: "Trésorière" },
          ].map((m, idx) => (
            <div key={idx} className="relative rounded-2xl p-6 bg-[#04142A] border border-white/6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-[0_12px_40px_rgba(212,175,55,0.12)]">
                  <img src={`/images/team-${idx + 1}.jpg`} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{m.name}</h4>
                  <p className="text-white/70 text-sm">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <footer id="contact" className="py-16 px-6 md:px-16 lg:px-24 bg-[#000814]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Contactez GLOW EMPIRE</h3>
          <p className="text-white/70 mb-6">Pour un devis, une collaboration ou informations, contactez-nous.</p>
          <a
            href="mailto:contact@glowempire.com"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[#D4AF37] text-[#001B3A] font-semibold"
          >
            <Mail className="w-5 h-5" /> contact@glowempire.com
          </a>

          <div className="mt-8 text-white/60 text-sm">
            <p>© {new Date().getFullYear()} GLOW EMPIRE — Powered by Rénato TCHOBO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
