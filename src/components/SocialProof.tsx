import { motion } from 'framer-motion';

const pillars = [
  {
    icon: 'handshake',
    title: 'Nos integramos a tu equipo',
    desc: 'No somos externos que entregan y se van. Nos metemos en tu negocio y lo entendemos como propio.',
  },
  {
    icon: 'group_work',
    title: 'Un solo equipo, todo el circuito',
    desc: 'Web, automatización, integraciones y soporte. Sin coordinar 3 proveedores distintos.',
  },
  {
    icon: 'rocket_launch',
    title: 'Construido para escalar contigo',
    desc: 'Lo que hacemos hoy funciona cuando tengas 10x más clientes mañana.',
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-hover text-center p-8 rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{p.icon}</span>
              <p className="text-lg font-bold text-white mb-2">{p.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
