import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu negocio, objetivos y dolores.' },
  { num: '02', title: 'Estrategia', desc: 'Priorizamos qué construir y en qué orden.' },
  { num: '03', title: 'Diseño y arquitectura', desc: 'Diseñamos la solución y la estructura técnica.' },
  { num: '04', title: 'Desarrollo', desc: 'Construimos en sprints con feedback continuo.' },
  { num: '05', title: 'Lanzamiento y mejora', desc: 'Desplegamos, medimos y optimizamos.' },
];

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Cómo trabajamos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/75 text-lg mb-14"
        >
          Proceso claro y orientado a resultados.
        </motion.p>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start hover:border-neon-blue/30 transition-colors"
            >
              <span className="font-display text-3xl sm:text-4xl font-bold text-neon-blue/80 shrink-0">
                {step.num}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/75 leading-relaxed">{step.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
