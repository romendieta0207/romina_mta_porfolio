**PROMPT PARA GENERAR SECCIÓN PROYECTOS CON SCROLL HORIZONTAL**
genra el plan de implementación:

Necesito que generes el código completo para la sección Proyectos que tenga scroll horizontal animado usando GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

REQUISITOS GENERALES1:

- Debe desplazarse horizontalmente cuando el usuario hace scroll vertical.
- El contenedor principal debe fijarse (pin) mientras dura la animación.
- Las tarjetas deben moverse de derecha a izquierda.
- El scroll debe ser suave y proporcional a la cantidad de tarjetas.
- Debe ser responsive.

ESTRUCTURA

- section.proyectos
- div.proyectos-wrapper (contenedor que se fija)
- div.proyectos-track (contenedor horizontal)
- div.proyecto-card (cada proyecto)

CADA TARJETA DEBE TENER

- imagen
- título
- subtítulo
- overlay hover
- animación de escala en hover

ANIMACIONES

- Scroll horizontal controlado con ScrollTrigger
- scrub:true
- pin:true
- ease: none
- animación de entrada fade + translateY al cargar

TECNOLOGÍA

- HTML
- CSS moderno (flex o grid)
- JavaScript Vanilla
- GSAP + ScrollTrigger

IMPORTANTE

- El código debe venir listo para copiar y pegar.
- Debe incluir imports CDN de GSAP.
- Debe estar comentado.
- No usar frameworks.

PERSONALIZACIÓN DE ESTILO
Usa estas variables CSS: /assets/css/\_variables.css
: /_ Colors - Primary _/
--color-primary: #0b3249;
--color-primary-light: #679cbc;
--color-primary-dark: #061b27;

/_ Colors - Secondary _/
--color-secondary: #d23f57;
--color-secondary-light: #f6bc3f;
--color-secondary-dark: rgb(255, 241, 214);

Optimiza para rendimiento y evita jank de scroll.

OBJETIVO VISUAL
La experiencia debe sentirse premium, fluida y moderna, similar a portfolios creativos de agencias.

Crea el plan en un documento en docs. Y no lo implementes hasta que sea aprobado.
