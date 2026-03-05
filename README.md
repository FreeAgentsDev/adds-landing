# FreeAgents Landing Page

Landing moderna y futurista para la software factory **FreeAgents** (Full Business Growth).

## Stack

- **Astro** + **Tailwind CSS**
- **React** + **Framer Motion** (animaciones)
- Diseño responsive, glassmorphism, fondo tipo Tron/galaxy y efecto de partículas

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Configuración de contacto

- **WhatsApp:** Edita `WHATSAPP_NUMBER` en `src/components/Contacto.tsx` (formato internacional sin `+`, ej: `573001234567`).
- **Calendly:** Edita `CALENDLY_URL` en `src/components/Contacto.tsx` con tu enlace de Calendly.

## Estructura

- `src/components/` — Header, Hero, secciones (Qué es, Problema, Solución, Cómo trabajamos), CTA, Contacto (WhatsApp + Calendly), Footer
- `src/components/Background.astro` — Fondo galaxy, grid Tron, montañas neón, partículas
- `public/` — Assets (logo, fullbusinessgrowth, etc.)

## Assets

Las imágenes deben estar en `public/`:

- `fa-logo.png` — Logo FreeAgents
- `fullbusinessgrowth.png` — Hero Full Business Growth
- `linkedinbanner.png` / `fa-brand.jpeg` — Referencias de estilo
