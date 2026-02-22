# Plan de implementación: Sección Proyectos con mini-cards

Este documento propone cómo construir la sección "Proyectos" utilizando tarjetas pequeñas con título, imagen y subtítulo. Se apoyará en un grid de tres columnas, efecto hover con overlay y un botón "Ver más". El diseño será responsive.

## Requisitos

- Grid de 3 columnas en escritorio.
- Cada tarjeta contiene:
  - Imagen de proyecto de fondo o principal.
  - Título del proyecto (h3/h4).
  - Subtítulo o descripción corta.
  - Botón "Ver más" superpuesto o al pie.
- Hover: overlay semitransparente + mostrar botón.
- Responsive: columnas se reducen a 2/1 según ancho.
- Solo HTML y CSS (no se solicita JS para esta tarea).

## Estructura HTML sugerida

```html
<section class="proyectos" id="proyectos">
  <h2 class="proyectos__heading">Proyectos</h2>
  <div class="proyectos__grid">
    <article class="proyecto-card">
      <div class="proyecto-image" style="background-image:url('ruta.jpg');">
        <div class="overlay">
          <button class="btn ver-mas">Ver más</button>
        </div>
      </div>
      <h3 class="proyecto-title">Título del proyecto</h3>
      <p class="proyecto-subtitle">Subtítulo breve</p>
    </article>
    <!-- repetir 3 veces -->
  </div>
</section>
```

- El contenedor `.proyectos__grid` maneja el grid.
- `.proyecto-image` usa `background-image` o puede contener un `<img>`.
- `.overlay` aparece en hover con opacidad.

## CSS

Agregar a módulo de componentes o scrollytelling:

```css
.proyectos {
  padding: var(--space-4xl) var(--space-2xl);
  text-align: center;
}
.proyectos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}
.proyecto-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
.proyecto-image {
  width: 100%;
  padding-top: 56.25%; /* 16:9 ratio */
  background-size: cover;
  background-position: center;
  position: relative;
}
.proyecto-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity var(--transition-base);
}
.proyecto-card:hover .overlay {
  opacity: 1;
}
.ver-mas {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.proyecto-title {
  margin: var(--space-md) 0 var(--space-xs);
  font-size: var(--font-size-xl);
}
.proyecto-subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
}

/* responsive grid */
@media (max-width: 992px) {
  .proyectos__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .proyectos__grid {
    grid-template-columns: 1fr;
  }
}
```

- `grid-template-columns` se ajusta en media queries.
- Overlay y botón visible al hover.

## Pasos

1. Insertar estructura HTML dentro de `index copy.html` donde corresponda.
2. Añadir estilos al CSS usando variables de `theme.css` o `_variables.css`.
3. Verificar en diferentes tamaños:
   - Desktop 3 columnas
   - Tablet 2 columnas
   - Móvil 1 columna
4. Ajustar imágenes y textos reales.

El plan está listo para revisión. No se implementará hasta obtener aprobación.
