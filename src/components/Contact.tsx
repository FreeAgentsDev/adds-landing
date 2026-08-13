import { useEffect, useState, type FormEvent } from 'react';
import type { Dictionary } from '../content';
import { CONTACT } from '../content/shared';

type Props = {
  dict: Dictionary;
};

export default function Contact({ dict }: Props) {
  const c = dict.contact;
  const [projectType, setProjectType] = useState(c.form.projectTypes[0]);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    const btn = document.getElementById('floating-agendar');
    let script: HTMLScriptElement | null = null;

    const loadCalendly = () => {
      if (script || document.querySelector('script[src*="calendly.com"]')) return;
      script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    };

    const observer =
      contactSection &&
      new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            loadCalendly();
            observer?.disconnect();
          }
        },
        { rootMargin: '200px 0px' }
      );

    if (contactSection && observer) observer.observe(contactSection);

    const onScroll = () => {
      if (!btn) return;
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
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  function buildMessage(data: FormData) {
    return [
      `${c.form.name}: ${data.get('name') || ''}`,
      `${c.form.company}: ${data.get('company') || ''}`,
      `${c.form.email}: ${data.get('email') || ''}`,
      `${c.form.country}: ${data.get('country') || ''}`,
      `${c.form.projectType}: ${data.get('projectType') || ''}`,
      '',
      String(data.get('message') || ''),
    ].join('\n');
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const body = buildMessage(data);
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value || 'email';

    if (channel === 'whatsapp') {
      window.open(
        `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(body)}`,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }

    const subject = encodeURIComponent(`FreeAgents — ${data.get('projectType') || 'Contact'}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <section className="py-24 px-4" id="contact" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-indigo-900/45 via-slate-950/70 to-background-dark p-6 sm:p-12 shadow-[0_0_70px_rgba(19,200,236,0.14)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,200,236,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.16),transparent_50%)]" aria-hidden="true" />
          <div className="relative z-10">
            <div className="text-center mb-10">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{c.eyebrow}</p>
              <h2 id="contact-heading" className="text-white text-3xl md:text-5xl font-black mb-4">
                {c.headline}
              </h2>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">{c.subhead}</p>
            </div>

            <form onSubmit={onSubmit} className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <label className="block text-left">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.name}</span>
                <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none" />
              </label>
              <label className="block text-left">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.company}</span>
                <input name="company" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none" />
              </label>
              <label className="block text-left">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.email}</span>
                <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none" />
              </label>
              <label className="block text-left">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.country}</span>
                <input name="country" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none" />
              </label>
              <label className="block text-left sm:col-span-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.projectType}</span>
                <select
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none"
                >
                  {c.form.projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-background-dark">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-left sm:col-span-2">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{c.form.message}</span>
                <textarea name="message" required rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white focus:border-primary focus:outline-none resize-y" />
              </label>
              <div className="sm:col-span-2 flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    name="channel"
                    value="email"
                    className="bg-primary text-background-dark px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {c.form.submit}
                  </button>
                  <button
                    type="submit"
                    name="channel"
                    value="whatsapp"
                    className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                  >
                    {c.form.submitWhatsApp}
                  </button>
                </div>
                <p className="text-slate-500 text-xs">{c.form.mailtoNote} {c.form.whatsappNote}</p>
              </div>
            </form>

            <h3 className="text-white text-xl font-bold text-center mb-4">{c.calendlyTitle}</h3>
            <div className="w-full max-w-3xl mx-auto mb-10">
              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/60 via-neon-purple/40 to-neon-pink/35">
                <div className="rounded-[calc(1rem-1.5px)] overflow-hidden bg-background-dark/85 border border-white/10">
                  <div
                    className="calendly-inline-widget w-full"
                    data-url={CONTACT.calendlyEmbed}
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-6 text-center">{c.orDirect}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(c.whatsappDefault)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
              >
                {c.whatsappCta}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-center gap-2 border border-white/15 text-slate-200 px-6 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/15 text-slate-200 px-6 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {c.quickMessages.map((message) => (
                  <a
                    key={message}
                    href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:border-primary/40 hover:text-white transition-colors"
                  >
                    {message}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        id="floating-agendar"
        href="#contact"
        className="fixed bottom-6 right-6 z-40 opacity-0 translate-y-4 pointer-events-none transition-all duration-300 bg-primary text-background-dark px-5 py-3 rounded-full font-bold shadow-[0_0_24px_rgba(19,200,236,0.45)] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {c.floatingCta}
      </a>
    </>
  );
}
