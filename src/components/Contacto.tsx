const WHATSAPP_NUMBER = '573001234567';
const CALENDLY_URL = 'https://calendly.com/freeagentsdev/30min';

export default function Contacto() {
  return (
    <section className="py-24 px-4 bg-transparent" id="contacto">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary/20 to-transparent p-12 rounded-3xl border-neon relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">¿Listo para escalar?</h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Construyamos el futuro juntos. Nuestra capacidad técnica al servicio de tu visión empresarial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría hablar con un asesor de FreeAgents.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Contactar por WhatsApp
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-primary text-background-dark px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(19,200,236,0.4)] transition-all"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              Reservar llamada estratégica
            </a>
          </div>
        </div>
        <span className="material-symbols-outlined absolute -right-20 -bottom-20 text-[300px] text-primary/5 rotate-12">
          rocket_launch
        </span>
      </div>
    </section>
  );
}
