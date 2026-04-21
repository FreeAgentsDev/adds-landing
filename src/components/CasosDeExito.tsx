import { motion } from 'framer-motion';

const testimonials = [
  {
    company: 'Valm Beauty',
    industry: 'Belleza y Cosmética',
    quote: 'Quedé muy satisfecha con el servicio para la creación de mi página web. Desde el inicio entendieron perfectamente lo que quería, respetaron cada detalle y lograron plasmarlo tal cual lo imaginaba. Además, cumplieron con los tiempos establecidos, lo cual para mí era clave. Sin duda, fue un proceso muy fluido y profesional.',
    what: 'Implementación de ecommerce',
    icon: 'storefront',
  },
  {
    company: 'Kevin Jewelry',
    industry: 'Joyería',
    quote: 'Teníamos todo disperso — inventario, ventas, clientes, pedidos. FreeAgents nos armó un ecosistema interno completo donde todo está conectado. Ahora operamos como una empresa de verdad.',
    what: 'Ecosistema interno completo',
    icon: 'diamond',
  },
  {
    company: 'Prosejurix',
    industry: 'Servicios Jurídicos',
    quote: 'Nos ayudaron a eliminar los cuellos de botella que nos frenaban. Construyeron un software de gestión y emisión de documentos que transformó nuestra operación diaria.',
    what: 'Software de gestión y emisión de documentos',
    icon: 'gavel',
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
              <div className="flex items-center gap-3 mb-4">
                <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.company}</h4>
                  <p className="text-slate-500 text-xs">{t.industry}</p>
                </div>
              </div>

              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary/80 font-medium">
                  <span className="material-symbols-outlined text-xs">build</span>
                  {t.what}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
