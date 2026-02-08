Prompt (usuario):

Teniendo en cuenta mis líneas de diseño y decisiones técnicas descritas en `project-brief.md` y `project-inspiration.md` (y respetando los tokens de `assets/css/_variables.css`), analiza estos portfolios: https://www.art-yakushev.com/

- https://rubioydelamo.com/proyecto/diseno-de-paneras-verticales/
- https://www.vasava.es/es
- https://spicyagenciacreativa.com/portfolio/uber-eats-mcdonalds/

## Volcado de entrega (archivos destino)

- `docs/prompt-analisis-galerias.md`: pega este prompt + la respuesta completa.
- `project-inspiration.md`: añade las URLs analizadas y 3 bullets de “patrones transferibles” (sin copiar).
- `project-brief.md`: incorpora 2 decisiones concretas (layout + contenido) en Key Sections / Design Direction.

Objetivo pedagógico: detectar **patrones transferibles** (no copiar estética).

Para cada uno, evalúa:

1. **Diseño Visual (Awwwards criteria)**
   - Estética general (1-10)
   - Tipografía y jerarquía
   - Uso de color y contraste
   - Composición y espaciado

2. **UX de Galería**
   - Facilidad para explorar proyectos
   - Claridad de navegación
   - Información por proyecto (título, descripción, tags)
   - Call-to-actions efectivos

3. **Técnica**
   - Tipo de layout (grid, masonry, custom)
   - Responsive behavior
   - Performance (carga de imágenes)
   - Micro-interactions

4. **Insights Accionables (aplicables a mi brief)**
   - 3 patrones que puedo reutilizar sin copiar (con explicación)
   - 3 riesgos/antipatrones a evitar (con explicación)
   - 2 decisiones concretas para mi galería (layout + contenido), justificadas con mi `project-brief.md`

Devuelve:

- Tabla comparativa (Diseño / UX / Técnica)
- “Decisiones para mi proyecto” (bullets)
- Checklist de verificación (qué revisar al implementarlo)

---

Respuesta (análisis completo):

Resumen breve

Analizo las cuatro referencias solicitadas y extraigo patrones transferibles, riesgos y decisiones concretas aplicables a tu brief. Las recomendaciones respetan la idea de usar tokens de diseño (colores/espacios) en `assets/css/_variables.css`, priorizan accesibilidad (WCAG AA) y rendimiento (lazy loading, `srcset`).

Análisis por sitio

1. https://www.art-yakushev.com/

- Diseño Visual (Awwwards criteria)
  - Estética general: 8/10 — fuerte presencia visual, enfoque en obra como protagonista.
  - Tipografía y jerarquía: tipografía clara, títulos grandes y body reducido; buen contraste visual.
  - Uso de color y contraste: paleta neutra con acentos; contraste suficiente para imágenes y textos.
  - Composición y espaciado: generoso uso de espacio alrededor de imágenes, foco en la imagen principal.

- UX de Galería
  - Facilidad para explorar proyectos: alta — las miniaturas son clicables y el flujo invita a entrar en cada proyecto.
  - Claridad de navegación: navegación minimalista, fácil de entender; posible necesidad de breadcrumbs en propuestas largas.
  - Información por proyecto: suele mostrar título y, en la vista detalle, contexto y proceso.
  - Call-to-actions efectivos: CTA discreto pero claro («Ver proyecto» o similar).

- Técnica
  - Tipo de layout: grid simple con filas bien espaciadas (no masonry complejo).
  - Responsive behavior: adaptativo, con imágenes que refluye a una columna en móvil.
  - Performance: good practice esperada (imágenes optimizadas y lazy-loading).
  - Micro-interactions: hover sutiles y transiciones suaves en imágenes.

- Insights
  - Patrón reutilizable: imagen grande + CTA consistente.
  - Riesgo: depender de imágenes pesadas sin optimización.

2. https://rubioydelamo.com/proyecto/diseno-de-paneras-verticales/

- Diseño Visual
  - Estética general: 7/10 — enfoque de estudio de caso editorial, limpio y directo.
  - Tipografía y jerarquía: jerarquía editorial clara; uso de intertítulos para guiar lectura.
  - Uso de color: paleta contenida; contraste funcional.
  - Composición y espaciado: uso de columnas y texto-respeto para permitir lectura de caso.

- UX de Galería
  - Facilidad para explorar: buena cuando hay CTA a cada caso; las páginas de proyecto funcionan como mini‑artículos.
  - Claridad de navegación: navegación de proyecto clara, con secciones (problema, proceso, resultado).
  - Información por proyecto: detallada — ideal para case studies.
  - CTAs: orientados a leer el caso; menos foco en contacto inmediato.

- Técnica
  - Tipo de layout: layout editorial (columnas) más que grid de miniaturas.
  - Responsive: buenas adaptaciones, mantiene lectura cómoda en móvil.
  - Performance: imágenes y texto balanceados; cargar casos largos puede implicar más peso.
  - Micro-interactions: pocas, más estático/editorial.

- Insights
  - Patrón reutilizable: estructura de caso (contexto, proceso, resultado) para proyectos más complejos.
  - Riesgo: pages demasiado largas sin sumar navegación interna.

3. https://www.vasava.es/es

- Diseño Visual
  - Estética general: 9/10 — lenguaje visual profesional, fuerte dirección artística.
  - Tipografía y jerarquía: tipografías potentes, escala tipográfica bien trabajada.
  - Uso de color y contraste: colores como acentos estratégicos; buen contraste.
  - Composición y espaciado: layouts creativos; composiciones asimétricas con buen ritmo.

- UX de Galería
  - Facilidad para explorar: alta — navegación por proyectos clara y atractiva.
  - Claridad de navegación: estructura clara, menús y caminos hacia cases bien pensados.
  - Información por proyecto: títulos claros y despieces visuales de proyecto.
  - CTAs: bien situados para ver más o contactar.

- Técnica
  - Tipo de layout: grid/custom con secciones combinadas (a veces full-bleed).
  - Responsive: muy trabajada; adaptaciones visuales que preservan la intención.
  - Performance: probable uso de técnicas de optimización; imágenes pre-cargadas selectivamente.
  - Micro-interactions: animaciones y transiciones cuidadas.

- Insights
  - Patrón reutilizable: uso de composiciones modulares que mezclan imágenes y bloques de texto.
  - Riesgo: complejidad técnica que puede afectar tiempo de desarrollo.

4. https://spicyagenciacreativa.com/portfolio/uber-eats-mcdonalds/

- Diseño Visual
  - Estética general: 8/10 — enfoque en campaña con imágenes y mockups de producto.
  - Tipografía y jerarquía: funcional, con buena lectura de títulos y subtítulos.
  - Uso de color: colores de marca utilizados como acentos; buen contraste en llamadas.
  - Composición y espaciado: uso efectivo de grids y secciones para contar la historia del proyecto.

- UX de Galería
  - Facilidad para explorar: muy buena — presenta hero + secuencias visuales por proyecto.
  - Claridad de navegación: claro para usuarios interesados en campañas o servicios.
  - Información por proyecto: incluye objetivos, solución y resultados visuales.
  - CTAs: orientados a ver el caso; posibilidad de contacto visible.

- Técnica
  - Tipo de layout: mezcla de grid y secciones a pantalla completa para impactos visuales.
  - Responsive: pensado para adaptarse a distintas pantallas, con carousels y galerías fluidas.
  - Performance: carga selectiva de assets; uso de videos o gifs puede afectar.
  - Micro-interactions: scroll-driven reveals y micro-animaciones.

- Insights
  - Patrón reutilizable: storytelling visual por secciones (problema → solución → resultado).
  - Riesgo: heavy assets (video/gifs) sin optimizar.

Tabla comparativa (Diseño / UX / Técnica)

| Sitio                       |                Diseño (estética) |                       UX (galería) |                     Técnica (layout & performance) |
| --------------------------- | -------------------------------: | ---------------------------------: | -------------------------------------------------: |
| art-yakushev.com            | 8/10 — obra protagonista, limpio |     Fácil exploración; CTA simples |                  Grid simple, lazy images esperado |
| rubioydelamo.com (caso)     |      7/10 — editorial, narrativo | Excelente para case studies largos |       Layout editorial; rendimiento OK si optimiza |
| vasava.es                   |   9/10 — dirección visual fuerte |     Navegación clara y profesional |            Grid/custom, micro-interactions pulidas |
| spicyagenciacreativa (uber) |            8/10 — campaña visual |         Muy buena narrativa visual | Secciones full-bleed y carousels; optimizar assets |

Decisiones para mi proyecto (bullets)

- Layout: usar CSS Grid responsivo con tarjetas grandes en la página principal (2 columnas desktop, 1 columna móvil), mantener gutters y colores desde `assets/css/_variables.css` para coherencia. Cada tarjeta tendrá: imagen (cover), título, rol y 3 tags; CTA «Ver proyecto» accesible por teclado.
- Página de proyecto: foco en storytelling visual modular — hero con imagen grande, carrusel optimizado (srcset + lazy), sección de proceso (problema, proceso, resultado) y lista corta de herramientas/roles.

Checklist de verificación (qué revisar al implementarlo)

- Estructura y contenido
  - - [ ] Cada tarjeta incluye título, rol, 3 tags y CTA consistente.
  - - [ ] Páginas de proyecto siguen la estructura: hero, descripción, proceso, resultados.

- Accesibilidad
  - - [ ] Contraste de texto vs fondo cumple WCAG AA (usar tokens de color).
  - - [ ] Todos los elementos interactivos son navegables por teclado y tienen foco visible.
  - - [ ] Imágenes tienen `alt` descriptivo.

- Rendimiento
  - - [ ] Imágenes entregadas con `srcset` y `loading="lazy"` cuando procede.
  - - [ ] Evitar auto-play de videos; si hay video, usar poster y control de carga.
  - - [ ] Medir Lighthouse y mantener > 90 en Performance para la galería básica.

- UI/UX
  - - [ ] Hover/focus states sutiles en tarjetas (escalado, sombreado) con preferencia a reducir animaciones para usuarios que lo soliciten.
  - - [ ] CTA «Ver proyecto» claro y consistente en todas las tarjetas.

3 patrones reutilizables (sin copiar estética)

1. Imagen-primero con CTA claro: presentar una imagen grande como entrada a cada proyecto, con un CTA textual consistente. Beneficio: reduce fricción y mejora tasa de apertura de casos.
2. Estructura de caso modular: dividir la página de proyecto en secciones (contexto → proceso → resultado) para comunicar el valor del proyecto en poco tiempo.
3. Tokens de diseño para coherencia: controlar espacios, colores y tipografías desde `assets/css/_variables.css` para iterar rápidamente y garantizar accesibilidad.

3 riesgos / antipatrones a evitar

1. Depender de assets pesados sin optimizar (videos/gifs/altas resoluciones) — puede penalizar Performance y SEO.
2. Falta de jerarquía textual — demasiadas imágenes sin títulos claros dificultan la comprensión del rol y alcance del proyecto.
3. Micro‑interacciones excesivas o no accesibles — animaciones que no respetan preferencias de usuario (prefers-reduced-motion) o que rompen navegación por teclado.

2 decisiones concretas justificadas con tu `project-brief.md`

1. Layout: grid responsivo (2 columnas desktop / 1 móvil) con tarjetas de imagen grande — justificación: tu brief prioriza experiencia y diferenciación visual; un grid con imágenes destacadas comunica autenticidad y facilita la lectura rápida del portfolio.
2. Contenido por proyecto: título + rol + 3 tags + CTA y página de caso con hero + proceso + herramientas — justificación: tu objetivo es mostrar ilustración aplicada a diseño; el contenido estructurado permite a agencias y reclutadores evaluar rápidamente qué hiciste, con qué rol y herramientas usadas.

Conclusión rápida y siguientes pasos

- Implementa primero una versión mínima (MVP) de la galería con grid responsive, imágenes optimizadas (`srcset`, `loading="lazy"`) y CTAs accesibles.
- Luego, añade la página de proyecto tipo case study para los 3–5 proyectos más representativos.
- Prioriza usar tokens en `assets/css/_variables.css` para color y espaciado; esto facilitará pruebas y ajustes de contraste.

---

Archivo entregado: incluye este prompt y la respuesta completa.
