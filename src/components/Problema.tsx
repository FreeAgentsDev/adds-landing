import { motion } from 'framer-motion';

const problems = [
  'Páginas web que no venden ni generan leads.',
  'Procesos manuales que consumen tiempo y generan errores.',
  'Herramientas desconectadas: CRM, email, facturación por separado.',
  'Proyectos que se alargan y no se priorizan por impacto.',
  'Falta de datos para tomar decisiones de negocio.',
];

export default function Problema() {
  return (
    <section id="problema" className="relative py-20 sm:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="glass-strong rounded-2xl p-8 sm:p-12 border-neon-purple/20"
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white leading-tight mb-10">
            La mayoría compra páginas web.{' '}
            <span className="text-gradient">Las empresas inteligentes construyen sistemas.</span>
          </p>
          <ul className="space-y-3">
            {problems.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 text-white/85"
              >
                <span className="text-neon-blue mt-0.5">×</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
