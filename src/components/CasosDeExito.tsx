import { motion } from 'framer-motion';

const testimonials = [
  {
    company: 'LogiTrack',
    industry: 'Logística y Transporte',
    quote: 'FreeAgents se sintió como parte de nuestro equipo desde el día uno. Entendieron nuestra operación y construyeron exactamente lo que necesitábamos para dejar de apagar incendios.',
    author: 'Carlos Mejía',
    role: 'Director de Operaciones',
    icon: 'local_shipping',
  },
  {
    company: 'Venti Digital',
    industry: 'Agencia de Marketing',
    quote: 'Por fin tenemos la operación digital que le prometemos a nuestros clientes. Nos acompañaron desde la estrategia hasta la ejecución sin soltar el hilo en ningún momento.',
    author: 'Andrés Restrepo',
    role: 'Fundador',
    icon: 'campaign',
  },
  {
    company: 'Clínica Salud+',
    industry: 'Salud',
    quote: 'Nos entendieron como nadie. No nos vendieron tecnología — se sentaron con nosotros, entendieron nuestro flujo y construyeron algo que de verdad usamos todos los días.',
    author: 'Laura Gómez',
    role: 'Directora Administrativa',
    icon: 'health_and_safety',
  },
];

export default function CasosDeExito() {
  return (
    <section id="casos" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Clientes
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black">
            Marcas que <span className="text-gradient">crecen con nosotros</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover glass p-8 rounded-2xl hover:border-primary/25 transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.company}</h4>
                  <p className="text-slate-500 text-xs">{t.industry}</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-white/5">
                <p className="text-white text-sm font-semibold">{t.author}</p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
