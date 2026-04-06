import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué incluye la llamada estratégica?',
    answer:
      'En la llamada revisamos tu negocio, tus objetivos y los dolores que quieres resolver. Te proponemos un camino concreto (qué construir, en qué orden) y, si encaja, los siguientes pasos. Sin compromiso.',
  },
  {
    question: '¿Qué pasa después de agendar?',
    answer:
      'Recibirás una confirmación por email con el enlace de la reunión. A la hora acordada nos conectamos por videollamada. Si prefieres WhatsApp, escríbenos y te respondemos en menos de 24 horas.',
  },
  {
    question: '¿Cuánto tarda un proyecto típico?',
    answer:
      'Depende del alcance: desde unas semanas para una web estratégica o integraciones puntuales, hasta varios meses para sistemas a medida. En la llamada te damos un estimado según tu caso.',
  },
  {
    question: '¿Trabajan con mi tipo de negocio o industria?',
    answer:
      'Trabajamos con empresas que quieren crecer con tecnología: desde startups hasta pymes y equipos con operaciones complejas. Si tienes procesos que optimizar, web que no convierte o herramientas desconectadas, podemos ayudarte.',
  },
  {
    question: '¿Qué pasa si ya tengo herramientas o sistemas funcionando?',
    answer:
      'No te pedimos que tires todo y empieces de cero. Evaluamos lo que ya tienes, nos integramos con lo que funciona y construimos lo que falta. La idea es sumar, no reemplazar por capricho.',
  },
  {
    question: '¿Ofrecen mantenimiento o soporte después del lanzamiento?',
    answer:
      'Sí. Una vez lanzado el proyecto, podemos definir soporte, mejoras y evolución del sistema para que siga creciendo con tu negocio.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-4"
        >
          Preguntas frecuentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/75 text-lg mb-12"
        >
          Resolvemos las dudas más comunes antes de que agendes.
        </motion.p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              className="glass rounded-xl border border-white/10 overflow-hidden hover:border-neon-blue/30 transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white pr-2">{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-neon-cyan transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                      <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
