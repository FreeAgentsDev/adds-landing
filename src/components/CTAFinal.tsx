import { motion } from 'framer-motion';

export default function CTAFinal() {
  return (
    <section className="relative py-20 sm:py-28 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 glow-text">
          El futuro no se improvisa. Se construye.
        </p>
        <a
          href="#contacto"
          className="btn-glow inline-flex items-center justify-center px-10 py-5 bg-neon-blue/30 text-white border-2 border-neon-blue/60 rounded-2xl font-bold text-xl hover:bg-neon-blue/50 transition-all"
        >
          Construyamos el tuyo
        </a>
      </motion.div>
    </section>
  );
}
