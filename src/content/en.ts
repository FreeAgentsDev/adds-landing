import type { Dictionary } from './types';

export const en: Dictionary = {
  seo: {
    home: {
      title: 'FreeAgents | Custom Software Development Partner',
      description:
        'Custom software, e-commerce, automation and AI solutions designed to help growing businesses operate better and scale faster. Available for international projects.',
    },
    solutions: {
      title: 'Solutions | FreeAgents Software Development',
      description:
        'Custom software, e-commerce, automation, AI, internal platforms, SaaS, mobile apps and integrations built around your business.',
    },
    caseStudies: {
      title: 'Case Studies | FreeAgents',
      description:
        'Real software projects for Kevin Jewelry, Prosejurix and ValmBeauty — challenge, solution, technology and outcomes.',
    },
    partners: {
      title: 'Partner Program | FreeAgents Business Development',
      description:
        'You find the opportunity. We build the technology. Partner with FreeAgents and earn commission by introducing businesses that need custom software.',
    },
  },

  nav: {
    home: 'Home',
    solutions: 'Solutions',
    caseStudies: 'Case Studies',
    process: 'Process',
    partners: 'Partners',
    contact: 'Contact',
    cta: 'Talk to FreeAgents',
    login: 'Sign in',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    badge: 'Technology partner for growing businesses',
    headline: 'Technology built around your business.',
    subhead:
      'Custom software, e-commerce, automation and AI solutions designed to help growing businesses operate better and scale faster.',
    primaryCta: 'Talk to FreeAgents',
    secondaryCta: 'See what we build',
    note: 'Remote-ready · Discovery call · No commitment required',
    localCta: 'Run a local business? Build your solution in minutes',
  },

  trust: {
    eyebrow: 'Clients',
    headline: 'Built for real businesses.',
    subhead: 'Verified projects. Real operations. Measurable progress.',
    cta: 'View case study',
  },

  problems: {
    eyebrow: 'The challenge',
    headline: 'When your business outgrows its tools, technology becomes the bottleneck.',
    subhead: 'Growth exposes the gaps between people, processes and systems.',
    items: [
      {
        icon: 'handyman',
        title: 'Manual operations',
        body: 'Teams waste hours on spreadsheets, copy-paste and follow-ups that should already be automated — slowing delivery and increasing errors.',
      },
      {
        icon: 'hub',
        title: 'Disconnected systems',
        body: 'Sales, inventory, finance and support live in separate tools. Nobody sees the full picture, and decisions get made on incomplete data.',
      },
      {
        icon: 'storefront',
        title: 'E-commerce limitations',
        body: 'Your storefront cannot keep up with inventory, wholesale, payments or multi-channel operations — so revenue leaks through the cracks.',
      },
      {
        icon: 'trending_flat',
        title: 'Growth bottlenecks',
        body: 'Every new customer or location adds more friction. Without the right software architecture, scaling means more chaos, not more capacity.',
      },
    ],
  },

  solutions: {
    eyebrow: 'What we build',
    headline: 'From the first idea to the systems that run the business.',
    subhead: 'We design and ship technology that fits how you actually operate.',
    items: [
      {
        icon: 'terminal',
        title: 'Custom software',
        body: 'Business platforms built around your exact workflows — not forced templates.',
      },
      {
        icon: 'shopping_cart',
        title: 'E-commerce',
        body: 'High-performance commerce experiences and custom e-commerce ecosystems.',
      },
      {
        icon: 'sync_alt',
        title: 'Automation',
        body: 'Connect repetitive workflows and eliminate manual work across your stack.',
      },
      {
        icon: 'psychology',
        title: 'AI',
        body: 'AI-powered features, assistants, workflows and business automation.',
      },
      {
        icon: 'dashboard',
        title: 'Internal platforms',
        body: 'Dashboards, management systems, CRMs and operational software.',
      },
      {
        icon: 'rocket_launch',
        title: 'SaaS & MVP',
        body: 'Turn product ideas into scalable digital products ready for users.',
      },
      {
        icon: 'smartphone',
        title: 'Mobile',
        body: 'Mobile applications for customers, teams and field operations.',
      },
      {
        icon: 'api',
        title: 'Integrations',
        body: 'APIs, payment systems, third-party platforms and custom integrations.',
      },
    ],
  },

  process: {
    eyebrow: 'How we work',
    headline: 'We start with the business problem, not the technology.',
    subhead: 'FreeAgents stays with you from discovery through launch and beyond — we do not disappear after a handoff.',
    steps: [
      { num: '01', title: 'Discover', body: 'We map your operation, constraints and goals before proposing any stack.' },
      { num: '02', title: 'Strategy', body: 'We define the right scope, architecture and success criteria for the business.' },
      { num: '03', title: 'Design', body: 'UX, flows and interfaces shaped around real users and real work.' },
      { num: '04', title: 'Build', body: 'Full-stack engineering with clear milestones and working software early.' },
      { num: '05', title: 'Launch', body: 'We ship, stabilize and support go-live with your team ready to operate.' },
      { num: '06', title: 'Scale', body: 'We keep evolving the product as the business grows and priorities change.' },
    ],
  },

  cases: {
    eyebrow: 'Case studies',
    headline: 'Software that changed how these businesses operate.',
    subhead: 'Challenge, solution, technology and outcomes — without invented metrics.',
    labels: {
      industry: 'Industry',
      challenge: 'Challenge',
      solution: 'Solution',
      technology: 'Technology',
      development: 'Development',
      outcomes: 'Outcomes',
    },
    items: [
      {
        id: 'kevin-jewelry',
        client: 'Kevin Jewelry',
        industry: 'Jewelry / E-commerce',
        icon: 'diamond',
        challenge:
          'Growing e-commerce operations with fragmented inventory, orders, wholesale operations and multiple stores.',
        solution: 'Shopify optimization plus a custom operational ecosystem connecting the business end to end.',
        technology: ['Next.js', 'NestJS', 'Shopify'],
        development: 'Approximately 2 months',
        outcomes: [
          'Increased sales',
          'Reduced order problems',
          'Reduced inventory problems',
          'Better operational control',
        ],
      },
      {
        id: 'prosejurix',
        client: 'Prosejurix',
        industry: 'Legal services',
        icon: 'gavel',
        challenge: 'Internal case management and customer access to process information were slow and fragmented.',
        solution: 'Custom internal management platform plus a customer-facing portal for process visibility.',
        technology: ['Next.js', 'Supabase'],
        development: 'Approximately 2 weeks',
        outcomes: [
          'Improved employee workflows',
          'Increased customer satisfaction',
          'Easier access to process information',
        ],
      },
      {
        id: 'valmbeauty',
        client: 'ValmBeauty',
        industry: 'Beauty / E-commerce',
        icon: 'storefront',
        challenge:
          'Needed an e-commerce alternative to Shopify with more control over payments and inventory.',
        solution:
          'Custom e-commerce platform with payment integrations and an internal inventory system.',
        technology: ['Next.js', 'Go', 'Mercado Pago', 'Addi'],
        development: 'Approximately 2 weeks',
        outcomes: ['Increased sales', 'Improved customer acquisition', 'Greater operational control'],
      },
    ],
  },

  why: {
    eyebrow: 'Why FreeAgents',
    headline: 'One technology team. Your business context.',
    subhead: 'A flexible technology partner — not a generic outsourcing bench.',
    items: [
      { icon: 'business_center', title: 'Business-first', body: 'We start by understanding the operation.' },
      { icon: 'tune', title: 'Custom', body: 'No forced templates or generic systems.' },
      { icon: 'layers', title: 'Full-stack', body: 'Frontend, backend, infrastructure and integrations.' },
      { icon: 'bolt', title: 'Fast', body: 'We can move from idea to working software quickly.' },
      { icon: 'account_tree', title: 'Flexible', body: 'We adapt the architecture to the business.' },
      { icon: 'handshake', title: 'Long-term', body: 'We can keep supporting and evolving the product after launch.' },
    ],
  },

  team: {
    eyebrow: 'Team',
    headline: 'The people behind FreeAgents',
    subhead: 'A compact team of engineers, designers and commercial talent you actually work with.',
    roles: {
      ceo: { role: 'CEO', desc: 'Business strategy and product vision. Connects technology to real client goals.' },
      cto: { role: 'CTO', desc: 'Technical architecture and engineering leadership.' },
      developer: { role: 'Developer', desc: 'Builds platforms, automations and integrations that ship.' },
      developerSales: {
        role: 'Developer & Sales Strategist',
        desc: 'Engineering plus commercial strategy — translating technology into clear value.',
      },
      designer: { role: 'Designer', desc: 'UX/UI and brand. Makes every product clear, usable and distinctive.' },
    },
  },

  tech: {
    eyebrow: 'Capabilities',
    headline: 'We choose technology based on the problem.',
    subhead: 'The stack serves the business — not the other way around.',
    categories: [
      { title: 'Frontend', items: ['Next.js', 'React'] },
      { title: 'Backend', items: ['Node.js', 'NestJS', 'Go'] },
      { title: 'Databases', items: ['Supabase', 'SQL / Postgres'] },
      { title: 'Cloud & infrastructure', items: ['Cloud infrastructure', 'CI-ready delivery'] },
      { title: 'E-commerce', items: ['Shopify', 'Custom commerce'] },
      { title: 'Payments', items: ['Payment integrations', 'Mercado Pago', 'Addi'] },
      { title: 'APIs', items: ['REST APIs', 'Third-party integrations'] },
      { title: 'Automation & AI', items: ['Workflow automation', 'AI APIs'] },
    ],
  },

  partnersSection: {
    eyebrow: 'Partner program',
    headline: 'You find the opportunity. We build the technology.',
    subhead:
      'Do you already work with businesses that need better software, automation, e-commerce infrastructure or digital products? Partner with FreeAgents and turn those opportunities into revenue without building the technology yourself.',
    youBringTitle: 'You bring',
    youBring: ['Business relationships', 'Opportunities', 'Introductions', 'Market knowledge'],
    weBringTitle: 'FreeAgents brings',
    weBring: [
      'Technical team',
      'Discovery',
      'Architecture',
      'Design',
      'Development',
      'Delivery',
      'Technical support',
    ],
    flowTitle: 'How it works',
    flow: [
      { actor: 'YOU', step: 'Find opportunity' },
      { actor: 'YOU', step: 'Introduce business' },
      { actor: 'FREEAGENTS', step: 'Discover' },
      { actor: 'FREEAGENTS', step: 'Build' },
      { actor: 'FREEAGENTS', step: 'Deliver' },
    ],
    commission: 'Commission-based partnership',
    primaryCta: 'Become a FreeAgents Partner',
    secondaryCta: 'Learn about the partner program',
  },

  partnersPage: {
    badge: 'Business Development Partners',
    headline: 'You find the opportunity. We build the technology.',
    subhead:
      'FreeAgents builds custom software for growing businesses. Partners introduce qualified opportunities — and earn commission when projects move forward.',
    whatWeDoTitle: 'What FreeAgents does',
    whatWeDo:
      'We design and build custom software, e-commerce systems, automations, AI-powered solutions, internal platforms, SaaS products, mobile apps and integrations — remotely, for businesses that need technology that fits how they operate.',
    whatPartnerDoesTitle: 'What a partner does',
    whatPartnerDoes:
      'You bring relationships and market access. You introduce businesses that need technology. You do not need to sell engineering, manage delivery, or build anything yourself.',
    whatWeHandleTitle: 'What FreeAgents handles',
    whatWeHandle: [
      'Discovery and scoping',
      'Architecture and design',
      'Full-stack development',
      'Launch and technical support',
    ],
    howItWorksTitle: 'How the partnership works',
    howItWorks: [
      { title: 'Connect', body: 'Tell us about the business and the opportunity.' },
      { title: 'Qualify', body: 'We run discovery and confirm fit with the client.' },
      { title: 'Build', body: 'Our team delivers the technology end to end.' },
      { title: 'Earn', body: 'You receive commission on closed, delivered partnership deals.' },
    ],
    commissionNote: 'Commission-based partnership — details shared during onboarding.',
    startTitle: 'Ready to start?',
    startSubhead: 'If you already talk to businesses that need better software, let’s talk.',
    primaryCta: 'Become a FreeAgents Partner',
    secondaryCta: 'Talk to FreeAgents',
  },

  finalCta: {
    clientTitle: 'Have a business problem that technology could solve?',
    clientCta: 'Talk to FreeAgents',
    partnerTitle: 'Have access to businesses that need technology?',
    partnerCta: 'Become a Partner',
  },

  faq: {
    eyebrow: 'FAQ',
    headline: 'Common questions',
    items: [
      {
        q: 'Do you work with international clients?',
        a: 'Yes. We work with businesses remotely and are available for international projects. Collaboration is structured around clear discovery, milestones and communication.',
      },
      {
        q: 'Are you a website agency?',
        a: 'No. We are a technology partner. We build custom software, e-commerce ecosystems, automations, AI features, internal platforms and products — not template sites.',
      },
      {
        q: 'How do projects start?',
        a: 'With a discovery conversation. We learn the business problem first, then propose scope, approach and next steps. No commitment required to talk.',
      },
      {
        q: 'Can you continue after launch?',
        a: 'Yes. Many clients keep us on for iterations, integrations and scaling once the first version is live.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    headline: 'Let’s talk about your project',
    subhead:
      'Book a discovery call, send a message, or reach us on WhatsApp / LinkedIn. We work with businesses remotely.',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      country: 'Country',
      projectType: 'Project type',
      message: 'Message',
      projectTypes: [
        'Custom software',
        'E-commerce',
        'Automation / AI',
        'SaaS / MVP',
        'Partnership inquiry',
        'Other',
      ],
      submit: 'Send message',
      submitWhatsApp: 'Send via WhatsApp',
      mailtoNote: 'Opens your email app to send the message (temporary contact method).',
      whatsappNote: 'Opens WhatsApp with this message ready to send.',
    },
    calendlyTitle: 'Book a 30-minute discovery call',
    orDirect: 'Or contact us directly',
    whatsappCta: 'Contact via WhatsApp',
    whatsappDefault: 'Hi FreeAgents, I would like to talk about a software project.',
    quickMessages: [
      'Hi, I need custom software for my business.',
      'Hi, I am interested in e-commerce / Shopify work.',
      'Hi, I want to explore a partnership with FreeAgents.',
      'Hi, I would like to book a discovery call.',
    ],
    floatingCta: 'Talk to us',
  },

  footer: {
    tagline: 'Technology built around your business.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
  },

  language: {
    label: 'Language',
    en: 'English',
    es: 'Español',
  },
};
