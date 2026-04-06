import { motion } from 'framer-motion';

const differentiators = [
  { icon: 'code', text: 'Código propio, cero plantillas — todo es tuyo' },
  { icon: 'group_work', text: 'Un equipo, todo el circuito — sin coordinar 3 proveedores' },
  { icon: 'psychology', text: 'Cada decisión técnica atada a un objetivo de negocio' },
];

const team = [
  {
    name: 'Miguel Ángel Gallego Álvarez',
    role: 'CEO',
    desc: 'Estrategia de negocio y visión de producto. Conecta la tecnología con los objetivos reales de cada cliente.',
    icon: 'strategy',
  },
  {
    name: 'Juan David Gallego Ramírez',
    role: 'CTO',
    desc: 'Arquitectura técnica y liderazgo de desarrollo. Diseña los sistemas que hacen posible el Full Business Growth.',
    icon: 'terminal',
  },
  {
    name: 'Santiago Soler',
    role: 'Desarrollador',
    desc: 'Construcción de plataformas y automatizaciones. Convierte los diseños en software que funciona.',
    icon: 'code',
  },
  {
    name: 'Brayan',
    role: 'Desarrollador',
    desc: 'Backend e integraciones. Conecta las piezas para que todo el ecosistema del cliente fluya sin fricción.',
    icon: 'database',
  },
  {
    name: 'Santiago Valencia Londoño',
    role: 'Desarrollador',
    desc: 'Frontend y experiencias de usuario. Se asegura de que cada interfaz sea rápida, clara y útil.',
    icon: 'devices',
  },
  {
    name: 'María José Herrada',
    role: 'Diseñadora',
    desc: 'UX/UI y marca. Le da identidad visual a cada proyecto y se asegura de que la experiencia conecte.',
    icon: 'palette',
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Equipo
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Las personas detrás de <span className="text-gradient">FreeAgents</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un equipo compacto donde cada persona hace la diferencia. Cuando trabajas con nosotros, nos conoces a todos.
          </p>
        </motion.div>

        {/* Differentiators inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {differentiators.map((d) => (
            <div
              key={d.text}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-primary/5 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-primary text-lg">{d.icon}</span>
              <span className="text-slate-300 text-sm">{d.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-hover glass p-8 rounded-2xl hover:border-primary/25 transition-all flex flex-col items-center text-center"
            >
              {/* Avatar placeholder */}
              <div className="size-24 rounded-full bg-gradient-to-br from-primary/20 via-neon-purple/15 to-neon-pink/10 border-2 border-primary/20 group-hover:border-primary/50 transition-all flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(19,200,236,0.1)] group-hover:shadow-[0_0_30px_rgba(19,200,236,0.2)]">
                <span className="material-symbols-outlined text-primary/60 text-4xl">{member.icon}</span>
              </div>

              <h4 className="text-white font-bold text-lg">{member.name}</h4>
              <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
