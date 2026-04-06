import { motion } from 'framer-motion';

const solutions = [
  {
    icon: 'language',
    title: 'Webs y Landings que Convierten',
    desc: 'Diseñamos experiencias digitales con un solo objetivo: que tu marca conecte y tus visitantes actúen. No páginas bonitas — presencia digital con propósito.',
  },
  {
    icon: 'bolt',
    title: 'Automatización de Ventas',
    desc: 'Tu equipo comercial se enfoca en cerrar. Nosotros construimos los sistemas que captan, califican y nutren prospectos automáticamente.',
  },
  {
    icon: 'settings_suggest',
    title: 'Software a la Medida',
    desc: 'Cada negocio tiene sus propios cuellos de botella. Construimos las herramientas exactas que tu operación necesita para fluir.',
  },
  {
    icon: 'hub',
    title: 'Integraciones Inteligentes',
    desc: 'Conectamos todo tu ecosistema para que los datos fluyan y tu equipo tenga contexto real para tomar decisiones.',
  },
];

export default function Solucion() {
  return (
    <section className="py-24 px-4 bg-transparent" id="soluciones">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Cómo lo hacemos</h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black">
            Las piezas del <span className="text-gradient">Full Business Growth</span>
          </h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-hover p-8 rounded-2xl glass hover:border-primary/30 transition-all flex flex-col gap-5"
            >
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(19,200,236,0.4)]">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-white">{s.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
