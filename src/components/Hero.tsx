import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 sm:pt-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full text-center"
      >
        <motion.div variants={item} className="flex justify-center mb-6">
          <img
            src="/fa-logo.png"
            alt="FreeAgents"
            className="h-16 w-auto sm:h-20 md:h-24 animate-float"
            style={{ filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))' }}
          />
        </motion.div>
        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white glow-text mb-3"
        >
          FREE AGENTS
        </motion.h1>
        <motion.p variants={item} className="text-xl sm:text-2xl text-neon-cyan/90 font-medium mb-2">
          Ya es una realidad.
        </motion.p>
        <motion.p variants={item} className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Construimos tecnología que hace crecer negocios.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#contacto"
            className="btn-glow inline-flex items-center justify-center px-8 py-4 bg-neon-blue/30 text-white border border-neon-blue/60 rounded-xl font-semibold text-lg hover:bg-neon-blue/50 active:scale-[0.98] transition-transform"
          >
            Agendar llamada estratégica
          </a>
          <a
            href="#como-trabajamos"
            className="inline-flex items-center justify-center px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:border-neon-blue/40 active:scale-[0.98] transition-all"
          >
            Ver cómo trabajamos
          </a>
        </motion.div>

        {/* Full Business Growth - explicación con imagen */}
        <motion.div
          variants={item}
          className="glass-strong rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-left"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-gradient">Full Business Growth</span>
          </h2>
          <p className="text-white/85 mb-6 leading-relaxed">
            No solo hacemos sitios web: construimos <strong className="text-neon-cyan">sistemas que escalan</strong> tu negocio.
            Full Business Growth es nuestro enfoque: desarrollo a medida, automatización, integraciones y estrategia digital
            para que cada pieza de software impulse ventas, eficiencia y crecimiento real.
          </p>
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-neon">
            <img
              src="/fullbusinessgrowth.png"
              alt="FreeAgents Full Business Growth - desarrollo de software que impulsa el crecimiento"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
