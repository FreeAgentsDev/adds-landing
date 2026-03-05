import { motion } from 'framer-motion';

const columns = [
  {
    title: 'Desarrollo a medida',
    description: 'Software que se adapta a tu negocio, no al revés. Aplicaciones web, móviles e internas hechas a tu medida.',
    icon: '⚡',
  },
  {
    title: 'Optimización de procesos',
    description: 'Automatizamos tareas repetitivas y conectamos tus herramientas para que tu equipo trabaje más y mejor.',
    icon: '🔄',
  },
  {
    title: 'Estrategia digital',
    description: 'Definimos el camino: qué construir, en qué orden y cómo medir el impacto en tu negocio.',
    icon: '🎯',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QueEs() {
  return (
    <section id="que-es" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Qué es <span className="text-gradient">FreeAgents</span>?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Una software factory enfocada en full business growth: tecnología que resuelve y escala.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {columns.map((col) => (
            <motion.article
              key={col.title}
              variants={item}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-neon-blue/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 opacity-90 group-hover:scale-110 transition-transform">
                {col.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{col.title}</h3>
              <p className="text-white/75 leading-relaxed">{col.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
