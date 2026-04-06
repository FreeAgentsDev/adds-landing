import { motion } from 'framer-motion';

const testimonials = [
  {
    content:
      'FreeAgents transformó cómo opera nuestra empresa. Las automatizaciones nos ahorraron horas cada semana y el sistema a medida se pagó solo en el primer trimestre.',
    author: 'Carolina Méndez',
    role: 'Directora de Operaciones, LogiTrack',
    icon: 'factory',
  },
  {
    content:
      'Necesitábamos una web que realmente convirtiera y un CRM conectado a todo. En menos de dos meses teníamos ambos funcionando y nuestras ventas crecieron un 35%.',
    author: 'Andrés Restrepo',
    role: 'Fundador, Venti Digital',
    icon: 'trending_up',
  },
  {
    content:
      'Escalamos de 3 a 15 personas en un año y FreeAgents hizo que ese crecimiento fuera manejable. Las integraciones mantienen a todos los equipos alineados sin esfuerzo.',
    author: 'Alex Rodríguez',
    role: 'CEO, Agencia de Marketing',
    icon: 'groups',
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Testimonios
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-black">
            Empresas que ya{' '}
            <span className="neon-glow">escalan con nosotros</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15 }}
              className="glass p-8 flex flex-col gap-5 hover:border-primary/30 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-3xl">
                {t.icon}
              </span>
              <p className="text-white/85 leading-relaxed text-base flex-1">
                "{t.content}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold">{t.author}</p>
                <p className="text-slate-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
