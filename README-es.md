# WEB ATELIER (UDIT) – Portafolio Romina Mendieta.

\_

# Portfolio Scrollytelling - Template para Estudiantes

## 🎯 Objetivo

Este template te proporciona un portfolio scrollytelling **completamente funcional** con componentes ya implementados. Tu tarea es **personalizarlo** con tus contenidos, no construirlo desde cero.

---

## Tecnologías Principales (Explicación Detallada)

### GitHub Pages

- Los estudiantes habilitan Pages en su repositorio para publicar el proyecto en vivo en una URL como [`https://usuario.github.io/proyecto`](https://romendieta0207.github.io/romina_mta_porfolio/index%20copy.html#top).
- El despliegue es automático: cada commit en `main` actualiza el sitio.

### Jekyll

- No es necesario que los estudiantes lo usen directamente, pero Pages lo emplea en segundo plano.
- Se incluye un archivo `.nojekyll` para evitar conflictos, salvo que se requiera explícitamente.

## Tecnologías de Soporte (Resumen)

- **Markdown:** para `README.md` y `project-brief.md`.
- **YAML:** en `project.yaml` para describir metadatos (título, lema, URL, etc.).
- **Liquid:** no lo editan los estudiantes directamente, pero se usa en plantillas de curso/profesor para mostrar info del proyecto.
- **JSON-LD:** se añade automáticamente en los templates cuando los proyectos aparecen en el showroom.

## Estructura del Repositorio

```plaintext
.
├── 404.html
├── bio.md
├── hero-lema.md
├── GETTING-STARTED.md
├── imagekit-urls.txt
├── index copy.html
├── LICENSE-CODE
├── LICENSE-CONTENT
├── package.json
├── project-brief.md
├── project-inspiration.md
├── project.yaml
├── README-es.md
├── README.md
├── statement.md
├── animation/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── _accessibility.css
│   │   ├── _base.css
│   │   ├── _components.css
│   │   ├── _layout.css
│   │   ├── _print.css
│   │   ├── _reset.css
│   │   ├── _responsive.css
│   │   ├── _scrollytelling.css
│   │   ├── _utilities.css
│   │   ├── _variables.css
│   │   └── style.css
│   └── js/
│       └── main.js
├── docs/                   # documentación, informes y planes
├── ejemplos/
│   └── index.html
├── image/
│   └── inspiration/
├── proyectos/
│   ├── proyecto-01.html
│   ├── proyecto-02.html
│   ├── proyecto-03.html
│   ├── proyecto-04.html
│   ├── proyecto-05.html
│   └── proyecto-06.html
└── imagekit-urls.txt       # listado de URLs utilizadas

Nota: la carpeta `docs/` contiene numerosos archivos Markdown con planes,
informes y documentación técnica; `assets/css` importa parciales y variables
para mantener el estilo global.

```
