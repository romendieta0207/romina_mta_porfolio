# 📋 PLAN DE IMPLEMENTACIÓN: Páginas Individuales de Proyectos

**Fecha**: 27 de febrero, 2026  
**Objetivo**: Crear 6 páginas HTML individuales para proyectos con navegación interna y reutilización de componentes  
**Status**: En Desarrollo

---

## 📊 RESUMEN EJECUTIVO

Se implementarán 6 páginas de proyecto (`proyecto-01.html` a `proyecto-06.html`) que mantienen la identidad visual del portfolio mediante:

- ✅ Reutilización de header y footer del index
- ✅ CSS global compartido (no duplicación)
- ✅ Estructura template base consistente
- ✅ Navegación prev/next entre proyectos
- ✅ Diseño responsive
- ✅ Contenido modulable (cliente, canales, resultados, video)

---

## 📁 ESTRUCTURA DE CARPETAS PROPUESTA

```
romina_mta_porfolio/
├── index copy.html (índice principal)
├── proyectos/                    ← NUEVA CARPETA
│   ├── proyecto-01.html         (Spot Moritz)
│   ├── proyecto-02.html         (Marca Bar Restaurante)
│   ├── proyecto-03.html         (Casa Editorial)
│   ├── proyecto-04.html         (Social Media)
│   ├── proyecto-05.html         (Personajes y Comics)
│   └── proyecto-06.html         (Nuevo Proyecto)
│
├── assets/
│   ├── css/
│   │   ├── style.css           (compartido)
│   │   ├── _proyecto.css       ← NUEVO (estilos proyecto)
│   │   └── ... (otros)
│   ├── js/
│   │   ├── main.js             (compartido)
│   │   └── proyecto.js         ← NUEVO (lógica proyecto)
│   └── images/
│       └── proyectos/          (imágenes de proyectos)
```

**Ventaja:** Carpeta `/proyectos` agrupa todas las páginas, facilitando actualización y SEO.

---

## 🎨 ESTRUCTURA INTERNA DE CADA PÁGINA DE PROYECTO

Cada página debe contener (en orden):

### 1. **HEAD**

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="[Descripción del proyecto]" />
<title>[Título] - Romina Mendieta</title>
<link rel="stylesheet" href="../assets/css/style.css" />
<link rel="stylesheet" href="../assets/css/_proyecto.css" />
```

### 2. **HEADER** (REUTILIZADO DEL INDEX)

Mismo código del header del index.html ampliado

### 3. **HERO SECTION**

```html
<section class="proyecto-hero">
  <div class="proyecto-hero-content">
    <h1 class="proyecto-hero-title">Título en Amarillo</h1>
    <p class="proyecto-hero-description">Descripción breve del proyecto</p>
  </div>
</section>
```

### 4. **CONTENIDO PRINCIPAL CON SIDEBAR**

```html
<main class="proyecto-main">
  <div class="proyecto-container">
    <!-- COLUMNA PRINCIPAL -->
    <article class="proyecto-content">[Descripción extendida]</article>

    <!-- SIDEBAR (INFORMACIÓN CLAVE) -->
    <aside class="proyecto-sidebar">
      <div class="proyecto-info-box">
        <h4>Cliente</h4>
        <p>[Nombre cliente]</p>
      </div>
      <div class="proyecto-info-box">
        <h4>Canales</h4>
        <ul>
          <li>Redes Sociales</li>
          <li>Digital</li>
        </ul>
      </div>
      <div class="proyecto-info-box">
        <h4>Resultados</h4>
        <ul>
          <li>+150% engagement</li>
          <li>5.2k seguidores</li>
        </ul>
      </div>
    </aside>
  </div>
</main>
```

### 5. **SECCIÓN DE VIDEO**

```html
<section class="proyecto-video">
  <div class="video-container">
    <iframe
      width="100%"
      height="600"
      src="https://www.youtube.com/embed/[VIDEO_ID]"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</section>
```

### 6. **NAVEGACIÓN PREV/NEXT**

```html
<nav class="proyecto-navigation">
  <a href="proyecto-05.html" class="nav-prev">← Proyecto Anterior</a>
  <a href="index.html" class="nav-home">Volver a Proyectos</a>
  <a href="proyecto-02.html" class="nav-next">Próximo Proyecto →</a>
</nav>
```

### 7. **FOOTER** (REUTILIZADO)

Mismo footer del index.html

---

## 📊 MATRIZ DE PROYECTOS

| #   | Título                | Categoría                   | Imagen                          | Cliente             | Canales           | Video          |
| --- | --------------------- | --------------------------- | ------------------------------- | ------------------- | ----------------- | -------------- |
| 01  | Spot Moritz           | Animación y Motion Graphics | `escenario-barra_moritz.jpg`    | Moritz              | TV, Digital       | `[ID_VIDEO]`   |
| 02  | Marca Bar Restaurante | Branding e Identidad Visual | `A4_Brochure_cielo morlaco.jpg` | Cielo Morlaco       | Impreso, Digital  | `[ID_VIDEO]`   |
| 03  | Casa Editorial        | Editorial                   | `INTRO-EDITORIAL.jpg`           | [Cliente Editorial] | Publicación       | `[ID_VIDEO]`   |
| 04  | Diseño de Contenidos  | Social Media                | `ALVA?updatedAt=...`            | ALVA                | Instagram, TikTok | `[ID_VIDEO]`   |
| 05  | Personajes y Comics   | Comics y Narrativa Visual   | `COMIC.png`                     | [Cliente Comics]    | Publicación       | `[ID_VIDEO]`   |
| 06  | **[NUEVO]**           | **[Categoría Nueva]**       | **placeholder.jpg**             | **[Cliente Nuevo]** | **[Canales]**     | **[ID_VIDEO]** |

---

## 🔗 CAMBIOS AL INDEX

### Actualizar sección `<proyectos-track>` para agregar linkeo:

**ANTES:**

```html
<article class="proyecto-card">
  <div class="proyecto-image">...</div>
  <h6 class="proyecto-title">Spot Moritz</h6>
  <p class="proyecto-subtitle">Animación y motion graphics</p>
</article>
```

**DESPUÉS (con enlace):**

```html
<a href="proyectos/proyecto-01.html" class="proyecto-card-link">
  <article class="proyecto-card">
    <div class="proyecto-image">...</div>
    <h6 class="proyecto-title">Spot Moritz</h6>
    <p class="proyecto-subtitle">Animación y motion graphics</p>
  </article>
</a>
```

### Agregar Proyecto 6:

```html
<a href="proyectos/proyecto-06.html" class="proyecto-card-link">
  <article class="proyecto-card">
    <div
      class="proyecto-image"
      style="background-image: url(https://ik.imagekit.io/romendieta0207/projects/placeholder.jpg);"
    >
      <div class="proyecto-overlay">
        <button class="btn-view">Ver proyecto</button>
      </div>
    </div>
    <h4 class="proyecto-title">[Nuevo Proyecto]</h4>
    <p class="proyecto-subtitle">[Categoría]</p>
  </article>
</a>
```

---

## 🎯 CSS A CREAR / MODIFICAR

### **\_proyecto.css** (NUEVO)

Contendrá estilos específicos para:

- `.proyecto-hero` - Sección hero
- `.proyecto-hero-title` - Título en amarillo (#f6bc3f)
- `.proyecto-main` - Contenedor principal
- `.proyecto-content` - Columna de contenido
- `.proyecto-sidebar` - Información clave
- `.proyecto-info-box` - Cajas de información
- `.proyecto-video` - Contenedor de video responsivo
- `.proyecto-navigation` - Navegación prev/next
- Media queries para responsive

### **\_variables.css** (ACTUALIZAR)

Agregar:

- `--color-highlight: #f6bc3f;` (amarillo para títulos)
- Espaciado específico para proyectos

### **style.css**

Agregar import:

```css
@import "_proyecto.css";
```

---

## 🔧 JAVASCRIPT A CRIAR

### **proyecto.js** (NUEVO)

Funcionalidades:

- Navegación prev/next (actualizar URLs dinámicamente)
- Reproducción de videos (pause on scroll)
- Smooth scroll a secciones
- Observación de viewport para animaciones

---

## ✅ TAREAS PENDIENTES

- [ ] Crear carpeta `/proyectos`
- [ ] Crear archivo `_proyecto.css`
- [ ] Crear archivo `proyecto.js`
- [ ] Generar `proyecto-01.html` (template base)
- [ ] Duplicar y adaptar para proyecto-02 a proyecto-06
- [ ] Actualizar index.html con enlaces y proyecto 06
- [ ] Validar responsive en móvil, tablet, desktop
- [ ] Validar accesibilidad (WCAG 2.1)
- [ ] Probar navegación prev/next
- [ ] Testing de videos embebidos
- [ ] SEO meta tags por proyecto

---

## 📱 RESPONSIVE BREAKPOINTS

Usar variables CSS existentes:

```css
/* Mobile First */
/* Desktop: > 768px */
@media (min-width: 48em) {
  .proyecto-main {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--space-3xl);
  }
}
```

---

## 🎨 PALETA DE COLORES A USAR

| Elemento         | Color       | Variable CSS                      |
| ---------------- | ----------- | --------------------------------- |
| Títulos Proyecto | Amarillo    | `--color-warning: #f6bc3f`        |
| Texto Principal  | Azul oscuro | `--color-primary: #0b3249`        |
| Texto Secundario | Gris        | `--color-text-secondary: #334155` |
| Fondo            | Blanco      | `--color-bg: #ffffff`             |
| Bordes           | Gris claro  | `--color-border-light: #e2e8f0`   |

---

## 🔄 TIPOGRAFÍA

- **Heading (Títulos)**: Rubik Mono One
- **Body (Texto)**: Rubik (weights: 300-900)
- **Sizes**: Utilizar variables `--font-size-*` existentes

---

## 📝 NOTAS DE IMPLEMENTACIÓN

1. **DRY Principle**: Reutilizar máximo código del index (header, footer, CSS)
2. **File Paths**: Usar rutas relativas `../assets/` desde carpeta `/proyectos`
3. **Images**: Mantener URLs ImageKit de Romina
4. **Accessibility**: Agregar `alt` text a imágenes, roles ARIA
5. **SEO**: Meta tags únicos por proyecto
6. **Performance**: Lazy load para imágenes
7. **Validation**: HTML5 válido

---

## 🚀 PRÓXIMOS PASOS

1. **Fase 1**: Crear estructura carpetas y CSS
2. **Fase 2**: Generar template base (proyecto-01.html)
3. **Fase 3**: Replicar y adaptar proyectos 02-06
4. **Fase 4**: Actualizar index con enlaces
5. **Fase 5**: Testing y validación
6. **Fase 6**: Deploy y optimización
