# Plan de implementación: Sección Proyectos con Scroll Horizontal (GSAP ScrollTrigger)

Este documento describe cómo implementar un carrusel de proyectos premium con scroll horizontal animado usando GSAP ScrollTrigger. El código está listo para copiar y pegar.

---

## 📋 Requisitos técnicos

- **Desplazamiento horizontal** controlado por scroll vertical.
- **Pin (fijo)** del contenedor mientras ocurre la animación.
- **Movimiento suave** de tarjetas de derecha a izquierda.
- **Proporcional** al contenido (cantidad de tarjetas).
- **Responsive** en todos los dispositivos.
- **GSAP ScrollTrigger** para animación fluida.
- **Sin frameworks**, solo Vanilla JS.
- **Rendimiento optimizado** sin jank.

---

## 🏗 Estructura HTML

```html
<!-- Section Proyectos con Scroll Horizontal -->
<section class="proyectos-horizontal" id="proyectos-horizontal" data-observe>
  <div class="proyectos-wrapper">
    <h2 class="proyectos-title">Mis Proyectos</h2>

    <!-- Contenedor que hace scroll horizontal -->
    <div class="proyectos-track">
      <!-- Tarjeta 1 -->
      <article class="proyecto-card">
        <div
          class="proyecto-image"
          style="background-image: url('https://via.placeholder.com/500x400?text=Proyecto+1');"
        >
          <div class="proyecto-overlay">
            <button class="btn-view">Ver proyecto</button>
          </div>
        </div>
        <h3 class="proyecto-title">Proyecto Uno</h3>
        <p class="proyecto-subtitle">Branding y Diseño</p>
      </article>

      <!-- Tarjeta 2 -->
      <article class="proyecto-card">
        <div
          class="proyecto-image"
          style="background-image: url('https://via.placeholder.com/500x400?text=Proyecto+2');"
        >
          <div class="proyecto-overlay">
            <button class="btn-view">Ver proyecto</button>
          </div>
        </div>
        <h3 class="proyecto-title">Proyecto Dos</h3>
        <p class="proyecto-subtitle">Ilustración Editorial</p>
      </article>

      <!-- Tarjeta 3 -->
      <article class="proyecto-card">
        <div
          class="proyecto-image"
          style="background-image: url('https://via.placeholder.com/500x400?text=Proyecto+3');"
        >
          <div class="proyecto-overlay">
            <button class="btn-view">Ver proyecto</button>
          </div>
        </div>
        <h3 class="proyecto-title">Proyecto Tres</h3>
        <p class="proyecto-subtitle">Digital & Motion</p>
      </article>

      <!-- Tarjeta 4 -->
      <article class="proyecto-card">
        <div
          class="proyecto-image"
          style="background-image: url('https://via.placeholder.com/500x400?text=Proyecto+4');"
        >
          <div class="proyecto-overlay">
            <button class="btn-view">Ver proyecto</button>
          </div>
        </div>
        <h3 class="proyecto-title">Proyecto Cuatro</h3>
        <p class="proyecto-subtitle">Social Media</p>
      </article>

      <!-- Tarjeta 5 -->
      <article class="proyecto-card">
        <div
          class="proyecto-image"
          style="background-image: url('https://via.placeholder.com/500x400?text=Proyecto+5');"
        >
          <div class="proyecto-overlay">
            <button class="btn-view">Ver proyecto</button>
          </div>
        </div>
        <h3 class="proyecto-title">Proyecto Cinco</h3>
        <p class="proyecto-subtitle">Estrategia Visual</p>
      </article>
    </div>

    <!-- Indicador de scroll horizontal (opcional) -->
    <div class="proyectos-progress">
      <div class="progress-bar"></div>
    </div>
  </div>
</section>
```

**Notas estructura:**

- `.proyectos-horizontal`: contenedor de la sección.
- `.proyectos-wrapper`: será el elemento que se fija (pin).
- `.proyectos-track`: contenedor que hace scroll horizontal.
- `.proyecto-card`: tarjetas individuales.
- Agregar más tarjetas según necesidad.

---

## 🎨 CSS

Agregar a `assets/css/_scrollytelling.css`:

```css
/* ===== PROYECTOS HORIZONTAL SCROLL ===== */

.proyectos-horizontal {
  padding: var(--space-4xl) 0;
  overflow: hidden;
}

.proyectos-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
}

.proyectos-title {
  font-size: var(--font-size-4xl);
  color: white;
  padding: var(--space-4xl) var(--space-2xl) var(--space-2xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
}

/* Track: contenedor que hace scroll horizontal */
.proyectos-track {
  display: flex;
  gap: var(--space-lg);
  padding: 0 var(--space-2xl) var(--space-4xl);
  will-change: transform;
}

/* Tarjeta de proyecto */
.proyecto-card {
  flex-shrink: 0;
  width: 500px;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  opacity: 0;
  transform: translateY(50px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.proyecto-card.animated {
  animation: fadeInUp 0.8s ease-out forwards;
}

.proyecto-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.proyecto-card:hover .proyecto-image {
  transform: scale(1.05);
}

.proyecto-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.proyecto-card:hover .proyecto-overlay {
  opacity: 1;
}

.btn-view {
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-secondary);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.btn-view:hover {
  transform: scale(1.1);
}

.proyecto-title {
  position: absolute;
  bottom: 60px;
  left: 20px;
  right: 20px;
  font-size: var(--font-size-2xl);
  color: white;
  font-weight: var(--font-weight-bold);
  z-index: 2;
}

.proyecto-subtitle {
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 20px;
  font-size: var(--font-size-base);
  color: var(--color-secondary-light);
  font-weight: var(--font-weight-medium);
  z-index: 2;
}

/* Progress bar (opcional) */
.proyectos-progress {
  position: absolute;
  bottom: 20px;
  left: var(--space-2xl);
  right: var(--space-2xl);
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: var(--color-secondary);
  width: 0%;
  will-change: width;
}

/* Responsive: width de tarjeta ajustable */
@media (max-width: 1200px) {
  .proyecto-card {
    width: 400px;
    height: 320px;
  }
}

@media (max-width: 768px) {
  .proyectos-wrapper {
    height: auto;
  }

  .proyectos-track {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .proyecto-card {
    width: 300px;
    height: 240px;
    scroll-snap-align: center;
  }

  .proyecto-title {
    font-size: var(--font-size-lg);
    bottom: 50px;
  }

  .proyecto-subtitle {
    font-size: var(--font-size-sm);
    bottom: 25px;
  }
}

/* Animación de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## ⚙️ JavaScript

### 1. Importar GSAP (añadir en HTML antes de `</body>`):

```html
<!-- GSAP y ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

### 2. Script de animación (agregar a `assets/js/main.js`):

```javascript
// ===== HORIZONTAL SCROLL PROYECTOS (GSAP ScrollTrigger) =====

// Registrar ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Ejecutar cuando el DOM esté listo
window.addEventListener("DOMContentLoaded", () => {
  const proyectos = document.querySelector(".proyectos-horizontal");

  if (!proyectos) return; // Salir si no existe la sección

  const proyectosWrapper = document.querySelector(".proyectos-wrapper");
  const proyectosTrack = document.querySelector(".proyectos-track");
  const projectCards = document.querySelectorAll(".proyecto-card");
  const progressBar = document.querySelector(".progress-bar");

  // Calcular el ancho total del scroll horizontal
  const trackWidth = proyectosTrack.scrollWidth - proyectosTrack.clientWidth;

  // Animar entrada de tarjetas
  projectCards.forEach((card, index) => {
    card.classList.add("animated");
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Animación principal: scroll horizontal con ScrollTrigger
  gsap.to(proyectosTrack, {
    x: -trackWidth,
    duration: 1,
    scrollTrigger: {
      trigger: proyectosWrapper,
      start: "top top",
      end: `+=${trackWidth + window.innerHeight}`,
      scrub: 1, // 1 = más suave, 0.5 = más rápido
      pin: true,
      markers: false, // Cambiar a true para ver marcadores de debug
      onUpdate: (self) => {
        // Actualizar barra de progreso
        if (progressBar) {
          progressBar.style.width = `${self.getVelocity() * 0.1 + self.progress * 100}%`;
        }
      },
    },
    ease: "none", // Sin easing para scroll suave
  });

  // Efecto hover suave en tarjetas
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        overwrite: "auto",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        overwrite: "auto",
      });
    });
  });
});
```

---

## 🚀 Instrucciones de integración

1. **Copiar HTML** en `index copy.html` (reemplazar o añadir antes de final de `<main>`).
2. **Copiar CSS** en `assets/css/_scrollytelling.css`.
3. **Copiar CDN de GSAP** en `index copy.html` antes de `</body>`.
4. **Copiar JS** en `assets/js/main.js`.
5. **Probar** en desktop y mobile.
6. **Ajustar** dimensiones de tarjetas según necesidad (ancho/alto).

---

## ⚡ Notas de rendimiento

- `will-change: transform` en `.proyectos-track` para optimizar GPU.
- `scroll-snap-type` en mobile para mejor UX.
- `cubic-bezier` para animaciones suaves sin jank.
- `scrub: 1` para sincronización suave con scroll (ajustar de 0.5 a 2).
- `ease: none` obliga a GSAP a seguir el scroll exactamente.

---

## 🎯 Personalización

**Cambiar ancho de tarjeta:**

```css
.proyecto-card {
  width: 400px; /* Cambiar este valor */
}
```

**Cambiar velocidad de scroll:**

```javascript
scrub: 1, // 1 = normal, 0.5 = más rápido, 2 = más lento
```

**Cambiar altura del contenedor:**

```css
.proyectos-wrapper {
  height: 100vh; /* Cambiar según necesidad */
}
```

---

## ✨ Características diferenciales

✅ Premium scroll experience  
✅ Completamente responsivo  
✅ Rendimiento optimizado  
✅ Comentado y documentado  
✅ Listo para copiar y pegar  
✅ Sin dependencias externas (solo GSAP CDN)  
✅ Compatible con navegadores modernos

---

**Estado**: Plan listo para revisión. No se implementará hasta obtener aprobación.
