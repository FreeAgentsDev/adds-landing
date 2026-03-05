import { motion } from 'framer-motion';

// Placeholder: reemplaza con logos reales (src, alt) y métricas cuando tengas datos
const metrics = [
  { value: '+50', label: 'proyectos entregados' },
  { value: '5+', label: 'industrias' },
  { value: '100%', label: 'enfoque en crecimiento' },
];

const testimonials = [
  {
    quote: 'FreeAgents no solo nos entregó un sistema: nos dio orden, datos y paz mental. El negocio escaló sin que nosotros nos volviéramos el cuello de botella.',
    author: 'Nombre del cliente',
    role: 'CEO o rol, empresa',
  },
  {
    quote: 'De tener todo en Excel y correos a tener un flujo que respira solo. La llamada estratégica fue el punto de inflexión.',
    author: 'Nombre del cliente',
    role: 'Director de operaciones, empresa',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Confían en nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/75 text-lg mb-12 max-w-2xl mx-auto"
        >
          Empresas que ya construyen su futuro con FreeAgents.
        </motion.p>

        {/* Métricas */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-16"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={item}
              className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-neon-cyan/30 transition-colors"
            >
              <span className="font-display text-3xl sm:text-4xl font-bold text-neon-cyan block mb-1">{m.value}</span>
              <span className="text-white/75 text-sm">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder: logos de clientes — descomenta y rellena cuando tengas imágenes */}
        {/* <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-16">
          <img src="/logos/cliente1.svg" alt="Cliente 1" className="h-10 grayscale" />
          <img src="/logos/cliente2.svg" alt="Cliente 2" className="h-10 grayscale" />
        </div> */}

        {/* Testimonios */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.author}
              variants={item}
              className="glass-strong rounded-2xl p-6 sm:p-8 border border-neon-blue/20"
            >
              <p className="text-white/90 italic mb-6 leading-relaxed">"{t.quote}"</p>
              <footer>
                <cite className="not-italic font-semibold text-white">{t.author}</cite>
                <span className="text-white/60 text-sm block">{t.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
