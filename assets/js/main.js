/**
 * ============================================
 * WEB ATELIER (UDIT) - Student Project Template
 * ============================================
 * Main JavaScript: Scrollytelling Functionality
 * ============================================
 * PEDAGOGICAL NOTE: This file implements
 * scrollytelling with Intersection Observer API.
 * Progressive enhancement: site works without JS.
 * ============================================
 */

// ===== INTERSECTION OBSERVER FOR SCROLL-TRIGGERED ANIMATIONS =====
// PEDAGOGICAL NOTE: Modern, performant way to detect when elements
// enter viewport. Better than scroll event listeners.

const observerOptions = {
  threshold: 0.2, // Trigger when 20% of element is visible
  rootMargin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is visible, add 'visible' class to trigger CSS animations
      entry.target.classList.add("visible");

      // PEDAGOGICAL NOTE: Optional - stop observing after animation
      // Uncomment below if you want one-time animations only
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections with data-observe attribute
// PEDAGOGICAL NOTE: data-* attributes are semantic way to mark elements for JS
document.querySelectorAll("[data-observe]").forEach((section) => {
  observer.observe(section);
});

// ===== SCROLL PROGRESS INDICATOR =====
// PEDAGOGICAL NOTE: Shows user how far they've scrolled through the page

function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;

  // Calculate percentage scrolled
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  // Update progress display
  const progressElement = document.getElementById("progress");
  if (progressElement) {
    progressElement.textContent = Math.round(scrollPercent);
  }
}

// Listen for scroll events (throttled by browser's requestAnimationFrame)
window.addEventListener("scroll", updateScrollProgress);

// Initialize on page load
updateScrollProgress();

// ===== SCROLL TO TOP FUNCTION =====
// PEDAGOGICAL NOTE: Smooth scroll to top for better UX

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Make function available globally for onclick in HTML
// PEDAGOGICAL NOTE: In production, prefer addEventListener over onclick
window.scrollToTop = scrollToTop;

// ===== SMOOTH SCROLL BEHAVIOR =====
// PEDAGOGICAL NOTE: CSS scroll-behavior is simpler, but this works in all browsers

document.documentElement.style.scrollBehavior = "smooth";

// ===== REDUCED MOTION PREFERENCE =====
// PEDAGOGICAL NOTE: Respect user's accessibility preferences
// If user prefers reduced motion, disable scroll animations

// ===== HERO TEXT ANIMATION =====
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
if (hero) {
  // add expanded class after small delay to trigger CSS transition
  window.addEventListener("load", () => {
    setTimeout(() => hero.classList.add("expanded"), 100);
  });

  // parallax/scale effect on scroll
  window.addEventListener("scroll", () => {
    if (heroContent) {
      const scrolled = window.scrollY;
      heroContent.style.transform = `translateY(${scrolled * 0.3}px) scale(${Math.max(
        1 - scrolled / 1200,
        0.9,
      )})`;
    }
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // Disable smooth scrolling
  document.documentElement.style.scrollBehavior = "auto";

  // Optionally: add a class to body to disable CSS animations
  document.body.classList.add("reduce-motion");

  console.log("Reduced motion preference detected - animations disabled");
}

// ===== HERO ANIMATIONS =====
// Expand text on load and shrink on scroll

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    // trigger initial expansion after a tiny delay for animation
    setTimeout(() => hero.classList.add("expanded"), 100);
  }
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    if (window.scrollY > 10) hero.classList.add("scrolled");
    else hero.classList.remove("scrolled");

    // optional parallax of content
    const content = hero.querySelector(".hero-content");
    if (content) {
      content.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    }
  }
});

// ===== NAVIGATION INTERACTIONS =====
// Toggle mobile menu and highlight active section

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.getElementById("primary-nav");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("open");
  });
}

// highlight link of section in view using IntersectionObserver
const sections = document.querySelectorAll("section[id]");
const linkObserverOptions = {
  rootMargin: "0px 0px -60% 0px", // trigger when section crosses 40% top
  threshold: 0,
};
const linkObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
}, linkObserverOptions);
sections.forEach((sec) => linkObserver.observe(sec));

// ===== ACORDEÓN SERVICIOS =====
// Abrir/cerrar tarjetas tipo acordeón

const acordeonItems = document.querySelectorAll(".acordeon-item");
if (acordeonItems.length) {
  acordeonItems.forEach((item) => {
    const header = item.querySelector(".acordeon-header");
    const body = item.querySelector(".acordeon-body");
    header.addEventListener("click", () => {
      const isOpen = body.classList.contains("open");
      // cerrar todos
      acordeonItems.forEach((i) => {
        i.querySelector(".acordeon-body").classList.remove("open");
        i.querySelector(".acordeon-header").classList.remove("active");
      });
      if (!isOpen) {
        body.classList.add("open");
        header.classList.add("active");
      }
    });
  });
}

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const privacidad = document.getElementById("privacidad").checked;

    // Limpiar mensajes previos
    formMessage.className = "";
    formMessage.textContent = "";

    // Validación de nombre
    if (!nombre) {
      showMessage("El nombre es obligatorio", "error");
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showMessage("Ingresa un email válido", "error");
      return;
    }

    // Validación de mensaje
    if (!mensaje) {
      showMessage("El mensaje no puede estar vacío", "error");
      return;
    }

    // Validación de privacidad
    if (!privacidad) {
      showMessage("Debes aceptar la Política de Privacidad", "error");
      return;
    }

    // Si todo es válido
    showMessage(
      "¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.",
      "success",
    );
    contactForm.reset();
  });
}

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type;
}

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

  // Animar entrada de tarjetas (clase CSS + delay)
  projectCards.forEach((card, index) => {
    card.classList.add("animated");
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Use gsap.matchMedia to scope animations per breakpoint and automatically
  // revert/kill when changing between desktop/mobile. This avoids duplicated
  // ScrollTrigger instances and ensures clean teardown.
  const mm = gsap.matchMedia();

  // Desktop & large tablets: enable horizontal pinned scroll
  mm.add({ isDesktop: "(min-width: 769px)" }, (context) => {
    // calculate track width on runtime (recalculate on refresh)
    const calcTrackWidth = () =>
      proyectosTrack.scrollWidth - proyectosTrack.clientWidth;
    let trackWidth = calcTrackWidth();

    // Create the horizontal scroll animation
    const horizontalTween = gsap.to(proyectosTrack, {
      x: () => -calcTrackWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: proyectosWrapper,
        start: "top top",
        end: () => `+=${calcTrackWidth() + window.innerHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
        onUpdate: (self) => {
          if (progressBar) {
            progressBar.style.width = `${Math.round(self.progress * 100)}%`;
          }
        },
      },
    });

    // hover animations (desktop)
    projectCards.forEach((card) => {
      const enter = () =>
        gsap.to(card, { y: -10, duration: 0.3, overwrite: "auto" });
      const leave = () =>
        gsap.to(card, { y: 0, duration: 0.3, overwrite: "auto" });
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      // store listeners so they can be removed on revert
      card._enter = enter;
      card._leave = leave;
    });

    // refresh on resize to recalculate sizes
    const onRefresh = () => {
      // force refresh ScrollTrigger calculations
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onRefresh);

    // Return a cleanup function that mm will call when this context is deactivated
    return () => {
      horizontalTween && horizontalTween.kill();
      // kill ScrollTriggers related to proyectosTrack
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === proyectosWrapper) st.kill();
      });
      // remove hover listeners
      projectCards.forEach((card) => {
        if (card._enter) card.removeEventListener("mouseenter", card._enter);
        if (card._leave) card.removeEventListener("mouseleave", card._leave);
        delete card._enter;
        delete card._leave;
      });
      window.removeEventListener("resize", onRefresh);
      // reset inline transforms
      gsap.set(proyectosTrack, { clearProps: "transform" });
      if (progressBar) progressBar.style.width = "0%";
    };
  });

  // Mobile: disable ScrollTrigger and switch to vertical stacking/normal scroll
  mm.add({ isMobile: "(max-width: 768px)" }, () => {
    // Ensure any existing ScrollTriggers are killed
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Reset proyectosTrack styles so it flows vertically
    proyectosTrack.style.display = "block";
    proyectosTrack.style.overflow = "visible";
    proyectosTrack.style.flexDirection = "initial";
    proyectosTrack.style.gap = "var(--space-lg)";
    proyectosTrack.style.padding = "0 var(--space-2xl) var(--space-4xl)";
    gsap.set(proyectosTrack, { clearProps: "transform,will-change" });

    // Make each card full width and stacked
    projectCards.forEach((card) => {
      card.style.width = "100%";
      card.style.height = "auto";
      card.style.marginBottom = "var(--space-lg)";
      card.style.scrollSnapAlign = "none";
    });

    // remove any progress indicator usage
    if (progressBar) progressBar.style.width = "0%";

    // cleanup: nothing special to teardown here (mm will clear when leaving)
    return () => {
      // restore inline styles removed by mobile adjustments
      proyectosTrack.style.display = "flex";
      proyectosTrack.style.overflow = "";
      projectCards.forEach((card) => {
        card.style.width = "";
        card.style.height = "";
        card.style.marginBottom = "";
      });
    };
  });

  // optional: listen for matchMedia change and refresh ScrollTrigger
  // mm will handle calling the returned cleanup functions automatically.
});

// ===== WORK CAROUSEL - SCROLL SNAP (Estilo Framer) =====
// Sincronizar indicadores con scroll position

const workCarousel = document.getElementById("workCarousel");
const workIndicators = document.querySelectorAll(".work-indicator");

if (workCarousel) {
  // Detectar qué slide está en vista durante el scroll
  workCarousel.addEventListener("scroll", () => {
    // Calcular cuál slide está visible
    const scrollPosition = workCarousel.scrollTop;
    const slideHeight = workCarousel.clientHeight;
    const currentSlideIndex = Math.round(scrollPosition / slideHeight);

    // Actualizar indicadores activos
    workIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlideIndex);
    });
  });

  // Click en indicadores para scroll a ese slide
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

// ===== CONSOLE LOG FOR DEBUGGING =====
// PEDAGOGICAL NOTE: Helpful during development, remove in production

console.log("✅ Scrollytelling initialized");
console.log(
  `📊 Observing ${document.querySelectorAll("[data-observe]").length} sections`,
);
console.log("🎡 Work carousel scroll-snap ready");
