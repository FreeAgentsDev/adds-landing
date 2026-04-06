import { motion } from 'framer-motion';

const problems = [
  {
    icon: 'broken_image',
    label: 'Presencia sin conversión',
    desc: 'Tu web existe pero no trabaja para ti. Los visitantes llegan, miran y se van sin dejar rastro.',
  },
  {
    icon: 'timer_off',
    label: 'Operación desconectada',
    desc: 'Ventas por un lado, operaciones por otro, datos en Excel. Tu equipo gasta más tiempo coordinando que ejecutando.',
  },
  {
    icon: 'link_off',
    label: 'Crecimiento frenado',
    desc: 'Quieres escalar pero la tecnología no acompaña. Cada cliente nuevo es más caos en vez de más ingreso.',
  },
];

export default function Problema() {
  return (
    <section className="py-24 px-4 border-y border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Cuando cada pieza va por su lado, el negocio no avanza
          </h2>
          <p className="text-slate-400 text-lg mb-14 max-w-2xl mx-auto">
            Estos son los síntomas. Full Business Growth es la solución.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.icon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/50 border border-red-500/10 backdrop-blur-sm hover:border-red-400/25"
            >
              <div className="size-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-red-400 text-3xl">{p.icon}</span>
              </div>
              <p className="text-white text-lg font-bold">{p.label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
