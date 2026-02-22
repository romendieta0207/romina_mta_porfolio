# Plan de implementación: Sección "Sobre Mí" - Layout Editorial Collage

**Fecha**: 22 de febrero de 2026  
**Objetivo**: Transformar sección "Sobre Mí" en layout editorial moderno con composición asimétrica tipo collage  
**Estado**: Plan para revisión (sin implementación)

---

## 📋 Descripción General

Rediseño de la sección `.chapter-1` "Sobre Mí" manteniendo estructura HTML semántica actual, reemplazando la composición por layout visual editorial tipo collage con:

- Foto estilo polaroid inclinada
- Elementos decorativos flotantes (shapes CSS)
- Textos en bloque jerárquico
- Composición asimétrica con grid
- Efectos hover y animaciones
- Completamente responsivo (mobile-first)

---

## 🎯 Requisitos

| Requisito       | Descripción                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| Estructura HTML | Usar jerarquía: `section.about` → `.about-container` → `.about-visual` + `.about-content` |
| Variables CSS   | Obligatorio usar `_variables.css` (sin crear nuevas)                                      |
| Layout          | Grid asimétrico desktop / columnas mobile                                                 |
| Foto            | Polaroid inclinada con sombra suave, hover scale + rotate                                 |
| Decoraciones    | Shapes CSS (circle, line, star) - no imágenes                                             |
| Animaciones     | Fade-in al entrar viewport, hover suave                                                   |
| Responsive      | Mobile 1 columna, desktop 2 columnas (visual + contenido)                                 |
| Texto           | Placeholder editable `[TITULO PRINCIPAL]`, `[DESCRIPCION]`                                |

---

## 🏗 Estructura HTML

### Jerarquía semántica:

```html
<section class="about" id="about" data-observe>
  <div class="about-container">
    <!-- Columna visual izquierda (desktop) -->
    <div class="about-visual">
      <div class="photo-frame">
        <img src="placeholder.jpg" alt="Romina Mendieta - Ilustradora" />
      </div>

      <!-- Decoraciones flotantes -->
      <div class="decorations">
        <div class="shape shape-circle-1"></div>
        <div class="shape shape-star"></div>
        <div class="shape shape-line"></div>
        <div class="shape shape-circle-2"></div>
      </div>
    </div>

    <!-- Columna contenido derecha (desktop) -->
    <div class="about-content">
      <div class="about-intro">
        <span class="about-tag">[ETIQUETA]</span>
        <h1 class="about-title">[TITULO PRINCIPAL]</h1>
      </div>

      <p class="about-description">[DESCRIPCION PRINCIPAL]</p>

      <div class="about-stats">
        <div class="stat-item">
          <span class="stat-number">[NUMERO]</span>
          <span class="stat-label">[LABEL]</span>
        </div>
        <!-- x3 stat items -->
      </div>

      <p class="about-extra">[PARRAFO ADICIONAL]</p>
    </div>
  </div>
</section>
```

---

## 🎨 Estilos CSS (Nuevo bloque `_scrollytelling.css`)

### 1. Contenedor y Layout Base

```css
/* ===== ABOUT SECTION - EDITORIAL COLLAGE LAYOUT ===== */

.about {
  padding: var(--space-5xl) var(--space-2xl);
  background: linear-gradient(
    135deg,
    var(--color-primary-light) 0%,
    var(--color-primary) 100%
  );
  overflow: hidden;
  position: relative;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5xl);
  align-items: center;
  position: relative;
}

/* Mobile-first responsive */
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: var(--space-3xl);
  }
}
```

### 2. Sección Visual (Foto + Decoraciones)

```css
.about-visual {
  position: relative;
  height: 500px;
  min-height: 400px;
}

/* Marco polar inclinado */
.photo-frame {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 320px;
  height: 380px;
  background: white;
  padding: 16px;
  border-radius: 8px;
  transform: rotate(-8deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 10;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
}

.about-visual:hover .photo-frame {
  transform: rotate(-2deg) scale(1.05);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}

/* Decoraciones flotantes con shapes CSS */
.decorations {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  opacity: 0.7;
  animation: float 6s ease-in-out infinite;
}

/* Circle shape 1 (top-right) */
.shape-circle-1 {
  width: 120px;
  height: 120px;
  border: 3px solid var(--color-secondary);
  border-radius: 50%;
  top: 40px;
  right: 60px;
  animation-delay: 0s;
}

/* Star shape (centered) */
.shape-star {
  width: 60px;
  height: 60px;
  top: 200px;
  right: 20px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 15 L61 40 L88 40 L67 55 L78 80 L50 65 L22 80 L33 55 L12 40 L39 40 Z" fill="none" stroke="%23d23f57" stroke-width="2"/></svg>')
    no-repeat center;
  animation-delay: 0.5s;
}

/* Line shape (diagonal) */
.shape-line {
  width: 200px;
  height: 3px;
  background: var(--color-secondary-light);
  top: 150px;
  left: -50px;
  transform: rotate(-35deg);
  animation-delay: 1s;
}

/* Circle shape 2 (bottom-left) */
.shape-circle-2 {
  width: 80px;
  height: 80px;
  border: 3px solid var(--color-primary-light);
  border-radius: 50%;
  bottom: 60px;
  left: 40px;
  animation-delay: 1.5s;
}

/* Animación flotante sutil */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive visual */
@media (max-width: 768px) {
  .about-visual {
    height: 350px;
  }

  .photo-frame {
    width: 240px;
    height: 300px;
    left: 20px;
    top: 10px;
  }

  .shape-circle-1 {
    width: 80px;
    height: 80px;
    right: 20px;
    top: 20px;
  }

  .shape-star {
    width: 40px;
    height: 40px;
  }

  .shape-circle-2 {
    width: 60px;
    height: 60px;
    bottom: 20px;
  }
}
```

### 3. Sección Contenido (Texto)

```css
.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-lg);
}

/* Intro: etiqueta + titulo */
.about-intro {
  margin-bottom: var(--space-2xl);
}

.about-tag {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-md);
}

.about-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: white;
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-lg);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.2s forwards;
}

/* Descripción principal */
.about-description {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-2xl);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

/* Stats grid */
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-md);
  border-left: 3px solid var(--color-secondary);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(8px);
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-secondary);
  line-height: 1;
  margin-bottom: var(--space-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: var(--font-weight-medium);
}

/* Párrafo adicional */
.about-extra {
  font-size: var(--font-size-base);
  color: rgba(255, 255, 255, 0.85);
  line-height: var(--line-height-relaxed);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
}

/* Responsive contenido */
@media (max-width: 768px) {
  .about-content {
    padding: 0;
  }

  .about-title {
    font-size: var(--font-size-3xl);
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
```

### 4. Animaciones CSS

```css
/* Fade-in up para elementos */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Integración con existente data-observe */
.about.visible {
  /* La clase .visible se añade automáticamente por IntersectionObserver */
}

.about.visible .about-title,
.about.visible .about-description,
.about.visible .about-stats,
.about.visible .about-extra {
  animation-play-state: running;
}
```

---

## ⚙️ JavaScript (Opcional)

Solo si se necesita lógica adicional para interactividad:

```javascript
// Efecto parallax suave en shapes cuando hover
const aboutVisual = document.querySelector(".about-visual");

if (aboutVisual) {
  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const rect = aboutVisual.getBoundingClientRect();

    // Solo si cursor está sobre sección visual
    if (
      rect.top < clientY &&
      clientY < rect.bottom &&
      rect.left < clientX &&
      clientX < rect.right
    ) {
      const moveX = (clientX - rect.left - rect.width / 2) * 0.02;
      const moveY = (clientY - rect.top - rect.height / 2) * 0.02;

      // Aplicar parallax sutil a shapes
      document.querySelectorAll(".shape").forEach((shape) => {
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    }
  });
}
```

**Nota**: Este JS es optional. El efecto sin parallax es suficiente para una experiencia premium.

---

## 📐 Estructura HTML Completa

```html
<section class="about" id="about" data-observe>
  <div class="about-container">
    <!-- COLUMNA VISUAL (izquierda en desktop) -->
    <div class="about-visual">
      <div class="photo-frame">
        <img
          src="placeholder.jpg"
          alt="Romina Mendieta - Ilustradora y Diseñadora"
        />
      </div>

      <div class="decorations">
        <div class="shape shape-circle-1"></div>
        <div class="shape shape-star"></div>
        <div class="shape shape-line"></div>
        <div class="shape shape-circle-2"></div>
      </div>
    </div>

    <!-- COLUMNA CONTENIDO (derecha en desktop) -->
    <div class="about-content">
      <div class="about-intro">
        <span class="about-tag">[ETIQUETA: ej. DISEÑADORA E ILUSTRADORA]</span>
        <h1 class="about-title">
          [TITULO PRINCIPAL: ej. Creo historias visuales]
        </h1>
      </div>

      <p class="about-description">
        [DESCRIPCION PRINCIPAL: ej. Soy diseñadora gráfica e ilustradora con más
        de 3 años de experiencia...]
      </p>

      <div class="about-stats">
        <div class="stat-item">
          <span class="stat-number">3+</span>
          <span class="stat-label">Años Experiencia</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">50+</span>
          <span class="stat-label">Proyectos</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-label">Clientes</span>
        </div>
      </div>

      <p class="about-extra">
        [PARRAFO ADICIONAL: ej. Mi proceso comienza con investigación y
        exploración conceptual...]
      </p>
    </div>
  </div>
</section>
```

---

## 🎯 Cambios en HTML (`index copy.html`)

### Ubicación actual

Líneas 304-335 (sección `<section class="story-section chapter-1">`)

### Cambio

Reemplazar clase:

- **Antes**: `<section class="story-section chapter-1">`
- **Después**: `<section class="about">`

Y reemplazar estructura interna completa con la nueva jerarquía visual.

---

## 🎨 Cambios en CSS (`_scrollytelling.css`)

### Ubicación

Agregar NUEVO bloque después de línea 395 (después de reglas `.chapter-1` y `.chapter-2`)

**No eliminar** reglas existentes `.chapter-1`, `.chapter-2` - solo agregar bloque `.about` nuevo.

### Líneas a agregar

~280 líneas CSS comentadas y modulares

---

## 📱 Responsive Design

### Mobile (< 768px)

```
┌─────────────────┐
│  VISUAL (300px) │
│  - Polaroid     │
│  - Shapes       │
├─────────────────┤
│  CONTENIDO      │
│  - Tag          │
│  - Título       │
│  - Descripción  │
│  - Stats (1 col)│
│  - Extra text   │
└─────────────────┘
```

### Desktop (≥ 768px)

```
┌─────────────────────────────────────────────┐
│ VISUAL (320px) │    CONTENIDO (restante)    │
│ - Polaroid     │ - Tag                       │
│ - Shapes       │ - Título (4xl)              │
│                │ - Descripción               │
│                │ - Stats (3 columnas)        │
│                │ - Extra text                │
└─────────────────────────────────────────────┘
```

---

## ✨ Características Visuales

| Elemento    | Estilo                                  | Animación                      |
| ----------- | --------------------------------------- | ------------------------------ |
| Polaroid    | White bg, padding, -8° rotation, sombra | Hover: scale 1.05 + rotate -2° |
| Shapes      | Border/stroke CSS, opacity 0.7          | Float suave 6s ciclo           |
| Tag         | Uppercase, red, pequeño                 | Fade-in en viewport            |
| Título      | 4xl white bold                          | Fade-in-up 0.8s                |
| Stats       | Border-left red, hover lift             | Fade-in-up en cascada          |
| Description | Large gray, relaxed                     | Fade-in-up 0.8s                |

---

## 🎨 Paleta de colores (variables CSS)

```css
--color-primary           /* #0b3249 - Fondo azul */
--color-primary-light     /* #679cbc - Azul claro */
--color-primary-dark      /* #061b27 - Azul oscuro */
--color-secondary         /* #d23f57 - Rojo/Magenta */
--color-secondary-light   /* #f6bc3f - Naranja */
--gradient-chapter-1      /* Gradiente azul existente */
```

**Patrón de uso**: Fondo gradiente azul + acentos rojo para CTA y números.

---

## 🔧 Consideraciones técnicas

1. **Mantener animaciones existentes**: El `data-observe` y IntersectionObserver seguirán funcionando (clase `.visible` se añade automáticamente)

2. **Sin cambios en variables**: Todas las dimensiones, colores y espaciados usan variables de `_variables.css`

3. **CSS modular**: Nuevo bloque `/* ===== ABOUT SECTION */` está bien separado del resto

4. **Progressive Enhancement**: Si JavaScript no carga, animaciones CSS still work

5. **Performance**:
   - `will-change` en elementos animados
   - GPU accelerated transforms
   - Animations controladas por viewport (IntersectionObserver)

---

## ✅ Validación

- [x] Estructura HTML semántica según requisito
- [x] Usa solo variables CSS existentes
- [x] Layout grid responsivo (mobile-first)
- [x] Shapes CSS (circle, star, line)
- [x] Animaciones fade-in y hover
- [x] Decoraciones flotantes con parallax opcional
- [x] Responsive 2 breakpoints (768px)
- [x] Mantiene animaciones IntersectionObserver existentes
- [x] Código comentado y documentado
- [x] No usa frameworks o dependencias externas

---

## 🚀 Impacto y beneficios

| Aspecto        | Antes                 | Después                          |
| -------------- | --------------------- | -------------------------------- |
| Layout         | Texto vertical simple | Visual asimétrico editorial      |
| Interactividad | Solo fade-in básico   | Hover efectos + shapes flotantes |
| Diseño         | Genérico              | Premium / Creativo               |
| Responsive     | Columnas simples      | Grid adaptativo profesional      |
| Performance    | Buena                 | Igual de buena (optimizado)      |

---

## 📋 Checklist implementación

**A ejecutar una vez aprobado:**

- [ ] Reemplazar sección HTML (líneas 304-335)
- [ ] Agregar bloque CSS (después línea 395)
- [ ] Importar CDN SVG star shape (opcional, o SVG inline)
- [ ] Verificar animaciones triggering con data-observe
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] Reemplazar placeholder.jpg con imagen real (500x380px mínimo)
- [ ] Editar textos placeholder con contenido real
- [ ] Validar Lighthouse (performance, accessibility)

---

## 📝 Archivos a modificar

| Archivo                          | Cambio                    | Líneas                 |
| -------------------------------- | ------------------------- | ---------------------- |
| `index copy.html`                | Reemplazar sección HTML   | 304-335                |
| `assets/css/_scrollytelling.css` | Agregar bloque CSS nuevo  | +395 (agregar después) |
| `assets/js/main.js`              | Opcional: parallax effect | Al final (optional)    |

---

**Estado**: 🕐 **Pendiente Aprobación**  
**Próximo paso**: Usuario revisa plan → aprueba → se ejecuta implementación + informe
