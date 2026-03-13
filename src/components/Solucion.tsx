const solutions = [
  { icon: 'language', title: 'Web Estratégica', desc: 'Landing pages y plataformas optimizadas para convertir visitantes en clientes de forma recurrente.' },
  { icon: 'bolt', title: 'Automatización Ventas', desc: 'Sistemas que trabajan 24/7 captando y nutriendo prospectos sin intervención manual.' },
  { icon: 'settings_suggest', title: 'Sistemas a Medida', desc: 'Software diseñado específicamente para resolver los cuellos de botella únicos de tu operación.' },
  { icon: 'hub', title: 'Integraciones Inteligentes', desc: 'Conectamos tus CRMs, ERPs y herramientas favoritas para un flujo de datos unificado.' },
];

export default function Solucion() {
  return (
    <section className="py-24 px-4 bg-transparent" id="soluciones">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Nuestras Soluciones</h2>
          <h3 className="text-white text-4xl font-black">Ecosistemas de alto rendimiento</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all flex flex-col gap-6"
            >
              <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white">{s.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
