import { motion } from 'framer-motion';

const services = [
  { name: 'Web estratégica', desc: 'Sitios que convierten y escalan con tu negocio.' },
  { name: 'Automatización', desc: 'Flujos que ahorran horas y reducen errores.' },
  { name: 'Sistemas internos', desc: 'Herramientas para operaciones y equipos.' },
  { name: 'Integraciones', desc: 'CRM, email, pagos y más en un solo flujo.' },
  { name: 'Escalabilidad', desc: 'Arquitectura pensada para crecer.' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Solucion() {
  return (
    <section id="solucion" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Solución
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/75 text-lg mb-12 max-w-2xl mx-auto"
        >
          Servicios pensados para full business growth.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.name}
              variants={item}
              className="glass rounded-xl p-5 sm:p-6 hover:border-neon-cyan/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-neon-cyan mb-2">{s.name}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
