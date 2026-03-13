const pillars = [
  { title: 'Desarrollo a Medida', desc: 'Código limpio, escalable y seguro.' },
  { title: 'Optimización de Procesos', desc: 'Reducimos costes mediante la eficiencia digital.' },
  { title: 'Estrategia Digital', desc: 'Visión de negocio aplicada a cada línea de código.' },
];

export default function QueEs() {
  return (
    <section className="py-24 px-4 bg-slate-900/30" id="que-es">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-white text-4xl font-black mb-6">El ADN de FreeAgents</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              No somos una agencia más. Somos tu partner tecnológico obsesionado con los resultados de negocio.
            </p>
            <div className="space-y-8">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0">check_circle</span>
                  <div>
                    <h5 className="text-white font-bold text-xl">{p.title}</h5>
                    <p className="text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-primary/5 border border-primary/10 rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <span className="material-symbols-outlined text-[120px] text-primary/30 relative z-10">analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
