# 📖 GUÍA DE IMPLEMENTACIÓN: Páginas Individuales de Proyectos

**Última Actualización**: 27 de febrero, 2026  
**Version**: 1.0  
**Estado**: Completado ✅

---

## 📋 TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Cómo Usar el Template](#cómo-usar-el-template)
4. [Personalización por Proyecto](#personalización-por-proyecto)
5. [Rutas y Navegación](#rutas-y-navegación)
6. [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)
7. [Troubleshooting](#troubleshooting)

---

## ✅ RESUMEN EJECUTIVO

Se han implementado **6 páginas HTML individuales** para proyectos en la carpeta `/proyectos`:

- ✓ `proyecto-01.html` - Spot Moritz (Animación y Motion Graphics)
- ✓ `proyecto-02.html` - Cielo Morlaco (Branding e Identidad Visual)
- ✓ `proyecto-03.html` - Casa Editorial (Editorial)
- ✓ `proyecto-04.html` - ALVA (Social Media)
- ✓ `proyecto-05.html` - Personajes y Comics (Comics y Narrativa Visual)
- ✓ `proyecto-06.html` - Tech Startup Identity (Branding Digital y UI/UX) **[NUEVO]**

### Archivos de Soporte

| Archivo                    | Descripción                                       |
| -------------------------- | ------------------------------------------------- |
| `assets/css/_proyecto.css` | Estilos específicos para páginas de proyecto      |
| `assets/js/proyecto.js`    | Lógica JavaScript para navegación entre proyectos |
| `assets/css/style.css`     | Importa automáticamente \_proyecto.css            |

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
romina_mta_porfolio/
│
├── index copy.html                           [ACTUALIZADO - links a proyectos + proyecto 6]
│
├── proyectos/                                [NUEVA CARPETA]
│   ├── proyecto-01.html                      [NUEVO]
│   ├── proyecto-02.html                      [NUEVO]
│   ├── proyecto-03.html                      [NUEVO]
│   ├── proyecto-04.html                      [NUEVO]
│   ├── proyecto-05.html                      [NUEVO]
│   └── proyecto-06.html                      [NUEVO]
│
├── assets/
│   ├── css/
│   │   ├── style.css                         [ACTUALIZADO - import _proyecto.css]
│   │   ├── _proyecto.css                     [NUEVO]
│   │   └── ... (otros)
│   ├── js/
│   │   ├── main.js                           [SIN CAMBIOS]
│   │   ├── proyecto.js                       [NUEVO]
│   │   └── ...
│   └── ... (otros)
│
└── docs/
    ├── PLAN-PAGINAS-PROYECTOS.md             [NUEVO - Plan de implementación]
    └── GUIA-IMPLEMENTACION-PROYECTOS.md      [NUEVO - Esta guía]
```

---

## 🛠️ CÓMO USAR EL TEMPLATE

### 1. ESTRUCTURA BÁSICA DE CADA PÁGINA

Cada página sigue esta estructura:

```html
<!doctype html>
<html lang="es">
  <head>
    <!-- Meta tags únicos por proyecto -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="[Descripción única del proyecto]" />
    <title>[Título del Proyecto] - Romina Mendieta</title>

    <!-- CSS - Iguales en todas las páginas -->
    <link rel="stylesheet" href="../assets/css/style.css" />
    <link rel="stylesheet" href="../assets/css/_proyecto.css" />
  </head>

  <body>
    <!-- Header reutilizado -->
    <header class="site-header">...</header>

    <!-- Main content -->
    <main id="main">
      <!-- Hero section -->
      <section class="proyecto-hero" data-observe>...</section>

      <!-- Content + sidebar -->
      <section class="proyecto-main" data-observe>
        <div class="proyecto-container">
          <article class="proyecto-content">...</article>
          <aside class="proyecto-sidebar">...</aside>
        </div>
      </section>

      <!-- Video section -->
      <section class="proyecto-video" data-observe>...</section>

      <!-- Navigation -->
      <nav class="proyecto-navigation">...</nav>
    </main>

    <!-- Footer reutilizado -->
    <footer class="footer">...</footer>

    <!-- Scripts -->
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/proyecto.js"></script>
  </body>
</html>
```

### 2. RUTAS CORRECTAS (DESDE `/proyectos` HACIA `/assets` Y `/index`)

```html
<!-- CSS (sube un nivel con ../) -->
<link rel="stylesheet" href="../assets/css/style.css" />

<!-- JavaScript -->
<script src="../assets/js/main.js"></script>
<script src="../assets/js/proyecto.js"></script>

<!-- Links internos -->
<a href="../index copy.html">Volver al inicio</a>
<a href="../index copy.html#proyectos">Volver a proyectos</a>

<!-- Links de navegación entre proyectos (misma carpeta) -->
<a href="proyecto-01.html">Proyecto 1</a>
```

---

## 🎨 PERSONALIZACIÓN POR PROYECTO

### Elementos que VARÍAN por proyecto:

1. **Meta Tags**

```html
<meta name="description" content="[CAMBIAR - Descripción única]" />
<meta property="og:title" content="[CAMBIAR - Título]" />
<title>[CAMBIAR - Título] - Romina Mendieta</title>
```

2. **Sección Hero**

```html
<section class="proyecto-hero">
  <div class="proyecto-hero-content">
    <h1 class="proyecto-hero-title">[CAMBIAR - Título grande en amarillo]</h1>
    <p class="proyecto-hero-description">[CAMBIAR - Descripción breve]</p>
  </div>
</section>
```

3. **Contenido Principal**

```html
<article class="proyecto-content">
  <h2>Sobre el Proyecto</h2>
  <p>[CAMBIAR - Párrafos descriptivos]</p>

  <h3>Concepto Creativo</h3>
  <p>[CAMBIAR - Detalles específicos]</p>

  <!-- Agregar más secciones h3 según necesidad -->
</article>
```

4. **Sidebar - Información del Proyecto**

```html
<aside class="proyecto-sidebar">
  <div class="proyecto-info-box">
    <h4>Cliente</h4>
    <p>[CAMBIAR - Nombre del cliente]</p>
  </div>

  <div class="proyecto-info-box">
    <h4>Canales</h4>
    <ul>
      <li>[CAMBIAR - Canal 1]</li>
      <li>[CAMBIAR - Canal 2]</li>
    </ul>
  </div>

  <!-- Agregar más cajas según necesidad -->
</aside>
```

5. **Video Section**

```html
<section class="proyecto-video">
  <div class="video-container">
    <iframe
      src="https://www.youtube.com/embed/[CAMBIAR - VIDEO_ID]"
      title="[CAMBIAR - Título video]"
      ...
    ></iframe>
  </div>
</section>
```

### Ejemplo: Cambiar Proyecto 1

**ANTES:**

```html
<h1 class="proyecto-hero-title">Spot Moritz</h1>
<p>Campaña audiovisual para televisión...</p>
```

**DESPUÉS (si fuera otro proyecto):**

```html
<h1 class="proyecto-hero-title">Mi Nuevo Proyecto</h1>
<p>Descripción específica del nuevo proyecto...</p>
```

---

## 🔗 RUTAS Y NAVEGACIÓN

### A. Links en el Index (index copy.html)

```html
<!-- Links a proyectos (carpeta proyectos/) -->
<a href="proyectos/proyecto-01.html" class="proyecto-card-link">
  <article class="proyecto-card">...</article>
</a>
```

Rutas:

- `proyectos/proyecto-01.html` → Relativa desde index
- `proyectos/proyecto-02.html` → Relativa desde index
- etc.

### B. Links en Páginas de Proyecto

```html
<!-- Volver al index (suben un nivel con ../) -->
<a href="../index copy.html">Logo</a>
<a href="../index copy.html#proyectos">Volver a Proyectos</a>

<!-- Navegación entre proyectos (misma carpeta) -->
<a href="proyecto-01.html" class="nav-prev">← Anterior</a>
<a href="proyecto-02.html" class="nav-next">Siguiente →</a>
```

### C. Logo en Header

En todas las páginas de proyecto:

```html
<a href="../index copy.html" class="logo">
  <img
    src="https://ik.imagekit.io/romendieta0207/svg/Recurso%207.png"
    alt="Logo"
  />
</a>
```

### D. Navegación Automática

El archivo `proyecto.js` actualiza automáticamente los links prev/next:

- Si estás en proyecto-01.html → prev = proyecto-05.html (circular)
- Si estás en proyecto-01.html → next = proyecto-02.html

---

## 🔧 FUNCIONALIDADES JAVASCRIPT

### En `proyecto.js`:

```javascript
// 1. Detección automática de proyecto actual
const projectId = getCurrentProjectId(); // Lee src del documento

// 2. Actualización automática de navegación
updateProjectNavigation(); // Actualiza prev/next según proyecto actual

// 3. Keyboard navigation
// Flecha izquierda: proyecto anterior
// Flecha derecha: proyecto siguiente

// 4. Video lazy loading
// Los videos se cargan cuando entran en viewport

// 5. Scroll progress
// Muestra porcentaje de scroll completo
```

### Para activar la navegación automática:

Asegúrate de que cada página tenga correctamente el script:

```html
<script src="../assets/js/proyecto.js"></script>
```

---

## 📝 MANTENIMIENTO Y ACTUALIZACIONES

### A. Agregar un Nuevo Proyecto (Proyecto 7)

1. **Copiar template:**

   ```
   cp proyectos/proyecto-06.html proyectos/proyecto-07.html
   ```

2. **Actualizar contenido** (meta tags, hero, contenido, sidebar, video)

3. **Actualizar navegación en proyecto.js:**

   ```javascript
   // Agregar al array projectsData:
   {
     id: 7,
     title: "Mi Nuevo Proyecto",
     slug: "proyecto-07.html",
     category: "Mi Categoría",
   }
   ```

4. **Actualizar proyecto-06.html:**

   ```html
   <a href="proyecto-07.html" class="nav-next">Próximo →</a>
   ```

5. **Crear nueva tarjeta en index.html:**
   ```html
   <a href="proyectos/proyecto-07.html" class="proyecto-card-link">
     <article class="proyecto-card">...</article>
   </a>
   ```

### B. Actualizar Información de un Proyecto Existente

Simplemente edita el archivo HTML del proyecto (ej: `proyecto-03.html`) y cambia:

- Contenido de text
- Meta tags
- Imágenes
- URLs de video
- Información en sidebar

### C. Cambiar Estilos de Proyecto

Edita `assets/css/_proyecto.css` para cambiar:

- Colores de hero
- Tamaños de fuente
- Espaciado
- Animaciones

Los cambios afectarán a TODAS las páginas de proyecto.

---

## 🐛 TROUBLESHOOTING

### Problema: "Las páginas no se ven bonitas"

**Solución:**

1. Verifica que `style.css` importe `_proyecto.css`
2. Abre DevTools (F12) → Networks → ve si CSS se carga
3. Limpia caché del navegador (Ctrl+Shift+Del)

### Problema: "Los enlaces no funcionan"

**Causa:** Rutas incorrectas

**Verificación:**

```html
<!-- ✓ CORRECTO (desde /proyectos/) -->
<a href="../assets/css/style.css">
  ← Sube a raíz
  <a href="../index copy.html">
    ← Sube a raíz
    <a href="proyecto-02.html">
      ← Misma carpeta

      <!-- ✗ INCORRECTO -->
      <a href="assets/css/style.css">
        ← Relativo a /proyectos
        <a href="index copy.html"> ← No sube nivel</a></a
      ></a
    ></a
  ></a
>
```

### Problema: "El video no se carga"

**Causa:** ID de YouTube incorrecto

**Solución:**

```html
<!-- ✓ CORRECTO -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

<!-- ✗ INCORRECTO -->
<iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></iframe>
<!-- El src debe ser /embed/ no /watch? -->
```

### Problema: "Los números del proyecto no avanzan"

**Causa:** El nombre del archivo no coincide con el patrón

**Solución:**

```bash
# ✓ CORRECTO
proyecto-01.html
proyecto-02.html

# ✗ INCORRECTO
Proyecto-1.html    ← Mayúscula
proyecto1.html     ← Sin guión
proj_01.html       ← Nombre diferente
```

### Problema: "Navegación prev/next no funciona"

**Verificación:**

1. Abre DevTools → Console (F12)
2. Escribe: `getCurrentProjectId()` → debe devolver número (1-6)
3. Si devuelve `undefined` → revisa `proyecto.js`

---

## 📊 CHECKLIST DE INTEGRACIÓN

- [ ] Carpeta `/proyectos` creada
- [ ] 6 archivos HTML (proyecto-01 a proyecto-06) creados
- [ ] Archivo `_proyecto.css` creado en `/assets/css`
- [ ] Archivo `proyecto.js` creado en `/assets/js`
- [ ] `style.css` importa `_proyecto.css`
- [ ] Index actualizado con enlaces a proyectos
- [ ] Proyecto 6 agregado en index
- [ ] Rutas relativas verificadas (../../, ../)
- [ ] Meta tags únicos por proyecto
- [ ] Videos embebidos funcionales
- [ ] Navegación prev/next funciona
- [ ] Scroll progress funciona
- [ ] Responsive en móvil (< 768px)
- [ ] Responsive en tablet (768px - 1024px)
- [ ] Responsive en desktop (> 1024px)

---

## 🎓 NOTAS PEDAGÓGICAS

### Sobre Template Reutilizable

Este proyecto demuestra:

- ✓ **DRY (Don't Repeat Yourself):** CSS y JS compartido
- ✓ **Modularidad:** Cada página es auto-contenida
- ✓ **Escalabilidad:** Fácil agregar nuevos proyectos
- ✓ **Mantenibilidad:** Cambios en estilos afectan todas las páginas

### Sobre Rutas Relativas

```
Estructura de carpetas:
romina_mta_porfolio/
├── index copy.html
├── proyectos/
│   └── proyecto-01.html    ← Estás aquí

Desde proyecto-01.html:
- Para ir a assets: ../assets/
  (sube 1 nivel: ../)

- Para ir a index: ../index copy.html
  (sube a raíz con ../)

- Para ir a otro proyecto: proyecto-02.html
  (misma carpeta, sin ../)
```

---

## 📞 SOPORTE

Si encuentras problemas:

1. **Revisa los archivos:**
   - ¿Existen todos los archivos?
   - ¿Nombres están correctos?

2. **Verifica rutas:**
   - Abre DevTools (F12)
   - Mira Network tab
   - ¿Se cargan CSS y JS?

3. **Limpia caché:**
   - Ctrl+Shift+Del (Windows)
   - Cmd+Shift+Del (Mac)
   - Recarga página

4. **Git status:**
   ```bash
   git status  # ¿Todos los archivos están tracked?
   git add .
   git commit -m "Agregar páginas de proyectos"
   ```

---

## 📝 VERSIÓN Y CAMBIOS

| Versión | Fecha      | Cambios                                        |
| ------- | ---------- | ---------------------------------------------- |
| 1.0     | 27/02/2026 | Implementación inicial - 6 páginas de proyecto |

---

**Última actualización:** 27 de febrero, 2026  
**Autor:** Generado automáticamente para portfolio de Romina Mendieta
