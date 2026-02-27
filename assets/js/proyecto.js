/**
 * ============================================
 * proyecto.js - Individual Project Page Logic
 * ============================================
 * Handles navigation between project pages,
 * animations, and page-specific functionality.
 * ============================================
 */

// ===== PROJECT NAVIGATION DATA =====
const projectsData = [
  {
    id: 1,
    title: "Spot Moritz",
    slug: "proyecto-01.html",
    category: "Animación y Motion Graphics",
  },
  {
    id: 2,
    title: "Marca Bar Restaurante",
    slug: "proyecto-02.html",
    category: "Branding e Identidad Visual",
  },
  {
    id: 3,
    title: "Casa Editorial",
    slug: "proyecto-03.html",
    category: "Editorial",
  },
  {
    id: 4,
    title: "Diseño de Contenidos",
    slug: "proyecto-04.html",
    category: "Social Media",
  },
  {
    id: 5,
    title: "Diseño de Personajes",
    slug: "proyecto-05.html",
    category: "Comics y Narrativa Visual",
  },
  {
    id: 6,
    title: "Nuevo Proyecto",
    slug: "proyecto-06.html",
    category: "Categoría",
  },
];

// ===== GET CURRENT PROJECT ID =====
function getCurrentProjectId() {
  const currentFile = window.location.pathname.split("/").pop();
  const projectMatch = currentFile.match(/proyecto-(\d+)\.html/);
  return projectMatch ? parseInt(projectMatch[1]) : 1;
}

// ===== UPDATE NAVIGATION LINKS =====
function updateProjectNavigation() {
  const currentId = getCurrentProjectId();
  const totalProjects = projectsData.length;

  // Calculate previous and next project IDs (circular)
  const prevId = currentId === 1 ? totalProjects : currentId - 1;
  const nextId = currentId === totalProjects ? 1 : currentId + 1;

  // Get project data
  const prevProject = projectsData[prevId - 1];
  const nextProject = projectsData[nextId - 1];

  // Update navigation links
  const navPrev = document.querySelector(".nav-prev");
  const navNext = document.querySelector(".nav-next");

  if (navPrev) {
    navPrev.href = prevProject.slug;
    navPrev.textContent = `← ${prevProject.title}`;
  }

  if (navNext) {
    navNext.href = nextProject.slug;
    navNext.textContent = `${nextProject.title} →`;
  }

  // Update page title and meta
  const currentProject = projectsData[currentId - 1];
  document.title = `${currentProject.title} - Romina Mendieta`;
}

// ===== SMOOTH SCROLL SETUP =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ===== VIDEO LAZY LOADING =====
function setupVideoLazyLoading() {
  const videoContainer = document.querySelector(".video-container");
  if (!videoContainer) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const iframe = entry.target.querySelector("iframe");
        if (iframe && !iframe.src) {
          // Load video if not already loaded
          iframe.src = iframe.dataset.src || iframe.src;
        }
      }
    });
  });

  observer.observe(videoContainer);
}

// ===== KEYBOARD NAVIGATION =====
function setupKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      const prevLink = document.querySelector(".nav-prev");
      if (prevLink) prevLink.click();
    } else if (e.key === "ArrowRight") {
      const nextLink = document.querySelector(".nav-next");
      if (nextLink) nextLink.click();
    }
  });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function setupObserver() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  // Observe all sections with data-observe attribute
  document.querySelectorAll("[data-observe]").forEach((section) => {
    observer.observe(section);
  });
}

// ===== BACK TO PROJECTS BUTTON =====
function setupBackButton() {
  const backBtn = document.querySelector(".btn-back-projects");
  if (backBtn) {
    backBtn.href = "../index%20copy.html#proyectos";
  }
}

// ===== SCROLL PROGRESS INDICATOR =====
function updateScrollProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;

  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  const progressElement = document.getElementById("progress");
  if (progressElement) {
    progressElement.textContent = Math.round(scrollPercent);
  }
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  updateProjectNavigation();
  setupSmoothScroll();
  setupVideoLazyLoading();
  setupKeyboardNavigation();
  setupObserver();
  setupBackButton();
  updateScrollProgress();

  // Update progress on scroll
  window.addEventListener("scroll", updateScrollProgress);
});

// ===== UTILITY: COPY PROJECT DATA TO CLIPBOARD =====
function copyProjectData() {
  const currentId = getCurrentProjectId();
  const project = projectsData[currentId - 1];

  const data = `
Proyecto: ${project.title}
Categoría: ${project.category}
URL: ${window.location.href}
  `.trim();

  navigator.clipboard.writeText(data);
  console.log("Project data copied to clipboard");
}

// Make available globally for debugging
window.copyProjectData = copyProjectData;

// ===== REDUCED MOTION SUPPORT =====
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (prefersReducedMotion) {
  document.documentElement.style.setProperty("--transition-fast", "0ms");
  document.documentElement.style.setProperty("--transition-base", "0ms");
  document.documentElement.style.setProperty("--transition-slow", "0ms");
}
