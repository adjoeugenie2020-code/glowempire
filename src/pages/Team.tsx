import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Team = () => {
  const members = [
    { name: 'Riquier SOUSSIA', role: 'PDG' },
    { name: 'Alix DAS-NAVIS', role: 'DG' },
    { name: 'Faridath ABOUDOU', role: 'Trésorière Générale' },
    { name: 'Prince DEGLI', role: 'TGA' },
    { name: 'Imelda GBELOME', role: 'DRH' },
    { name: 'ANANI Jordan', role: 'Graphiste Officiel' },
    { name: 'Rénato TCHOBO', role: 'Responsable Communication & Design Digital' },
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
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
              Des professionnels passionnés et dévoués à votre succès
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-deepBlue to-royalBlue rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold group-hover:shadow-lg group-hover:shadow-gold/50 transition-all">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold to-yellow-600 rounded-full mx-auto w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-deepBlue text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gold font-semibold text-center">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-deepBlue to-royalBlue rounded-2xl p-8 shadow-2xl">
              <p className="text-gold font-semibold text-lg">
                Powered by Rénato TCHOBO
              </p>
              <p className="text-white/80 text-sm mt-2">
                Responsable Communication & Design Digital
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
