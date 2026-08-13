export type SeoBlock = { title: string; description: string };

export type Dictionary = {
  seo: {
    home: SeoBlock;
    solutions: SeoBlock;
    caseStudies: SeoBlock;
    partners: SeoBlock;
  };
  nav: {
    home: string;
    solutions: string;
    caseStudies: string;
    process: string;
    partners: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  trust: {
    eyebrow: string;
    headline: string;
    subhead: string;
    cta: string;
  };
  problems: {
    eyebrow: string;
    headline: string;
    subhead: string;
    items: { icon: string; title: string; body: string }[];
  };
  solutions: {
    eyebrow: string;
    headline: string;
    subhead: string;
    items: { icon: string; title: string; body: string }[];
  };
  process: {
    eyebrow: string;
    headline: string;
    subhead: string;
    steps: { num: string; title: string; body: string }[];
  };
  cases: {
    eyebrow: string;
    headline: string;
    subhead: string;
    labels: {
      industry: string;
      challenge: string;
      solution: string;
      technology: string;
      development: string;
      outcomes: string;
    };
    items: {
      id: string;
      client: string;
      industry: string;
      icon: string;
      challenge: string;
      solution: string;
      technology: string[];
      development: string;
      outcomes: string[];
    }[];
  };
  why: {
    eyebrow: string;
    headline: string;
    subhead: string;
    items: { icon: string; title: string; body: string }[];
  };
  team: {
    eyebrow: string;
    headline: string;
    subhead: string;
    roles: Record<string, { role: string; desc: string }>;
  };
  tech: {
    eyebrow: string;
    headline: string;
    subhead: string;
    categories: { title: string; items: string[] }[];
  };
  partnersSection: {
    eyebrow: string;
    headline: string;
    subhead: string;
    youBringTitle: string;
    youBring: string[];
    weBringTitle: string;
    weBring: string[];
    flowTitle: string;
    flow: { actor: string; step: string }[];
    commission: string;
    primaryCta: string;
    secondaryCta: string;
  };
  partnersPage: {
    badge: string;
    headline: string;
    subhead: string;
    whatWeDoTitle: string;
    whatWeDo: string;
    whatPartnerDoesTitle: string;
    whatPartnerDoes: string;
    whatWeHandleTitle: string;
    whatWeHandle: string[];
    howItWorksTitle: string;
    howItWorks: { title: string; body: string }[];
    commissionNote: string;
    startTitle: string;
    startSubhead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  finalCta: {
    clientTitle: string;
    clientCta: string;
    partnerTitle: string;
    partnerCta: string;
  };
  faq: {
    eyebrow: string;
    headline: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    subhead: string;
    form: {
      name: string;
      company: string;
      email: string;
      country: string;
      projectType: string;
      message: string;
      projectTypes: string[];
      submit: string;
      submitWhatsApp: string;
      mailtoNote: string;
      whatsappNote: string;
    };
    calendlyTitle: string;
    orDirect: string;
    whatsappCta: string;
    whatsappDefault: string;
    quickMessages: string[];
    floatingCta: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    rights: string;
  };
  language: {
    label: string;
    en: string;
    es: string;
  };
};
