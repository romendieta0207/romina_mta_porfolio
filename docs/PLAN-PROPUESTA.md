# Plan de implementación: Sección `propuesta`

## Objetivo

Crear una nueva sección independiente en el portfolio que sirva como landing premium editorial para cotizaciones. Diseño inspirado en Apple, Pentagram e Instrument con background azul principal del portfolio.

## Alcance

- Nueva ruta: `/propuesta/`
- Ejemplo de cliente: `/propuesta/udit`
- Contenido cargado dinámicamente desde JSON
- **Diseño editorial premium**: navegación sticky, hero con animaciones, toggle de precios (mes/pieza), tabla comparativa, timeline, términos, CTA
- **Paleta**: azul (#0b3249) como background primario, amarillo (#f6bc3f) para acentos, grises neutros
- Animaciones suaves con GSAP / ScrollTrigger y Intersection Observer
- Responsive: desktop, tablet, mobile
- HTML5, CSS moderno (variables, Grid, Flexbox), JavaScript vanilla
- Mantener estructura actual sin modificar el portfolio principal

## Estructura de archivos

- `propuesta/index.html` - landing principal de la sección
- `propuesta/udit/index.html` - propuesta de ejemplo para cliente `udit`
- `propuestas/udit.json` - datos dinámicos para la propuesta
- `assets/js/propuesta.js` - lógica de carga dinámica y animaciones
- `assets/css/_propuesta.css` - estilos específicos de la landing de propuestas
- `assets/css/style.css` - import del nuevo partial CSS

## Estructura del JSON

Cada propuesta incluirá:

```json
{
  "slug": "udit",
  "cliente": "nombre del cliente",
  "proyecto": "nombre del proyecto",
  "descripcion": "descripción breve",
  "hero": { "eyebrow", "title", "subtitle", "detail", "buttons" },
  "servicios": [ { "n", "title", "description" } ],
  "toggle": { "mes", "pieza" },
  "paquetesMes": [ { "name", "desc", "price", "items", "featured", "badge" } ],
  "paquetesPieza": [ { "entrega", "precio" } ],
  "incluye": [ "item1", "item2" ],
  "noIncluye": [ "item1", "item2" ],
  "tiempos": [ { "tiempo", "tipo", "description" } ],
  "condiciones": [ "condición 1", "condición 2" ],
  "contacto": { "titulo", "descripcion", "email", "phone", "actions" },
  "footer": "texto footer"
}
```

## Fases de implementación

1. ✅ Crear ruta `/propuesta/` y `/propuesta/udit/`
2. ✅ Crear `propuestas/udit.json` con estructura ampliada
3. ✅ Refactorizar `propuesta/udit/index.html` con diseño editorial premium
4. ✅ Actualizar `_propuesta.css` con paleta azul y estilos premium
5. ✅ Optimizar `propuesta.js` para renderización dinámica de nuevas secciones
6. ✅ Incluir toggle mes/pieza, tabla de precios, timeline y términos
7. ✅ Verificar responsive y animaciones
8. ✅ Documentar en `docs/`

## Validación

- ✅ Landing renderiza todos elementos desde JSON
- ✅ `/propuesta/udit` carga y muestra la propuesta
- ✅ No requiere cambios HTML para nuevas propuestas
- ✅ Diseño premium con navegación sticky, hero animado, toggle funcional
- ✅ Accesibilidad: ARIA labels, focus visible, contraste adecuado
- ✅ Performance: Lazy loading, Intersection Observer, animaciones suaves
- ✅ Responsive: Mobile-first, tablet, desktop

## Características principales

### Diseño

- **Nav sticky**: background blur, scroll detection
- **Hero**: animación de elementos flotantes, eyebrow, título destacado
- **Servicios**: timeline con 4 elementos
- **Precios**: toggle mes ↔ pieza, 4 planes destacados
- **Comparativa**: tabla interactiva
- **Incluye/No incluye**: grid 2 columnas con iconos
- **Timeline de entrega**: 4 elementos con tiempos
- **Términos**: lista numerada de condiciones
- **CTA**: sección prominente con formulario y datos de contacto
- **Footer**: datos legales y validez

### Tecnología

- CSS variables alineadas con portfolio
- Paleta: azul (#0b3249), amarillo (#f6bc3f), neutros
- GSAP ScrollTrigger para reveal animations
- Intersection Observer para scroll-triggered effects
- Toggle/tab functionality con aria-selected
- Lazy load en iconos y elementos pesados
