# Auditoría de marketing: landing FreeAgents

Análisis en profundidad de la estructura actual y recomendaciones para convertir la landing en un canal de captación desde publicidad (Meta, Google, LinkedIn).

---

## 1. Estructura actual (qué tienes)

| Orden | Sección        | ID / Ubicación   | Contenido resumido |
|-------|----------------|------------------|---------------------|
| 0     | Header         | fijo             | Logo, nav (5 enlaces), CTA «Agendar llamada» |
| 1     | Hero           | —                | Logo, «FREE AGENTS», «Ya es una realidad», subhead, 2 CTAs, bloque Full Business Growth + imagen |
| 2     | Qué es        | `#que-es`        | 3 columnas: Desarrollo a medida, Optimización, Estrategia digital |
| 3     | Problema       | `#problema`      | Frase + 5 dolores (web que no vende, procesos manuales, etc.) |
| 4     | Solución       | `#solucion`      | 5 cards: Web estratégica, Automatización, Sistemas, Integraciones, Escalabilidad |
| 5     | Cómo trabajamos| `#como-trabajamos` | 5 pasos numerados (01–05) |
| 6     | CTA final      | —                | «El futuro no se improvisa. Se construye.» + botón |
| 7     | Contacto       | `#contacto`      | WhatsApp (form) + Calendly (link) |
| 8     | Footer         | —                | Logo, ©, 2 enlaces (Contacto, Qué es) |

**Layout:** `Layout.astro` con title/description genéricos, favicon, sin Open Graph ni schema.

---

## 2. Lo que está bien (fortalezas)

- **Header:** CTA visible en desktop y móvil, navegación clara, enlaces anclados correctos.
- **Problema:** Mensaje fuerte («La mayoría compra páginas web. Las empresas inteligentes construyen sistemas.») y dolores concretos.
- **Solución y Qué es:** Propuesta de valor clara y alineada con full business growth.
- **Cómo trabajamos:** Proceso transparente, reduce incertidumbre.
- **Contacto:** Dos rutas (WhatsApp + Calendly), bajo fricción.
- **Estética:** Identidad tech/neón coherente, buena base para confianza.

---

## 3. Lo que falta (gaps críticos para marketing digital)

### 3.1 Flujo de la página (orden de secciones)

**Problema:** Hoy el orden es **Hero → Qué es → Problema → Solución → …**

Para tráfico de ads, el visitante llega con una necesidad o dolor. Si primero le dices «qué es FreeAgents» sin haber validado el problema, parte del impacto se pierde.

**Recomendación:** Reordenar a un flujo de conversión clásico:

1. **Hero** – Promesa + CTA  
2. **Problema** – «¿Te suena?» (identificación)  
3. **Solución** – «Esto es lo que hacemos»  
4. **Qué es FreeAgents** – Quiénes son y en qué se diferencian  
5. **Cómo trabajamos** – Proceso  
6. **Prueba social** (nueva) – Logos, números, testimonios  
7. **FAQ** (nueva) – Objeciones y dudas  
8. **CTA final**  
9. **Contacto**  
10. **Footer**

Así: dolor → solución → credibilidad → proceso → prueba social → objeciones → acción.

---

### 3.2 Prueba social (social proof) — **FALTA**

No hay:

- Logos de clientes o marcas con las que han trabajado  
- Número de proyectos, clientes o años  
- Testimonios o citas  
- Casos de éxito (aunque sea 1–2 con resultado: «+X% ventas», «Y horas ahorradas»)

Para tráfico pagado esto es crítico: la gente no conoce la marca y necesita señales de que otros ya confiaron.

**Añadir:**

- Bloque **«Con quién trabajamos»** o **«En números»**: logos (aunque sea 3–5) o métricas (ej. «+50 proyectos», «X industrias»).  
- Bloque **Testimonios**: 1–3 citas con nombre, rol y foto o iniciales.  
- Opcional: mini caso (1 párrafo: situación → qué hicieron → resultado).

Si aún no tienen clientes públicos, usar placeholders con copy tipo «Empresas que ya construyen su futuro con FreeAgents» y preparar el componente para cuando tengan datos.

---

### 3.3 FAQ — **FALTA**

Objeciones típicas de quien llega por ads:

- ¿Cuánto cuesta? ¿Hay paquetes?  
- ¿Cuánto tarda un proyecto?  
- ¿Trabajan con mi industria o tamaño de empresa?  
- ¿Qué pasa después de agendar? ¿Me llaman o escriben?

Sin FAQ, esas dudas se quedan sin respuesta y aumentan la tasa de rebote.

**Añadir:** Sección FAQ con 5–8 preguntas en formato acordeón (expandible). Incluir al menos:

- Qué incluye la llamada estratégica  
- Qué pasa después de agendar (ej. «Te confirmamos por email y nos conectamos a la hora acordada»)  
- Tipos de proyectos o servicios (resumen)  
- Plazos aproximados (si aplica)

---

### 3.4 Hero: mensaje y above the fold

**Problemas:**

- **«Ya es una realidad»** es abstracto; no comunica beneficio ni resultado.  
- El bloque **Full Business Growth** con imagen está dentro del hero y hace que el «pliegue» (fold) sea muy alto: en móvil puede que no se vea el CTA sin hacer scroll.  
- Para ads, en los primeros 3–5 segundos debe quedar claro: **qué obtengo** y **qué hago** (CTA).

**Recomendaciones:**

- Headline orientado a **transformación o resultado**: ej. «Sistemas que hacen crecer tu negocio» o «De la web que no vende al negocio que escala».  
- Subheadline que concrete el «qué»: desarrollo a medida, automatización, estrategia.  
- Dejar **una sola idea + CTA principal** above the fold; mover el bloque Full Business Growth a una sección propia justo después del hero (o integrarlo en Solución/Qué es).  
- Asegurar que en viewport ~700px (laptop) y en móvil el CTA «Agendar llamada estratégica» sea visible sin scroll.

---

### 3.5 SEO y meta para ads y redes

**Layout actual:** Solo `<title>` y `<meta name="description">`. Falta:

- **Open Graph** (`og:title`, `og:description`, `og:image`, `og:url`) para que al compartir en Facebook/LinkedIn/WhatsApp se vea un preview atractivo.  
- **Twitter Cards** si van a compartir o promocionar en X.  
- **Canonical** para evitar duplicados.  
- **Schema.org** (Organization o LocalBusiness) para rich results y confianza.

Sin OG, los enlaces en ads o posts se ven genéricos y pierden credibilidad.

---

### 3.6 Footer

Ahora: logo, copyright, 2 enlaces. Para una landing de captación suele hacerse un cierre más completo:

- Enlaces agrupados (ej. Servicios, Empresa, Legal).  
- Enlace a **Política de privacidad** (importante si usas formularios o pixels).  
- Redes sociales si existen (LinkedIn, etc.).  
- Opcional: frase de cierre o tagline («Construimos el futuro de tu negocio»).

No es obligatorio tener 4 columnas, pero un poco más de estructura y el enlace legal dan sensación de seriedad.

---

### 3.7 Contacto y conversión

- **Placeholders:** `WHATSAPP_NUMBER = '573001234567'` y `CALENDLY_URL = 'https://calendly.com/tu-usuario/...'` deben reemplazarse por datos reales antes de lanzar campañas.  
- **Expectativa post-CTA:** En Contacto (o cerca del CTA) conviene una línea tipo «Te respondemos en menos de 24 h» o «En la llamada revisamos tu caso sin compromiso». Reduce fricción.  
- **Gracias / confirmación:** Si en el futuro añaden formulario propio (no solo WhatsApp/Calendly), tener página o estado «Gracias, te contactamos pronto» mejora la experiencia.

---

### 3.8 Tracking y atribución (ads)

No se ve en el código:

- Meta Pixel (Facebook/Instagram)  
- Google Ads conversion tag  
- Google Analytics 4 (o similar)  
- Eventos de conversión (ej. «click en Agendar llamada», «enviar WhatsApp»)

Para optimizar campañas necesitas:

- Pixel/tag de la plataforma donde pagues (Meta, Google, LinkedIn).  
- Eventos de conversión (lead, contacto) para que el algoritmo optimice hacia gente que convierte.

Recomendación: GTM (Google Tag Manager) + GA4 + pixel de la red de ads y configurar eventos en los CTAs principales.

---

### 3.9 Urgencia o escasez (opcional)

No es obligatorio, pero en B2B a veces se usa:

- «Plazas limitadas para llamadas estratégicas este mes»  
- «Agenda esta semana y recibe [recurso/beneficio]»

Solo si es cierto y encaja con el tono de marca.

---

### 3.10 «Para quién es» y diferenciación

- No hay una sección explícita **«Para quién es»** (ej. dueños de negocio, equipos de operaciones, startups que escalan). Una línea o bloque corto ayuda a que el visitante se identifique.  
- Tampoco hay un **«Por qué FreeAgents»** o comparación (nosotros vs. agencia tradicional, vs. solo desarrollo). Un bloque corto puede reforzar la propuesta sin sonar agresivo.

---

## 4. Resumen: checklist de lo que falta añadir

| Prioridad | Elemento | Acción |
|-----------|----------|--------|
| Alta      | Orden de secciones | Hero → Problema → Solución → Qué es → Cómo trabajamos → [nuevo] → [nuevo] → CTA → Contacto |
| Alta      | Prueba social      | Sección con logos de clientes y/o métricas; después testimonios |
| Alta      | FAQ                | Sección FAQ acordeón (5–8 preguntas, incl. «qué pasa después de agendar») |
| Alta      | Hero above the fold| Headline de resultado, menos contenido en fold, CTA visible sin scroll; mover bloque FBG |
| Alta      | Meta / OG / SEO    | Open Graph, Twitter Card, canonical; opcional schema Organization |
| Media     | Footer             | Más enlaces (Servicios, Legal), Política de privacidad, redes si hay |
| Media     | Expectativa post-CTA | Texto tipo «Te respondemos en 24 h» / «Llamada sin compromiso» |
| Media     | Tracking           | Pixel/GA4/GTM y eventos de conversión en CTAs |
| Baja      | Placeholders       | Sustituir WHATSAPP_NUMBER y CALENDLY_URL por datos reales |
| Baja      | «Para quién»       | Bloque corto que defina audiencia ideal |
| Opcional  | Urgencia           | Solo si aplica y es veraz |

---

## 5. Siguiente paso

- **Contenido:** Escribir textos de FAQ, 1–2 testimonios (o placeholders), y headline/subhead del hero.  
- **Estructura:** Reordenar secciones en `index.astro` y crear componentes `SocialProof` y `FAQ`.  
- **Técnico:** Añadir meta/OG en `Layout.astro`, enlace a privacidad, y preparar GTM/pixel para cuando actives campañas.

Si quieres, el siguiente paso puede ser: (1) reordenar el `index.astro` y (2) esbozar el contenido y la estructura de las secciones Social Proof y FAQ para que solo tengas que rellenar datos reales.
