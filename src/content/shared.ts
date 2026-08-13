export const CONTACT = {
  email: 'freeagentsdev@gmail.com',
  whatsappNumber: '573004940576',
  whatsappDisplay: '+57 300 494 0576',
  calendlyUrl: 'https://calendly.com/freeagentsdev/30min',
  calendlyEmbed:
    'https://calendly.com/freeagentsdev/30min?hide_gdpr_banner=1&background_color=0f0a1f&text_color=ffffff&primary_color=13c8ec',
  instagram: 'https://www.instagram.com/freeagentsdev/',
  linkedin: 'https://www.linkedin.com/company/freeagentsdev/',
} as const;

export const TEAM = [
  {
    name: 'Miguel Ángel Gallego Álvarez',
    roleKey: 'ceo',
    photo: '/team-photos/miguel.jpg',
    icon: 'strategy',
  },
  {
    name: 'Juan David Gallego Ramírez',
    roleKey: 'cto',
    photo: '/team-photos/juanito.jpg',
    icon: 'terminal',
  },
  {
    name: 'Santiago Soler Echeverri',
    roleKey: 'developer',
    photo: '/team-photos/soler.jpg',
    icon: 'code',
  },
  {
    name: 'Brayan Stiven Agudelo',
    roleKey: 'developer',
    photo: null as string | null,
    icon: 'database',
  },
  {
    name: 'Santiago Valencia Londoño',
    roleKey: 'developer',
    photo: '/team-photos/valencia.jpg',
    icon: 'devices',
  },
  {
    name: 'Jerónimo Mayorca Arias',
    roleKey: 'developerSales',
    photo: '/team-photos/mayorca.jpg',
    icon: 'trending_up',
  },
  {
    name: 'María José Herrada',
    roleKey: 'designer',
    photo: '/team-photos/majo.jpg',
    icon: 'palette',
  },
] as const;
