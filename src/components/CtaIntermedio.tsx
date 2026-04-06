import { motion } from 'framer-motion';

export default function CtaIntermedio() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm p-10 md:p-14"
      >
        <h3 className="text-white text-2xl sm:text-3xl font-black mb-3">
          ¿Listo para que tu negocio crezca con tecnología?
        </h3>
        <p className="text-slate-400 text-sm mb-8">
          Agenda una llamada de 30 minutos. Sin compromiso — hablamos de tu negocio y te decimos si podemos ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="group bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(19,200,236,0.3)] hover:shadow-[0_0_40px_rgba(19,200,236,0.5)] hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-y-0.5">calendar_today</span>
            Agendar reunión
          </a>
        </div>
      </motion.div>
    </section>
  );
}
