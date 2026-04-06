import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    icon: 'language',
    title: 'Captar',
    subtitle: 'Presencia digital que convierte',
    desc: 'Webs, landings y embudos diseñados para que tu marca conecte y tus visitantes actúen. Cada pixel tiene un objetivo de negocio.',
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    num: '02',
    icon: 'bolt',
    title: 'Automatizar',
    subtitle: 'Operaciones que escalan solas',
    desc: 'Tu equipo se enfoca en cerrar. Nosotros construimos los sistemas que captan, califican y nutren prospectos automáticamente.',
    color: 'from-neon-cyan to-neon-purple',
  },
  {
    num: '03',
    icon: 'hub',
    title: 'Conectar',
    subtitle: 'Un ecosistema, no islas',
    desc: 'CRM, ERP, ventas, operaciones — todo hablándose. Datos unificados para que tu equipo tenga contexto real.',
    color: 'from-neon-purple to-neon-pink',
  },
  {
    num: '04',
    icon: 'settings_suggest',
    title: 'Escalar',
    subtitle: 'Software a tu medida',
    desc: 'Dashboards, plataformas internas, apps — diseñadas para resolver los cuellos de botella específicos de tu operación y crecer contigo.',
    color: 'from-neon-pink to-neon-blue',
  },
];

export default function FullBusinessGrowth() {
  return (
    <section id="full-business-growth" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Nuestro enfoque
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            ¿Qué es <span className="text-gradient">Full Business Growth</span>?
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg sm:text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          La mayoría de empresas contratan una agencia para la web, otra para el CRM, otra para automatizar.
          Nosotros hacemos <strong className="text-white">todo el circuito</strong>: desde que un cliente te encuentra
          hasta que tu operación lo atiende sin fricción.{' '}
          <strong className="text-primary">Un solo equipo. Una sola visión. Crecimiento real.</strong>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-hover relative p-8 rounded-2xl glass hover:border-primary/30 transition-all flex flex-col gap-5 overflow-hidden"
            >
              <span className="absolute -top-2 -right-1 text-[80px] font-black text-white/[0.03] leading-none select-none">
                {p.num}
              </span>
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-60 transition-opacity`} />

              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(19,200,236,0.4)]">
                <span className="material-symbols-outlined text-3xl">{p.icon}</span>
              </div>
              <div>
                <h4 className="text-xl font-black text-white mb-1">{p.title}</h4>
                <p className="text-primary/80 text-sm font-semibold">{p.subtitle}</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Connector line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex items-center justify-center gap-3 -mt-6 mb-8"
        >
          {['Captar', '', 'Automatizar', '', 'Conectar', '', 'Escalar'].map((label, i) =>
            label ? (
              <span key={i} className="text-primary/40 text-xs font-bold uppercase tracking-wider">{label}</span>
            ) : (
              <span key={i} className="material-symbols-outlined text-primary/20 text-sm">arrow_forward</span>
            )
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm"
        >
          El resultado:{' '}
          <span className="text-white font-semibold">
            un negocio donde la tecnología trabaja para ti, no al revés.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
