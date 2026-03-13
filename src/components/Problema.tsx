const problems = [
  { icon: 'broken_image', label: 'Páginas que no venden' },
  { icon: 'timer_off', label: 'Procesos manuales lentos' },
  { icon: 'link_off', label: 'Herramientas desconectadas' },
];

export default function Problema() {
  return (
    <section className="bg-slate-900/50 py-24 px-4 border-y border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-3xl font-bold mb-12">¿Tu tecnología te frena o te impulsa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div
              key={p.icon}
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-background-dark/50 border border-slate-800"
            >
              <span className="material-symbols-outlined text-red-400 text-4xl">{p.icon}</span>
              <p className="text-white text-lg font-semibold">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
