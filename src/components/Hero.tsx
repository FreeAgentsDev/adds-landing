export default function Hero() {
  return (
    <section id="calendly" className="relative overflow-hidden pt-10 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex flex-col gap-6 flex-1 lg:max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Software Factory 4.0</span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight neon-glow">
                ¿Tu negocio pierde ventas por tecnología que no convierte?
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl">
                Webs que no venden, procesos manuales que consumen horas, herramientas desconectadas. La mayoría de empresas deja dinero sobre la mesa sin saberlo.
              </p>
              <p className="text-slate-400 text-base sm:text-lg">
                En FreeAgents convertimos tu tecnología en un sistema que{' '}
                <span className="text-primary font-semibold">vende, escala y automatiza</span>{' '}
                — sin que tengas que ser experto en nada.
              </p>
            </div>
            <a
              href="#soluciones"
              className="border border-slate-600 text-slate-300 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all inline-flex items-center gap-2 w-fit"
            >
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
              Ver soluciones
            </a>
          </div>
          <div className="flex-1 w-full min-w-0">
            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden border border-slate-700/50"
              data-url="https://calendly.com/freeagentsdev/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
