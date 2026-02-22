# Plan de implementación: Sección Hero

Este documento detalla los pasos para construir la sección Hero principal del sitio, con animaciones y versiones responsive.

## Requisitos

- Texto principal grande (título/branding).
- Texto secundario o subtítulo.
- Efecto de expansión o fade-in al cargar.
- Animación adicional al hacer scroll (subir/scroll).
- Compatibilidad móvil y escritorio.

## Estructura HTML sugerida

```html
<section class="hero" id="hero">
  <video class="hero-video" autoplay muted loop playsinline>
    <source src="..." type="video/mp4" />
  </video>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">ROMINA MENDIETA</h1>
    <p class="hero-subtitle">Historias visuales que cobran vida</p>
    <a href="#servicios" class="hero__cta">Explora servicios</a>
    <div class="scroll-indicator">↓ Scroll para descubrir mi trabajo ↓</div>
  </div>
</section>
```

- Contenedor `.hero` con fondo (video o imagen).
- `.hero-content` centraliza los textos; se animará con JS.
- `h1` y `p` tienen clases específicas para styling/animación.

## CSS

Agregar al módulo de scrollytelling o componente:

- Estilos base para `.hero`, `.hero-content`, `.hero-title`, `.hero-subtitle`.
- Keyframes para `fadeInUp`/`fadeInUpScale` (reutilizados).
- Estado `.hero.expanded` para activar la aparición inicial.
- Estado `.hero.scrolled` para reducir escala u aplicar parallax cuando se pase el scroll.
- Media queries para tamaños y posicionamiento móviles.

Ejemplo mínimo:

```css
.hero-title {
  font-size: var(--font-size-4xl);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  animation: fadeInUp 1s ease forwards;
  transition: transform 0.8s ease;
}

.hero.scrolled .hero-title {
  transform: scale(0.9);
}
```

## JavaScript

Funciones necesarias:

1. **Añadir clase `.expanded`** a `.hero` en `DOMContentLoaded` para disparar los efectos de fade/scale.
2. **Escuchar scroll** para:
   - Agregar/remover clase `.scrolled` en el `.hero` según `window.scrollY`.
   - Opcionalmente mover `.hero-content` con ligero parallax (translateY).

Ejemplo:

```js
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero").classList.add("expanded");
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (window.scrollY > 10) hero.classList.add("scrolled");
  else hero.classList.remove("scrolled");
});
```

## Pasos de implementación

1. Verificar si ya existe un bloque hero en `index copy.html`; de lo contrario, insertarlo según la estructura.
2. Añadir estilos y keyframes en `_scrollytelling.css` (o en algún partial adecuado).
3. Extender `main.js` con las funciones descritas.
4. Probar en desktop y mobile: aparición inicial, scroll behaviour y responsiveness.
5. Crear informe de implementación en `docs/`.

Este plan servirá de guía para añadir la hero con animaciones y asegurar una experiencia fluida en todas las plataformas.
