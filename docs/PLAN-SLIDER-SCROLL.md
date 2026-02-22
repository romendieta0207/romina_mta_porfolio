# 📋 PLAN DE IMPLEMENTACIÓN: Work Carousel - Scroll Snap (Estilo Framer)

## 🎯 Objetivo

Reemplazar el grid de tarjetas actual en la sección "Mi Trabajo" (chapter-2) con un **sistema de scroll-snap** que muestre un elemento fullscreen (100vh) por scroll, con animación suave y controlada como Framer Awards.

---

## 📐 Diseño Visual

### Estructura

```
┌─────────────────────────────────────┐
│                                     │
│      WORK CAROUSEL (100vh)          │
│      ┌───────────────────────┐     │
│      │                       │     │
│      │   01 Editorial        │     │
│      │   (Rojo/Rosa #d23f57) │     │
│      │                       │     │
│      └───────────────────────┘     │
│                                     │
│   ◯  ◉  ◯  (Indicadores)          │
│                                     │
│   ↓ Scroll lento y detenido ↓     │
│                                     │
└─────────────────────────────────────┘
```

### Características

- **Ancho**: 100% de la sección
- **Alto**: 100vh (fullscreen)
- **Cantidad de slides**: 3 categorías
- **Scroll**: Snap automático, suave y controlado
- **Colores planos**:
  - Slide 1 (Editorial): `#d23f57` (Rojo/Rosa)
  - Slide 2 (Branding): `#f6bc3f` (Amarillo/Dorado)
  - Slide 3 (Digital): `#679cbc` (Azul)

---

## 🛠️ Tecnología (Stack)

| Componente     | Descripción                                  |
| -------------- | -------------------------------------------- |
| **HTML**       | Estructura de slides con data attributes     |
| **CSS**        | Scroll-snap, fullscreen, estilos, responsive |
| **JavaScript** | Sincronizar indicadores con scroll position  |

---

## 📝 HTML Estructura

```html
<!-- Chapter 2: My Work - Scroll Snap Carousel -->
<section class="story-section chapter-2" id="workSection" data-observe>
  <div class="story-content">
    <h2>Mi Trabajo</h2>
    <p class="text-large mb-lg">
      Me especializo en varias áreas de ilustración:
    </p>

    <!-- Work Carousel - Scroll Snap -->
    <div class="work-carousel" id="workCarousel">
      <!-- Slide 1: Editorial -->
      <div class="work-slide" data-slide="1">
        <div class="work-content">
          <div class="work-number">01</div>
          <h3>Editorial</h3>
          <p>
            Ilustraciones para revistas, libros y publicaciones digitales que
            capturan la esencia de cada historia.
          </p>
        </div>
      </div>

      <!-- Slide 2: Branding -->
      <div class="work-slide" data-slide="2">
        <div class="work-content">
          <div class="work-number">02</div>
          <h3>Branding</h3>
          <p>
            Identidades visuales únicas que ayudan a las marcas a conectar
            emocionalmente con su audiencia.
          </p>
        </div>
      </div>

      <!-- Slide 3: Digital -->
      <div class="work-slide" data-slide="3">
        <div class="work-content">
          <div class="work-number">03</div>
          <h3>Digital</h3>
          <p>
            Arte conceptual y diseño de personajes para videojuegos, animación y
            medios interactivos.
          </p>
        </div>
      </div>
    </div>

    <!-- Progress Indicators -->
    <div class="work-indicators">
      <span class="work-indicator active" data-slide="1"></span>
      <span class="work-indicator" data-slide="2"></span>
      <span class="work-indicator" data-slide="3"></span>
    </div>

    <p class="mt-lg text-center">
      Cada proyecto es una oportunidad para explorar nuevas técnicas y estilos
      visuales.
    </p>
  </div>
</section>
```

---

## 🎨 CSS Estructura

### 1. Contenedor Principal - Scroll Snap

```css
.work-carousel {
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  margin: 3rem 0;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Ocultar scrollbar pero mantener funcionalidad */
.work-carousel::-webkit-scrollbar {
  display: none;
}

.work-carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

### 2. Slide Individual - Fullscreen

```css
.work-slide {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 3rem;
  position: relative;
}

/* Colores específicos */
.work-slide[data-slide="1"] {
  background-color: #d23f57;
}

.work-slide[data-slide="2"] {
  background-color: #f6bc3f;
}

.work-slide[data-slide="3"] {
  background-color: #679cbc;
}
```

### 3. Contenido del Slide

```css
.work-content {
  text-align: center;
  z-index: 2;
  animation: slideInContent 0.8s ease-out;
  max-width: 600px;
}

.work-number {
  font-size: 8rem;
  font-weight: 700;
  opacity: 0.15;
  margin-bottom: 1rem;
  font-family: var(--font-family-heading);
  line-height: 1;
}

.work-content h3 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}

.work-content p {
  font-size: 1.5rem;
  opacity: 0.95;
  color: white;
  line-height: 1.6;
}
```

### 4. Indicadores

```css
.work-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  position: relative;
  z-index: 10;
}

.work-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-border-medium);
  cursor: pointer;
  transition: all 0.3s ease;
}

.work-indicator.active {
  background: var(--color-primary);
  width: 30px;
  border-radius: 6px;
}
```

### 5. Animaciones

```css
@keyframes slideInContent {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### 6. Responsive

```css
@media (max-width: 768px) {
  .work-carousel {
    min-height: 80vh;
    margin: 2rem 0;
  }

  .work-slide {
    height: 80vh;
    padding: 2rem 1rem;
  }

  .work-number {
    font-size: 4rem;
  }

  .work-content h3 {
    font-size: 2rem;
  }

  .work-content p {
    font-size: 1.125rem;
  }

  .work-content {
    max-width: 90%;
  }
}
```

---

## 🚀 JavaScript Funcionalidad

### 1. Sincronizar Indicadores con Scroll

```javascript
const workCarousel = document.getElementById("workCarousel");
const workIndicators = document.querySelectorAll(".work-indicator");

if (workCarousel) {
  // Detectar qué slide está en vista durante el scroll
  workCarousel.addEventListener("scroll", () => {
    const scrollPosition = workCarousel.scrollTop;
    const slideHeight = workCarousel.clientHeight;
    const currentSlideIndex = Math.round(scrollPosition / slideHeight);

    // Actualizar indicadores activos
    workIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlideIndex);
    });
  });
}
```

### 2. Click en Indicadores para Scroll

```javascript
if (workCarousel) {
  workIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      const slideHeight = workCarousel.clientHeight;
      workCarousel.scrollTo({
        top: slideHeight * index,
        behavior: "smooth",
      });
    });
  });
}
```

---

## 🎬 Características CSS

| Propiedad           | Valor         | Efecto                            |
| ------------------- | ------------- | --------------------------------- |
| `scroll-snap-type`  | `y mandatory` | Snap vertical obligatorio         |
| `scroll-snap-align` | `start`       | Alinea al inicio del viewport     |
| `scroll-snap-stop`  | `always`      | Detiene el scroll en cada slide   |
| `scroll-behavior`   | `smooth`      | Scroll suave y controlado         |
| `height`            | `100vh`       | Cada slide ocupa todo el viewport |

---

## 📊 Colores Finales

| Slide | Categoría | Color           | Código    |
| ----- | --------- | --------------- | --------- |
| 1     | Editorial | Rojo/Rosa       | `#d23f57` |
| 2     | Branding  | Amarillo/Dorado | `#f6bc3f` |
| 3     | Digital   | Azul            | `#679cbc` |

---

## ✅ Checklist de Implementación

- [ ] Actualizar HTML en `index copy.html` (section chapter-2)
- [ ] Agregar estilos CSS en `_scrollytelling.css`
- [ ] Implementar lógica JavaScript en `main.js`
- [ ] Probar en desktop (scroll snap, indicadores)
- [ ] Probar en mobile (responsive, scroll)
- [ ] Optimizar performance
- [ ] Validar accesibilidad (ARIA, keyboard)
- [ ] Prueba visual en navegador

---

## 🔄 Ventajas del Scroll-Snap vs Carrusel

| Aspecto           | Scroll-Snap                  | Carrusel Auto     |
| ----------------- | ---------------------------- | ----------------- |
| **Control**       | Usuario controla scroll      | Automático        |
| **Naturalidad**   | Muy natural, como Framer     | Artificial        |
| **Performance**   | Mejor (nativo del navegador) | Requiere JS       |
| **Accesibilidad** | Mejor                        | Más limitada      |
| **Mobile**        | Funciona perfecto            | Puede ser confuso |

---

## 🌟 Diferencias Principales

### Antes (Carrusel Automático):

- Auto-advance cada 5 segundos
- Scroll wheel detecta y cambia slide
- Pausa en hover
- Transición continua

### Ahora (Scroll-Snap Framer):

- **SIN auto-advance** - Solo responde al scroll del usuario
- Scroll magnético (snap) en cada slide
- Scroll suave y controlado
- Indicadores se sincronizan con scroll position
- **Fullscreen (100vh)** - Llena todo el viewport

---

## 📌 Notas Importantes

1. **Scroll-Snap Nativo**: No requiere JavaScript para funcionar, solo para sincronizar indicadores
2. **Cross-browser**: Compatible con todos los navegadores modernos
3. **Fallback**: Si no funciona scroll-snap, el scroll normal sigue funcionando
4. **Mobile-first**: Funciona mejor en móvil que en desktop
5. **Smooth Scrolling**: `scroll-behavior: smooth` hace el scroll controlado

---

## 🎯 Resultado Final

```
Usuario scrollea ↓
    ↓
Freno automático en cada slide (scroll-snap)
    ↓
Indicador se destaca (JavaScript)
    ↓
Puedo hacer click en indicador
    ↓
Smooth scroll a ese slide
```

---

**Versión**: 2.0 (Scroll-Snap)  
**Fecha**: 13/02/2026  
**Estado**: Documentado - Listo para implementación

---

## 📐 Diseño Visual

### Estructura

```
┌─────────────────────────────────────┐
│                                     │
│      CARRUSEL CUADRADO (150w)     │
│      ┌───────────────────────┐     │
│      │                       │     │
│      │   Slide 1: Editorial  │     │
│      │   (Color 1)           │     │
│      │                       │     │
│      └───────────────────────┘     │
│      ▼ (Indicador de scroll)       │
│                                     │
└─────────────────────────────────────┘
```

### Características

- **Ancho**: 150% de la sección
- **Alto**: Auto (cuadrado responsive)
- **Cantidad de slides**: 3 categorías
- **Animación**: Loop infinito por scroll
- **Colores**:
  - Slide 1 (Editorial): `#d23f57` (Rojo/Rosa)
  - Slide 2 (Branding): `#f6bc3f` (Amarillo/Dorado)
  - Slide 3 (Digital): `#679cbc` (Azul)

---

## 🛠️ Tecnología (Stack)

| Componente     | Descripción                                         |
| -------------- | --------------------------------------------------- |
| **HTML**       | Estructura de slides con data attributes            |
| **CSS**        | Grid/Flexbox para carrusel, animaciones, responsive |
| **JavaScript** | Intersection Observer + EventListener para scroll   |

---

## 📝 HTML Estructura

```html
<section class="story-section chapter-2" data-observe>
  <div class="story-content">
    <h2>Mi Trabajo</h2>
    <p class="text-large mb-lg">Me especializo en varias áreas de ilustración:</p>

    <!-- Carrusel Container -->
    <div class="carousel-container">
      <div class="carousel" id="workCarousel">

        <!-- Slide 1: Editorial -->
        <div class="carousel-slide" data-slide="1" style="background-color: #d23f57;">
          <div class="carousel-content">
            <div class="carousel-number">01</div>
            <h3>Ilustración
            <p>Ilustraciones para revistas, libros y publicaciones digitales</p>
          </div>
        </div>

        <!-- Slide 2: Branding -->
        <div class="carousel-slide" data-slide="2" style="background-color: #f6bc3f;">
          <div class="carousel-content">
            <div class="carousel-number">02</div>
            <h3>Branding</h3>
            <p>Identidades visuales únicas para marcas</p>
          </div>
        </div>

        <!-- Slide 3: Digital -->
        <div class="carousel-slide" data-slide="3" style="background-color: #679cbc;">
          <div class="carousel-content">
            <div class="carousel-number">03</div>
            <h3>Eitorial<h3>
            <p>Arte conceptual y diseño de personajes</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Indicadores de navegación -->
    <div class="carousel-indicators">
      <span class="indicator active" data-slide="1"></span>
      <span class="indicator" data-slide="2"></span>
      <span class="indicator" data-slide="3"></span>
    </div>

    <p class="mt-lg">Cada proyecto es una oportunidad para explorar nuevas técnicas.</p>
  </div>
</section>
```

---

## 🎨 CSS Estructura

### 1. Carrusel Container

```css
.carousel-container {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  margin: 3rem 0;
  aspect-ratio: 1 / 1; /* Cuadrado responsive */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

### 2. Carrusel Slides

```css
.carousel {
  display: flex;
  width: 300%; /* 3 slides */
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 3rem;
  position: relative;
}
```

### 3. Contenido del Slide

```css
.carousel-content {
  text-align: center;
  z-index: 2;
  animation: slideInContent 0.8s ease-out;
}

.carousel-number {
  font-size: 5rem;
  font-weight: 700;
  opacity: 0.2;
  margin-bottom: 1rem;
}

.carousel-content h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.carousel-content p {
  font-size: 1.25rem;
  opacity: 0.95;
}
```

### 4. Indicadores

```css
.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-border-medium);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--color-primary);
  width: 30px;
  border-radius: 6px;
}
```

### 5. Responsive

```css
@media (max-width: 768px) {
  .carousel-number {
    font-size: 3rem;
  }

  .carousel-content h3 {
    font-size: 1.75rem;
  }

  .carousel-content p {
    font-size: 1rem;
  }
}
```

---

## 🚀 JavaScript Funcionalidad

### 1. Auto-Scroll Loop

```javascript
let currentSlide = 1;

function nextSlide() {
  currentSlide = (currentSlide % 3) + 1;
  updateCarousel();
}

// Auto-advance cada 5 segundos
setInterval(nextSlide, 5000);
```

### 2. Scroll Detectión (Wheel Event)

```javascript
document.addEventListener("wheel", (e) => {
  const carousel = document.getElementById("workCarousel");
  const rect = carousel.getBoundingClientRect();

  // Si el usuario está scrolleando sobre el carrusel
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    if (e.deltaY > 0) nextSlide();
    else previousSlide();
  }
});
```

### 3. Actualizar Carrusel

```javascript
function updateCarousel() {
  const carousel = document.getElementById("workCarousel");
  const offset = (currentSlide - 1) * -100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Actualizar indicadores
  document.querySelectorAll(".indicator").forEach((ind, idx) => {
    ind.classList.toggle("active", idx === currentSlide - 1);
  });
}
```

### 4. Click en Indicadores

```javascript
document.querySelectorAll(".indicator").forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    currentSlide = parseInt(e.target.dataset.slide);
    updateCarousel();
  });
});
```

---

## 🎬 Animaciones

### Entrada de Contenido

```css
@keyframes slideInContent {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Transición Suave del Carrusel

```css
.carousel {
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 📊 Colores Finales

| Slide | Categoría | Color           | Código    |
| ----- | --------- | --------------- | --------- |
| 1     | Editorial | Rojo/Rosa       | `#d23f57` |
| 2     | Branding  | Amarillo/Dorado | `#f6bc3f` |
| 3     | Digital   | Azul            | `#679cbc` |

---

## ✅ Checklist de Implementación

- [ ] Actualizar HTML en `index copy.html` (section chapter-2)
- [ ] Agregar estilos CSS en `_scrollytelling.css`
- [ ] Implementar lógica JavaScript en `main.js`
- [ ] Probar en desktop (animación, scroll, indicadores)
- [ ] Probar en mobile (responsive, touch)
- [ ] Optimizar performance (Intersection Observer)
- [ ] Validar accesibilidad (ARIA, keyboard navigation)

---

## 🔄 Mejoras Futuras

- [ ] Touch swipe en mobile
- [ ] Keyboard navigation (arrow keys)
- [ ] Autoplay pause en hover
- [ ] Preload de imágenes si agregamos fotos
- [ ] Analytics de slides visto

---

## 📚 Referencia Visual

```
Antes (Grid 3 columnas):
┌─────────┬─────────┬─────────┐
│   01    │   02    │   03    │
│Editorial│Branding │ Digital │
└─────────┴─────────┴─────────┘

Después (Carrusel Scroll):
┌─────────────────────────────┐
│                             │
│    ┌─────────────────┐      │
│    │  01 Editorial   │      │ ← Cuadrado responsive
│    │ (Rojo/Rosa)     │      │
│    └─────────────────┘      │
│                             │
│  ◯  ◉  ◯  (Indicadores)     │
│                             │
└─────────────────────────────┘
```

---

## 📌 Notas Importantes

1. **Aspecto Cuadrado**: Usar `aspect-ratio: 1 / 1` para mantener proporción
2. **Loop Infinito**: Auto-advance cada 5 segundos
3. **Scroll Smart**: Detectar scroll solo cuando el carrusel está en viewport
4. **Performance**: Usar `will-change: transform` para animaciones suaves
5. **Accesibilidad**: Agregar atributos ARIA y tabindex

---

**Versión**: 1.0  
**Fecha**: 13/02/2026  
**Estado**: Listo para implementación
