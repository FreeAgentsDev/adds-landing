import { motion } from 'framer-motion';

const steps = [
  { num: 1, title: 'Descubrimiento', desc: 'Entendemos tus retos y objetivos.', icon: 'search' },
  { num: 2, title: 'Estrategia', desc: 'Trazamos la hoja de ruta técnica.', icon: 'route' },
  { num: 3, title: 'Diseño', desc: 'UX/UI centrada en la conversión.', icon: 'palette' },
  { num: 4, title: 'Desarrollo', desc: 'Construcción ágil y robusta.', icon: 'code' },
  { num: 5, title: 'Lanzamiento', desc: 'Despliegue y optimización.', icon: 'rocket_launch' },
];

export default function ComoTrabajamos() {
  return (
    <section className="py-24 px-4" id="proceso">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Proceso</h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black">Metodología de Escala</h3>
        </motion.div>
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="relative">
                  <div
                    className="size-16 rounded-full bg-background-dark border-2 border-primary/60 flex items-center justify-center shadow-[0_0_20px_rgba(19,200,236,0.2)] hover:shadow-[0_0_30px_rgba(19,200,236,0.4)] transition-shadow"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 size-6 rounded-full bg-primary text-background-dark text-xs font-black flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h6 className="text-white font-bold">{step.title}</h6>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
