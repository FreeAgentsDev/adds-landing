const metrics = [
  { value: '+100', label: 'Proyectos Lanzados' },
  { value: '98%', label: 'Clientes Satisfechos' },
  { value: '10M+', label: 'Ingresos Generados' },
];

export default function SocialProof() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 text-background-dark">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-5xl font-black mb-2">{m.value}</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-80">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
