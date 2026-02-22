# Plan de implementación del header

Este documento describe el plan para crear un header inspirado en https://spicyagenciacreativa.com/ e integrarlo en el proyecto.

## Objetivos

- Logo visible y enlace a la home
- Menú de navegación con enlaces a las secciones principales
- Cabecera sticky con efecto de scroll suave
- Botón hamburguesa para móviles
- Destacar el enlace correspondiente a la sección visible en el viewport
- Respetar los tokens y estilos definidos en `assets/css/theme.css`

## Estructura HTML

```html
<header class="site-header">
  <div class="container header-content">
    <a href="#hero" class="logo">ROMINA&nbsp;MENDIETA</a>
    <button class="nav-toggle" aria-expanded="false" aria-label="Abrir menú">
      <span class="hamburger"></span>
    </button>
    <nav id="primary-nav" class="primary-nav">
      <ul>
        <li><a href="#hero" class="nav-link">Inicio</a></li>
        <li><a href="#servicios" class="nav-link">Servicios</a></li>
        <li><a href="#clientes" class="nav-link">Clientes</a></li>
        <li><a href="#proyectos" class="nav-link">Proyectos</a></li>
        <li><a href="#contacto" class="nav-link">Contacto</a></li>
      </ul>
    </nav>
  </div>
</header>
```

- `header.site-header` será sticky y utilizará `backdrop-filter` para efecto glassmorphism.
- El `button.nav-toggle` se mostrará únicamente en pantallas pequeñas.
- Los enlaces llevan la clase `nav-link` para aplicar estilos de resalte.

## CSS

Se añadirá al módulo existente (`_components.css`) estilos adicionales:

- `.nav-toggle` y `.hamburger`: estilos y animación de apertura.
- Reglas `@media` para esconder/mostrar el menú y el toggle.
- Transiciones suaves, colores desde variables de `theme.css`.
- Clase `.primary-nav.open` para mostrar menú móvil.

## JavaScript

Agregar lógica en `assets/js/main.js`:

1. Manejar clic en `.nav-toggle` para alternar `aria-expanded` y la clase `.open` en el `nav`.
2. Usar `IntersectionObserver` o scroll event para detectar la sección en viewport y añadir/remover la clase `active` en `.nav-link` correspondiente.

## Interacciones

- Scroll suave (ya se aplica global: `html { scroll-behavior: smooth; }`).
- Menú colapsable en mobile.
- Enlaces se resaltan cuando la sección asociada está mayormente visible.

## Flujo de trabajo

1. Crear estructuras HTML en `index copy.html` justo antes de `.hero`.
2. Ajustar CSS en `_components.css` añadiendo nuevas reglas y media queries.
3. Extender JS en `main.js` con las dos funcionalidades descritas.
4. Probar en desktop y móvil, verificar sticky, resaltado y toggle.
5. Documentar cambios brevemente en `docs/INFORME-IMPLEMENTACION.md` (añadir sección).

Este plan servirá como guía paso a paso para implementar el header designado.
