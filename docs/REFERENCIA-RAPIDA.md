# ⚡ REFERENCIA RÁPIDA: Páginas de Proyectos

**Cheat Sheet para desarrolladores - Imprimible**

---

## 📁 ESTRUCTURA CARPETAS

```
romina_mta_porfolio/
├── index copy.html                    [6 proyectos con enlaces]
├── proyectos/
│   ├── proyecto-01.html              [Spot Moritz]
│   ├── proyecto-02.html              [Cielo Morlaco]
│   ├── proyecto-03.html              [Casa Editorial]
│   ├── proyecto-04.html              [ALVA]
│   ├── proyecto-05.html              [Personajes]
│   └── proyecto-06.html              [Tech Startup] ← NUEVO
├── assets/
│   ├── css/
│   │   ├── style.css                 [Importa _proyecto.css]
│   │   └── _proyecto.css             [NUEVO]
│   └── js/
│       └── proyecto.js               [NUEVO]
└── docs/
    ├── PLAN-PAGINAS-PROYECTOS.md
    ├── GUIA-IMPLEMENTACION-PROYECTOS.md
    └── RESUMEN-EJECUTIVO.md
```

---

## 🔗 RUTAS DESDE `/proyectos/`

| Destino             | Ruta Correcta                  | Desde            |
| ------------------- | ------------------------------ | ---------------- |
| CSS                 | `../assets/css/style.css`      | proyecto-XX.html |
| JS                  | `../assets/js/proyecto.js`     | proyecto-XX.html |
| Index               | `../index copy.html`           | proyecto-XX.html |
| Proyecto Siguiente  | `proyecto-02.html`             | proyecto-01.html |
| Proyectos (section) | `../index copy.html#proyectos` | proyecto-XX.html |

---

## 🎨 ELEMENTOS PRINCIPALES

### Hero Section

```html
<section class="proyecto-hero">
  <h1 class="proyecto-hero-title">TITULO AMARILLO</h1>
  <p class="proyecto-hero-description">Descripción breve</p>
</section>
```

### Contenido + Sidebar

```html
<section class="proyecto-main">
  <div class="proyecto-container">
    <article class="proyecto-content">
      <!-- Texto, h2, h3, p, ul, li -->
    </article>
    <aside class="proyecto-sidebar">
      <div class="proyecto-info-box">
        <h4>Cliente</h4>
        <p>Nombre</p>
      </div>
    </aside>
  </div>
</section>
```

### Video

```html
<section class="proyecto-video">
  <div class="video-container">
    <iframe src="https://youtube.com/embed/VIDEO_ID"></iframe>
  </div>
</section>
```

### Navegación

```html
<nav class="proyecto-navigation">
  <a href="proyecto-XX.html" class="nav-prev">← Anterior</a>
  <a href="../index%20copy.html#proyectos" class="nav-home">Volver</a>
  <a href="proyecto-YY.html" class="nav-next">Siguiente →</a>
</nav>
```

---

## 🎯 CAMBIAR PROYECTO

1. **Meta tags (único por proyecto)**

   ```html
   <meta name="description" content="[CAMBIAR]" /> <title>[CAMBIAR]</title>
   ```

2. **Hero (página introductoria)**

   ```html
   <h1>Titulo Proyecto</h1>
   <p>Descripción única</p>
   ```

3. **Contenido (secciones h2, h3, texto)**

   ```html
   <h2>Sobre el Proyecto</h2>
   <p>Párrafos...</p>
   ```

4. **Sidebar (cliente, canales, resultados)**

   ```html
   <h4>Cliente</h4>
   <p>Nombre</p>
   ```

5. **Video (ID de YouTube)**
   ```html
   <iframe src="...embed/VIDEO_ID"></iframe>
   ```

---

## 📝 CREAR PROYECTO 7

```bash
# 1. Copiar template
cp proyectos/proyecto-06.html proyectos/proyecto-07.html

# 2. Actualizar contenido en proyecto-07.html
# 3. Actualizar proyecto.js array (agregar id:7)
# 4. Updatear nav en proyecto-06.html next → proyecto-07
# 5. Agregar tarjeta en index copy.html
```

---

## 🔑 CLASES CSS PRINCIPALES

| Clase                  | Elemento             | Display            |
| ---------------------- | -------------------- | ------------------ |
| `.proyecto-hero`       | Section intro        | flex column center |
| `.proyecto-main`       | Section contenido    | block              |
| `.proyecto-container`  | Grid content+sidebar | grid / flex        |
| `.proyecto-content`    | Columna principal    | block              |
| `.proyecto-sidebar`    | Sidebar información  | flex column        |
| `.proyecto-info-box`   | Una caja de info     | block              |
| `.proyecto-video`      | Sección video        | block              |
| `.video-container`     | Video responsivo     | aspect-ratio       |
| `.proyecto-navigation` | Nav prev/next        | grid 1fr 1fr 1fr   |

---

## ⚙️ JAVASCRIPT AUTOMÁTICO

```javascript
// Estos se ejecutan sin intervención:
getCurrentProjectId(); // Lee el filename
updateProjectNavigation(); // Actualiza botones prev/next
setupObserver(); // Anima elementos
setupKeyboardNavigation(); // Flechas izq/der
setupVideoLazyLoading(); // Carga videos en viewport
updateScrollProgress(); // % scroll
```

---

## 🐛 ERRORES COMUNES

| Error                | Causa                                   | Solución             |
| -------------------- | --------------------------------------- | -------------------- |
| CSS no carga         | Ruta `assets/` en lugar de `../assets/` | Usar `../`           |
| Links no funcionan   | `.html` en lugar de `/`                 | Usar `/` o `./`      |
| Video no aparece     | `/watch?v=` en lugar de `/embed/`       | Usar `/embed/`       |
| Nombre proyecto      | `Proyecto-1` o `proj01`                 | Usar `proyecto-01`   |
| Navegación no existe | Archivo en carpeta raíz                 | Mover a `/proyectos` |

---

## 📊 RESPONSIVE BREAKPOINTS

```css
/* Mobile < 48em (768px) */
.proyecto-container {
  flex-direction: column;
}
.proyecto-sidebar {
  position: static;
}

/* Tablet/Desktop ≥ 48em (768px) */
.proyecto-container {
  grid-template-columns: 1fr 32ch;
}
.proyecto-sidebar {
  position: sticky;
  top: calc(...);
}

/* Desktop Large ≥ 64em (1024px) */
.proyecto-container {
  gap: var(--space-4xl);
}
```

---

## ✅ TESTING CHECKLIST

- [ ] Index carga sin errores
- [ ] 6 tarjetas de proyecto visibles
- [ ] Click en tarjeta → va a proyecto-XX.html
- [ ] Página proyecto carga CSS correctamente
- [ ] Sidebar pegajoso en desktop
- [ ] Video embed reproduce
- [ ] Nav prev/next muestra proyectos correctos
- [ ] Scroll progress indicator sube
- [ ] Teclado: flecha izquierda/derecha navega
- [ ] Responsive: mobile < 786px ✓
- [ ] Responsive: tablet 768px ✓
- [ ] Responsive: desktop > 1024px ✓

---

## 🎯 ARCHIVOS CRÍTICOS

| Archivo                         | Cambios               | Importancia   |
| ------------------------------- | --------------------- | ------------- |
| `index copy.html`               | +1 proyecto, +enlaces | 🔴 CRÍTICO    |
| `proyectos/proyecto-01-06.html` | Contenido             | 🔴 CRÍTICO    |
| `assets/css/style.css`          | +import \_proyecto    | 🟡 IMPORTANTE |
| `assets/css/_proyecto.css`      | NUEVO                 | 🟡 IMPORTANTE |
| `assets/js/proyecto.js`         | NUEVO                 | 🟡 IMPORTANTE |
| `docs/*.md`                     | Documentación         | 🟢 REFERENCIA |

---

## 📱 VIEWPORT OPTIMIZATION

```html
<!-- Incluido en <head> de cada proyecto -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Soporta:

- ✓ iPhone (320-480px)
- ✓ iPad (768-1024px)
- ✓ Desktop (1920px+)
- ✓ Tablets Android
- ✓ Landscape/Portrait

---

## 🔐 TEST DE ACCESIBILIDAD

```html
<!-- Skip link (ya incluido) -->
<a href="#main" class="skip-link">Saltar al contenido</a>

<!-- Atributos ARIA (revisar) -->
<aria-label>Textos descriptivos</aria-label>
<aria-expanded>Estado menú</aria-expanded>

<!-- Alt text (verificar todas imágenes) -->
<img alt="Descripción clara" />
```

---

## 📞 DEBUGGING RÁPIDO

```javascript
// En console (F12):

// ¿Cuál es el proyecto actual?
getCurrentProjectId(); // → 1 a 6

// ¿Cargar JavaScript?
typeof updateProjectNavigation; // → "function"

// ¿Cargar CSS?
getComputedStyle(document.querySelector(".proyecto-hero")).backgroundColor;
// → Debe mostrar gradiente aplicado
```

---

## 🚀 DEPLOY CHECKLIST

Antes de publicar:

- [ ] Git: `git status` → sin cambios sin guardar
- [ ] Git: `git add .` → agregar todos
- [ ] Git: `git commit -m "Agregar páginas proyectos"`
- [ ] Git: `git push`
- [ ] Testing: Abre proyecto-01.html en navegador
- [ ] Testing: Verifica rutas CSS/JS cargan
- [ ] Testing: Navega con flechas teclado
- [ ] Testing: Redimensiona ventana (F12 responsive)
- [ ] Validación: https://validator.w3.org/

---

## 📚 RECURSOS

| Recurso       | URL                                  |
| ------------- | ------------------------------------ |
| Variables CSS | `assets/css/_variables.css`          |
| Iconografía   | Rubik Mono One Font                  |
| Tipografía    | Rubik (300-900 weights)              |
| Colores       | `--color-primary`, `--color-warning` |

---

**Última Actualización:** 27 de febrero, 2026  
**Versión:** 1.0  
**Impresa:** A4 Landscape (ajusta según necesidad)
