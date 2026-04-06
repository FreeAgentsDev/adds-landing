import { motion } from 'framer-motion';

const differentiators = [
  {
    icon: 'code',
    title: 'Código propio, cero plantillas',
    desc: 'Todo lo que construimos es tuyo. Sin dependencias de plataformas que te cobren mensualidades eternas.',
  },
  {
    icon: 'group_work',
    title: 'Un equipo, todo el circuito',
    desc: 'No necesitas coordinar 3 proveedores. Nosotros cubrimos web, automatización, integraciones y soporte.',
  },
  {
    icon: 'psychology',
    title: 'Pensamos en negocio, no solo en tech',
    desc: 'Cada decisión técnica está atada a un objetivo de negocio. Si no mueve la aguja, no lo hacemos.',
  },
];

export default function QueEs() {
  return (
    <section className="py-24 px-4" id="que-es">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Por qué FreeAgents</h2>
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                El partner que tu negocio necesita <span className="text-gradient">para crecer</span>
              </h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                No vendemos horas de desarrollo. Vendemos resultados. Cada proyecto arranca con un objetivo medible
                y terminamos cuando ese objetivo se cumple.
              </p>
            </motion.div>
            <div className="space-y-6">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-4 group"
                >
                  <div className="size-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{d.icon}</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">{d.title}</h5>
                    <p className="text-slate-400 text-sm">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full glass p-10 aspect-video flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-neon-purple/5 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-[80px] text-primary/40">rocket_launch</span>
              <p className="text-slate-500 text-sm font-medium tracking-wide text-center">
                Aquí irá un video o imagen del equipo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
