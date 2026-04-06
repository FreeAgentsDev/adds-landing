import { useEffect } from 'react';

const WHATSAPP_NUMBER = '573004940576';
const WHATSAPP_DISPLAY = '300 494 0576';
const CALENDLY_URL = 'https://calendly.com/freeagentsdev/30min';
const INSTAGRAM_URL = 'https://www.instagram.com/freeagentsdev/';
const LINKEDIN_URL = 'https://www.linkedin.com/company/freeagentsdev/';
const EMAIL = 'freeagentsdev@gmail.com';
const DEFAULT_WHATSAPP_MESSAGE = 'Hola FreeAgents, quiero hablar con un asesor para escalar mi negocio.';

const quickMessages = [
  'Hola FreeAgents, quiero una landing de alto rendimiento para mi negocio.',
  'Quiero automatizar procesos y reducir trabajo manual en mi empresa.',
  'Necesito una reunión para evaluar una app o sistema a medida.',
  'Quiero conectar mis herramientas y mejorar mi embudo de ventas.',
];

export default function Contacto() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Show/hide floating agendar button
    const btn = document.getElementById('floating-agendar');
    const contactSection = document.getElementById('contacto');
    if (btn) {
      const onScroll = () => {
        const scrollY = window.scrollY;
        const showAfter = window.innerHeight * 0.8;
        const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity;
        const isNearContact = contactTop < window.innerHeight * 1.2;

        if (scrollY > showAfter && !isNearContact) {
          btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
          btn.classList.add('opacity-100', 'translate-y-0');
        } else {
          btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
          btn.classList.remove('opacity-100', 'translate-y-0');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        document.body.removeChild(script);
        window.removeEventListener('scroll', onScroll);
      };
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className="py-24 px-4 bg-transparent" id="contacto">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-indigo-900/45 via-slate-950/70 to-background-dark p-12 shadow-[0_0_70px_rgba(19,200,236,0.14)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,200,236,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.16),transparent_50%)]" />
          <div className="relative z-10 text-center">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-5">¿Listo para escalar?</h2>
            <p className="text-slate-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Construyamos el futuro juntos. Nuestra capacidad técnica al servicio de tu visión empresarial.
            </p>

            <div className="w-full max-w-3xl mx-auto mb-10">
              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/60 via-neon-purple/40 to-neon-pink/35 shadow-[0_0_45px_rgba(19,200,236,0.2)]">
                <div className="rounded-[calc(1rem-1.5px)] overflow-hidden bg-background-dark/85 backdrop-blur-md border border-white/10">
                  <div
                    className="calendly-inline-widget w-full"
                    data-url="https://calendly.com/freeagentsdev/30min?hide_gdpr_banner=1&background_color=0f0a1f&text_color=ffffff&primary_color=13c8ec"
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-6">O contáctanos directamente</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_24px_rgba(37,211,102,0.45)]"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.476-.883-.787-1.48-1.76-1.653-2.057-.174-.298-.019-.459.13-.607.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.509l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2.003c-5.514 0-9.99 4.475-9.99 9.99 0 1.764.46 3.49 1.335 5.013L2 22l5.146-1.315a9.95 9.95 0 0 0 4.857 1.258h.004c5.514 0 9.99-4.475 9.99-9.99 0-2.673-1.041-5.185-2.93-7.074a9.9 9.9 0 0 0-7.063-2.876m0 18.138h-.003a8.28 8.28 0 0 1-4.217-1.152l-.303-.18-3.054.78.815-2.976-.197-.306a8.3 8.3 0 0 1-1.273-4.414c0-4.59 3.736-8.327 8.33-8.327 2.223 0 4.312.865 5.883 2.437a8.27 8.27 0 0 1 2.438 5.89c-.002 4.592-3.738 8.328-8.42 8.328" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>

            <div className="mt-5">
              <p className="text-emerald-300/90 text-xs uppercase tracking-[0.14em] mb-3">Mensajes rápidos</p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {quickMessages.map((message) => (
                  <a
                    key={message}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-300/55 transition-all"
                  >
                    {message}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-primary/50 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-primary/50 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-base">call</span>
                +57 {WHATSAPP_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-primary/50 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-base">photo_camera</span>
                Instagram
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:border-primary/50 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-base">work</span>
                LinkedIn
              </a>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-20 -bottom-20 text-[300px] text-primary/5 rotate-12">
            rocket_launch
          </span>
        </div>
      </section>

      {/* Floating Agendar button — left side */}
      <a
        href="#contacto"
        id="floating-agendar"
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-background-dark px-5 py-3 font-bold shadow-[0_0_25px_rgba(19,200,236,0.4)] hover:shadow-[0_0_35px_rgba(19,200,236,0.6)] hover:brightness-110 transition-all opacity-0 translate-y-4 pointer-events-none"
      >
        <span className="material-symbols-outlined text-xl">calendar_today</span>
        <span className="hidden sm:inline">Agendar</span>
      </a>

      {/* Floating WhatsApp — right side */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <details className="group">
          <summary className="list-none cursor-pointer inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 font-bold shadow-[0_0_25px_rgba(37,211,102,0.55)] hover:brightness-110 transition-all">
            <svg viewBox="0 0 24 24" className="size-6 fill-current shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.476-.883-.787-1.48-1.76-1.653-2.057-.174-.298-.019-.459.13-.607.134-.133.298-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.509l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2.003c-5.514 0-9.99 4.475-9.99 9.99 0 1.764.46 3.49 1.335 5.013L2 22l5.146-1.315a9.95 9.95 0 0 0 4.857 1.258h.004c5.514 0 9.99-4.475 9.99-9.99 0-2.673-1.041-5.185-2.93-7.074a9.9 9.9 0 0 0-7.063-2.876m0 18.138h-.003a8.28 8.28 0 0 1-4.217-1.152l-.303-.18-3.054.78.815-2.976-.197-.306a8.3 8.3 0 0 1-1.273-4.414c0-4.59 3.736-8.327 8.33-8.327 2.223 0 4.312.865 5.883 2.437a8.27 8.27 0 0 1 2.438 5.89c-.002 4.592-3.738 8.328-8.42 8.328" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </summary>
          <div className="mb-2 w-[290px] max-w-[84vw] rounded-2xl border border-emerald-300/30 bg-slate-950/95 p-3 shadow-[0_0_35px_rgba(37,211,102,0.35)] backdrop-blur-xl">
            <p className="text-left text-xs uppercase tracking-wider text-emerald-300/90 mb-2">Escríbenos en 1 clic</p>
            <div className="flex flex-col gap-2">
              {quickMessages.map((message) => (
                <a
                  key={`floating-${message}`}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-left text-sm text-slate-100 hover:border-emerald-300/40 hover:bg-slate-800 transition-all"
                >
                  {message}
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
