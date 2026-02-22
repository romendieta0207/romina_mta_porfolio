# Plan de implementación: Sección Servicios (Acordeón)

Este plan describe cómo crear una sección de servicios con tarjetas tipo acordeón similar a Spicy Agencia Creativa.

## Requisitos

- Lista de servicios: Ilustración, Branding, Editorial, Social media.
- Cada servicio aparece en una tarjeta plegable (acordeón).
- Solo una tarjeta expandida a la vez.
- Hover + color de fondo usando variables de `assets/css/_variables.css`.
- Funciona en mobile y escritorio (responsive).
- Detalles en HTML, CSS y JavaScript.

## Estructura HTML sugerida

```html
<section class="servicios-acordeon" id="servicios">
  <div class="acordeon-item" data-service="ilustracion">
    <button class="acordeon-header">Ilustración</button>
    <div class="acordeon-body">
      <p>Descripción de ilustración...</p>
    </div>
  </div>
  <div class="acordeon-item" data-service="branding">
    <button class="acordeon-header">Branding</button>
    <div class="acordeon-body">
      <p>Descripción de branding...</p>
    </div>
  </div>
  <div class="acordeon-item" data-service="editorial">
    <button class="acordeon-header">Editorial</button>
    <div class="acordeon-body">
      <p>Descripción de editorial...</p>
    </div>
  </div>
  <div class="acordeon-item" data-service="social">
    <button class="acordeon-header">Social Media</button>
    <div class="acordeon-body">
      <p>Descripción de social media...</p>
    </div>
  </div>
</section>
```

- Cada `.acordeon-item` contiene cabecera y cuerpo.
- El botón de header controla la apertura.
- `data-service` sirve para identificadores y estilos opcionales.

## CSS (utilizando variables)

Agregar al módulo correspondiente, por ejemplo `_components.css` o `_scrollytelling.css`:

```css
.servicios-acordeon {
  max-width: 800px;
  margin: 0 auto;
}

.acordeon-item {
  border-bottom: 1px solid var(--color-border);
}

.acordeon-header {
  width: 100%;
  text-align: left;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-gray-100);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--transition-base);
}
.acordeon-header:hover {
  background: var(--color-primary-light);
}
.acordeon-header.active {
  background: var(--color-primary);
  color: var(--color-white);
}

.acordeon-body {
  max-height: 0;
  overflow: hidden;
  padding: 0 var(--spacing-lg);
  transition: max-height 0.3s ease;
}

.acordeon-body.open {
  max-height: 200px; /* ajustar según contenido */
  padding: var(--spacing-md) var(--spacing-lg);
}

/* responsive adjustments */
@media (max-width: 768px) {
  .acordeon-header {
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
```

- Se usa `max-height` para animar apertura.
- Los colores vienen de variables `--color-primary`, etc.
- `active` en header indica elemento abierto.

## JavaScript

Interactividad para abrir/cerrar acordeón. Añadir en `main.js` o archivo nuevo.

```js
const acordeonItems = document.querySelectorAll('.acordeon-item');
acordeonItems.forEach(item => {
  const header = item.querySelector('.acordeon-header');
  const body = item.querySelector('.acordeon-body');
  header.addEventListener('click', () => {
    const isOpen = body.classList.contains('open');
    // cerrar todos
    acordeonItems.forEach(i => {
      i.querySelector('.acordeon-body').classList.remove('open');
      i.querySelector('.acordeon-header').classList.remove('active');
    });
    if (!isOpen) {
      body.classList.add('open');
      header.classList.add('active');
    }
  });
});
```

- La lógica asegura que solo una se abra.
- Puede agregarse animación de transición CSS para suavizar.

## Pasos

1. Crear marca HTML dentro de `index copy.html` en lugar adecuado (sección servicios).
2. Añadir estilos al CSS deseado usando variables.
3. Incluir script JS en `main.js`, preferiblemente en la parte inferior.
4. Verificar funcionamiento en desktop y mobile.
5. Ajustar alturas `max-height` según contenido real.

Este plan está listo para revisión; implementación se realizará tras aprobación.