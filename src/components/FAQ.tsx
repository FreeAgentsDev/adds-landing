import { useState } from 'react';
import type { Dictionary } from '../content';

type Props = {
  dict: Dictionary;
};

export default function FAQ({ dict }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{dict.faq.eyebrow}</p>
          <h2 id="faq-heading" className="text-white text-3xl font-black">
            {dict.faq.headline}
          </h2>
        </div>
        <div className="space-y-3">
          {dict.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-slate-400 text-sm leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
