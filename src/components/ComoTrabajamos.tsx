const steps = [
  { num: 1, title: 'Descubrimiento', desc: 'Entendemos tus retos y objetivos.' },
  { num: 2, title: 'Estrategia', desc: 'Trazamos la hoja de ruta técnica.' },
  { num: 3, title: 'Diseño', desc: 'UX/UI centrada en la conversión.' },
  { num: 4, title: 'Desarrollo', desc: 'Construcción ágil y robusta.' },
  { num: 5, title: 'Lanzamiento', desc: 'Despliegue y optimización.' },
];

export default function ComoTrabajamos() {
  return (
    <section className="py-24 px-4" id="proceso">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl font-black mb-16">Metodología de Escala</h2>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4">
                <div
                  className="size-16 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center text-white font-black text-2xl shadow-[0_0_15px_rgba(19,200,236,0.2)]"
                >
                  {step.num}
                </div>
                <h6 className="text-white font-bold">{step.title}</h6>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
