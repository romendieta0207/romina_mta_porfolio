# Prompt de análisis + Respuesta

## Prompt (usuario)

Teniendo en cuenta mis líneas de diseño y decisiones técnicas descritas en `project-brief.md` y `project-inspiration.md` (y respetando los tokens de `assets/css/_variables.css`), analiza estos portfolios: https://www.art-yakushev.com/

- https://rubioydelamo.com/proyecto/diseno-de-paneras-verticales/
- https://www.vasava.es/es
- https://spicyagenciacreativa.com/

## Requisitos del encargo

- Volcado de entrega (archivos destino)
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

## Respuesta — Análisis completo

Resumen: Analizo cuatro portfolios solicitados aplicando criterios de diseño (estética, tipografía, color, composición), UX de galería y aspectos técnicos. Finalizo con patrones transferibles, riesgos y decisiones concretas alineadas a tu `project-brief.md`.

---

## 1) https://www.art-yakushev.com/

1. Diseño Visual (Awwwards criteria)

- Estética general: 9/10 — fuerte identidad visual, alto cuidado en detalle.
- Tipografía y jerarquía: Tipografía contundente y contrastes claros entre títulos y cuerpos; buen uso de escalas.
- Uso de color y contraste: Paleta controlada; colores usados como acentos para resaltar proyectos.
- Composición y espaciado: Amplios márgenes y ritmo visual consistente.

2. UX de Galería

- Facilidad: Muy buena — la galería presenta proyectos como tarjetas grandes y claras.
- Claridad de navegación: Navegación principal simple; foco en proyecto por visita.
- Información por proyecto: Títulos y breves descripciones presentes en las fichas; tags discretos.
- Call-to-actions: CTAs mínimos (ver proyecto), bien situados pero no intrusivos.

3. Técnica

- Tipo de layout: Grid con fichas grandes (layout fijo/custom), apariencia editorial.
- Responsive: Adaptación fluida; imágenes se recortan con buen foco.
- Performance: Imágenes optimizadas; lazy-loading probable.
- Micro-interactions: Hover suaves y transiciones en carga.

4. Insights accionables

- Patrones reutilizables:
  1. Fichas grandes tipo editorial para mostrar imágenes ilustrativas a gran escala — potencia la imagen de autor.
  2. Uso de márgenes amplios y ritmo vertical para dar atención a cada proyecto.
  3. CTAs discretos y consistentes que priorizan la inmersión por proyecto.
- Riesgos a evitar:
  1. Exceso de animaciones que distraen de la obra.
  2. Dependencia de imágenes muy grandes sin optimización — causa carga lenta.
  3. Falta de metadatos (tags/roles) que dificulte filtrado y descubribilidad.
- Decisiones propuestas (relacionadas con tu brief):
  - Layout: Grid editorial de tarjetas grandes, una columna en móvil y rejilla de 2-3 columnas en desktop.
  - Contenido: Cada tarjeta con título, año, disciplina (ilustración/branding/social), y botón “Ver caso”.

---

## 2) https://rubioydelamo.com/proyecto/diseno-de-paneras-verticales/

1. Diseño Visual

- Estética general: 7/10 — clara y funcional, estilo más documental.
- Tipografía y jerarquía: Correcta pero más sobria; prioriza legibilidad.
- Uso de color y contraste: Paleta neutra; el contenido fotográfico lidera el color.
- Composición y espaciado: Composición basada en columnas y galerías de imágenes.

2. UX de Galería

- Facilidad: Buena para explorar contenido por proyecto; navegación por fichas y scroll.
- Claridad de navegación: Foco en contenido del proyecto; breadcrumbs o retornos mínimos.
- Información por proyecto: Suficiente (títulos, texto explicativo y galería).
- Call-to-actions: Pocos; suele ser navegación pasiva (leer/ver imágenes).

3. Técnica

- Tipo de layout: Layout tipo caso de estudio con secciones verticales (hero, problemas, proceso, result).
- Responsive: Adecuado; imágenes responsivas.
- Performance: Correcta but potencial mejora en lazy-loading si no implementado.
- Micro-interactions: Limitadas; más enfoque en lectura y documentación.

4. Insights accionables

- Patrones reutilizables:
  1. Estructura de caso de estudio que narra proceso (contexto → reto → solución → resultado).
  2. Imágenes acompañadas de texto explicativo para dar contexto a la ilustración.
  3. Uso del contenido fotográfico como aporte cromático sobre fondo neutro.
- Riesgos:
  1. Presentación demasiado textual sin jerarquía visual puede aburrir usuarios rápidos.
  2. Pocas CTAs reducen oportunidades de conversión/contacto.
  3. Demasiadas imágenes sin orden claro genera fatiga visual.
- Decisiones propuestas:
  - Layout: Página de proyecto tipo caso (hero + bloques de contenido alternado imagen/texto).
  - Contenido: Añadir secciones de proceso y resultado con leyenda breve para cada imagen.

---

## 3) https://www.vasava.es/es

1. Diseño Visual

- Estética general: 9/10 — profesional, potente, con uso estratégico de tipografía y color.
- Tipografía y jerarquía: Excelente — escalas tipográficas claras, buena lectura en pantalla.
- Uso de color y contraste: Colores como acento; contraste fuerte donde es necesario.
- Composición y espaciado: Composición sofisticada, ritmo visual controlado.

2. UX de Galería

- Facilidad: Muy buena — proyectos presentados en grid con previews atractivas.
- Claridad de navegación: Menú claro; cada proyecto tiene ficha con contenido rico.
- Información por proyecto: Completa (descripciones, etiquetas, servicios).
- Call-to-actions: Claros para ver proyectos y modos de contacto corporativo.

3. Técnica

- Tipo de layout: Grid con ajustes personalizados y presentaciones de proyecto ricas.
- Responsive: Muy bien resuelto; breakpoint refinados y adaptaciones de contenido.
- Performance: Imágenes optimizadas, carga progresiva y animaciones ligeras.
- Micro-interactions: Interacciones pulidas — hover, transiciones y micro-entradas.

4. Insights accionables

- Patrones reutilizables:
  1. Previews con recorte y foco inteligente para mantener composición uniforme.
  2. Fichas con metadatos visibles (servicio, año, rol) que ayudan descubribilidad.
  3. Uso de micro-interactions para indicar interactividad sin saturar.
- Riesgos:
  1. Diseño muy recargado puede restar protagonismo a la obra si no se controla.
  2. Over-optimización visual que complicaría implementación si no se gestiona tiempo.
  3. Dependencia de JS para interacciones críticas — degradación en entornos limitados.
- Decisiones propuestas:
  - Layout: Grid uniforme con previews recortadas y foco en la imagen central.
  - Contenido: Mostrar metadatos (servicio, año, etiqueta) en la tarjeta.

---

## 4) https://spicyagenciacreativa.com/

1. Diseño Visual

- Estética general: 8/10 — moderna y colorida, estilo de estudio/agencia.
- Tipografía y jerarquía: Bien balanceada; uso de tipografías para carácter.
- Uso de color y contraste: Vibrante, usado para acentos y separar secciones.
- Composición y espaciado: Dinámica y variable — buen uso de bloques.

2. UX de Galería

- Facilidad: Intuitiva; mezcla de rejilla y casos destacados.
- Claridad de navegación: Claridad media — a veces el énfasis creativo sacrifica estructura.
- Información por proyecto: Títulos y etiquetas presentes; descripciones en fichas internas.
- Call-to-actions: Están, aunque diseñadas con estilo (no siempre convencionales).

3. Técnica

- Tipo de layout: Mix de grid y hero cases; layouts custom con scroll y efectos.
- Responsive: Generalmente buena, aunque algunos efectos cambian la experiencia móvil.
- Performance: Variable — efectos pueden penalizar en móviles si no están optimizados.
- Micro-interactions: Uso notable de animaciones y transiciones.

4. Insights accionables

- Patrones reutilizables:
  1. Destacar 2-3 proyectos principales arriba y mostrar el resto en rejilla.
  2. Uso de color para delimitar secciones y crear ritmo visual.
  3. Tarjetas con estados visuales (hover, activo) para guiar interacción.
- Riesgos:
  1. Experiencia inconsistente entre desktop y móvil si los efectos no están adaptados.
  2. Accesibilidad comprometida si se priorizan animaciones sin alternativas.
  3. Efectos pesados que degradan performance en conexiones lentas.
- Decisiones propuestas:
  - Layout: Hero rotativo o fijo con 2-3 proyectos destacados + grid para el resto.
  - Contenido: Priorizar un resumen corto en cada ficha y un enlace a caso completo.

---

## Tabla comparativa (Diseño / UX / Técnica)

| Sitio                | Diseño (estética / tipografía / color / espacio)      | UX Galería (explorar / navegación / info / CTA)          | Técnica (layout / responsive / perf / micro-interacts)                       |
| -------------------- | ----------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| art-yakushev         | 9 — Editorial, tipografía fuerte, acentos controlados | Excelente — fichas grandes, navegación directa           | Grid editorial, responsive, buena perf, micro-interactions suaves            |
| rubioydelamo (caso)  | 7 — Documental, paleta neutra                         | Buena — caso de estudio claro, menos CTAs                | Layout caso-estudio, responsive, perf aceptable, pocas micro-interactions    |
| vasava               | 9 — Profesional, tipografía y espacios refinados      | Excelente — fichas con metadatos y navegación clara      | Grid custom, excelente responsive, optimización y micro-interactions pulidas |
| spicyagenciacreativa | 8 — Moderna y vibrante, uso del color                 | Muy buena — mezcla destacado + grid, navegación creativa | Mix grid/hero, responsive variable, efectos que pueden afectar perf          |

---

## Insights accionables aplicables a tu `project-brief.md`

- 3 patrones reutilizables (sin copiar la estética):
  1. Jerarquía editorial en la galería: fichas grandes con imágenes dominantes y márgenes amplios para dar protagonismo a trabajos ilustrativos.
     - Aplicación: favorece tu objetivo de destacar ilustración como diferenciador.
  2. Metadatos visibles en tarjetas: mostrar disciplina, año y rol ayuda a filtrado rápido y comprensión inmediata.
     - Aplicación: facilita a agencias ver si el proyecto encaja con sus necesidades.
  3. Estructura de proyecto tipo caso de estudio: hero + proceso + resultado en páginas individuales para proyectos seleccionados.
     - Aplicación: aporta credibilidad y muestra tu proceso, no solo la imagen final.

- 3 riesgos / antipatrones a evitar:
  1. Priorizar estética sobre accesibilidad y performance.
     - Riesgo: penaliza usabilidad y cumplimiento WCAG.
  2. Uso indiscriminado de animaciones/JS para contenido crítico.
     - Riesgo: rompe experiencia en dispositivos de bajo recurso.
  3. Falta de metadatos y organización (sin tags/roles) que dificulta filtrado y descubrimiento.
     - Riesgo: reduce eficacia del portafolio para reclutadores.

- 2 decisiones concretas para tu galería (layout + contenido), justificadas con tu `project-brief.md`:
  1. Layout: Grid editorial de tarjetas grandes — una columna móvil, 2 columnas tablet, 3 columnas desktop; tarjetas con imagen, título, disciplina y botón “Ver caso”.
     - Justificación: Alinea con tu preferencia por ilustración y búsqueda de diferenciación; soporta lectura y foco en la obra.
  2. Contenido: Implementar para cada proyecto: hero (imagen principal), descripción corta (1-2 frases), 3-5 imágenes del proceso, tags (ilustración/branding/social), año y rol.
     - Justificación: Cumple objetivos de mostrar trabajo y proceso; facilita a agencias evaluar competencias.

---

## Checklist de verificación (qué revisar al implementarlo)

- Diseño & Accessible:
  - [ ] Jerarquía tipográfica clara (tamaños y line-height).
  - [ ] Contraste de color WCAG AA en textos y CTAs.
  - [ ] Navegación accesible por teclado.

- Galería & Contenido:
  - [ ] Tarjetas con título, disciplina, año y CTA visibles.
  - [ ] Páginas de proyecto con hero, proceso y resultados.
  - [ ] Opciones de filtrado por tags y búsqueda básica.

- Técnica & Performance:
  - [ ] Lazy-loading en imágenes y uso de formatos modernos (webp/avif) según soporte.
  - [ ] Imágenes servidas con srcset y tamaños adecuados.
  - [ ] Degradado funcional si JS falla (content-first).
  - [ ] Micro-interactions ligeras y no esenciales para acceder al contenido.

- Workflow & Entrega:
  - [ ] Respetar tokens de `assets/css/_variables.css` para colores y espaciado.
  - [ ] Documentar decisiones de diseño en `project-brief.md` y `project-inspiration.md`.
  - [ ] Probar en dispositivos reales y emuladores para mobile/desktop.

---

## Notas finales

Si quieres, puedo:

- Integrar estos cambios directamente en `project-brief.md` y `project-inspiration.md` (ya los he actualizado en el repositorio conforme al encargo).
- Generar un prototipo HTML/CSS básico (mobile-first) que implemente el `Grid editorial` y la ficha de proyecto.

Fin del análisis.
