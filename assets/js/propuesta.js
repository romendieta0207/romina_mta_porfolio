/**
 * propuesta.js
 * Renderizador dinámico de cotizaciones desde JSON
 */

const getSlug = () => {
  const path = window.location.pathname.replace(/\/$/, "");
  const segments = path.split("/").filter(Boolean);
  const idx = segments.indexOf("propuesta");
  return idx !== -1 && segments[idx + 1] && segments[idx + 1] !== "index.html" ?
      segments[idx + 1]
    : null;
};

const fetchJSON = async (slug) => {
  const url = `/propuestas/${slug}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Propuesta no encontrada");
  return res.json();
};

const renderHero = (data) => {
  document.getElementById("heroEyebrow").innerHTML =
    `<span class="eyebrow"><span class="dot"></span> ${data.hero.eyebrow}</span>`;
  document.getElementById("heroTitle").innerHTML = data.hero.title;
  document.getElementById("heroLead").textContent = data.hero.subtitle;
  const meta = document.getElementById("heroMeta");
  meta.innerHTML = data.hero.metas
    .map((m) => `<span class="meta-pill">${m.icon} ${m.text}</span>`)
    .join("");
  document.title = `${data.cliente} - ${data.proyecto}`;
};

const renderNavLinks = (data) => {
  const nav = document.getElementById("navLinks");
  nav.innerHTML = data.navLinks
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join("");
};

const renderServicios = (data) => {
  const { eyebrow, title, subtitle, items } = data.servicios;
  document.getElementById("serviciosHead").innerHTML = `
    <span class="eyebrow"><span class="dot"></span> ${eyebrow}</span>
    <h2>${title}</h2>
    <p>${subtitle}</p>
  `;
  document.getElementById("serviciosTimeline").innerHTML = items
    .map(
      (item) => `
    <div class="tl-card">
      <div class="n">${item.n}</div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `,
    )
    .join("");
};

const renderPrecios = (data) => {
  const {
    eyebrow,
    title,
    subtitle,
    toggle,
    paquetesMes,
    paquetesPieza,
    tablaNote,
  } = data.precios;
  document.getElementById("preciosHead").innerHTML = `
    <span class="eyebrow"><span class="dot"></span> ${eyebrow}</span>
    <h2>${title}</h2>
    <p>${subtitle}</p>
  `;

  document.getElementById("preciosToggle").innerHTML = `
    <div class="toggle__track" role="tablist" aria-label="Formato de precio">
      <button class="toggle__btn is-active" id="tab-mes" role="tab" aria-selected="true">${toggle.labelMes}</button>
      <button class="toggle__btn" id="tab-pieza" role="tab" aria-selected="false">${toggle.labelPieza}</button>
    </div>
  `;

  document.getElementById("plansMes").innerHTML = paquetesMes
    .map(
      (plan) => `
    <div class="plan ${plan.featured ? "is-featured" : ""}">
      ${plan.badge ? `<span class="plan__badge">${plan.badge}</span>` : ""}
      <p class="plan__name">${plan.name}</p>
      <p class="plan__desc">${plan.desc}</p>
      <div class="plan__price">
        <span class="amount">${plan.price}</span>
        <span class="unit">${plan.unit}</span>
      </div>
      <div class="plan__cta">
        <a class="btn ${plan.featured ? "btn-dark" : "btn-outline"} btn-block" href="#contacto">Elegir este plan</a>
      </div>
      <ul class="plan__features">
        ${plan.items
          .map((item) => {
            const iconHtml =
              plan.featured ?
                '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#141412"/><path d="M6 10.5l2.5 2.5L14 7" stroke="#f6bc3f" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
              : '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#f6bc3f"/><path d="M6 10.5l2.5 2.5L14 7" stroke="#141412" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
            return `<li>${iconHtml} ${item}</li>`;
          })
          .join("")}
      </ul>
      <p class="plan__foot">${plan.foot}</p>
    </div>
  `,
    )
    .join("");

  const tbody = document.createElement("tbody");
  tbody.innerHTML = paquetesPieza
    .map(
      (row) => `
    <tr><td>${row.entrega}</td><td>${row.precio}</td></tr>
  `,
    )
    .join("");
  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>Entregable</th><th>Precio</th></tr>";
  const table = document.getElementById("tablaPieza");
  table.innerHTML = "";
  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("tablaNote").textContent = tablaNote;
};

const renderIncluye = (data) => {
  const { eyebrow, title, items } = data.incluye;
  document.getElementById("incluyeHead").innerHTML = `
    <span class="eyebrow"><span class="dot"></span> ${eyebrow}</span>
    <h2>${title}</h2>
  `;

  const grid = document.getElementById("incluyeGrid");
  grid.innerHTML = items
    .map((group) => {
      const isYes = group.type === "yes";
      const heading = isYes ? "Incluye" : "No incluye";
      return `
      <div class="info-card">
        ${group.image ? `<div class="ref-img" role="img" aria-label="Referencia visual"></div>` : ''}
        <h3>${heading}</h3>
        <ul>
          ${group.items
            .map((item) => {
              const icon =
                isYes ?
                  '<svg class="icon-yes" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                : '<svg class="icon-no" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
              return `<li>${icon} ${item}</li>`;
            })
            .join("")}
        </ul>
      </div>
    `;
    })
    .join("");
};

const renderTiempos = (data) => {
  const { eyebrow, title, items } = data.tiempos;
  document.getElementById("tiemposHead").innerHTML = `
    <span class="eyebrow"><span class="dot"></span> ${eyebrow}</span>
    <h2>${title}</h2>
  `;
  document.getElementById("tiemposTimeline").innerHTML = items
    .map(
      (item) => `
    <div class="tl-card">
      <div class="n">${item.n}</div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `,
    )
    .join("");
};

const renderTerminos = (data) => {
  const { eyebrow, title, items } = data.terminos;
  document.getElementById("terminosHead").innerHTML = `
    <span class="eyebrow"><span class="dot"></span> ${eyebrow}</span>
    <h2>${title}</h2>
  `;
  document.getElementById("terminosList").innerHTML =
    `<ol>${items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
};

const renderCTA = (data) => {
  const { title, description, buttons } = data.cta;
  const { items } = data.contacto;
  document.getElementById("ctaContent").innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="cta__actions">
      ${buttons.map((btn) => `<a class="btn btn-${btn.type}" href="${btn.href}">${btn.label}</a>`).join("")}
    </div>
  `;

  document.getElementById("ctaCard").innerHTML = `
    <h4>${data.contacto.title}</h4>
    <div class="cta__contact">
      ${items
        .map((item) => {
          if (item.type === "email") {
            return `
            <a href="${item.href}">
              <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14v10H3V5Z" stroke="currentColor" stroke-width="1.4"/><path d="m3 5 7 6 7-6" stroke="currentColor" stroke-width="1.4"/></svg>
              ${item.label}
            </a>
          `;
          } else if (item.type === "phone") {
            return `
            <a href="${item.href}">
              <svg viewBox="0 0 20 20" fill="none"><path d="M4 3h3l1.5 4L7 8.5a9 9 0 0 0 4.5 4.5L13 11.5l4 1.5v3a1 1 0 0 1-1 1C9 17 3 11 3 4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.3"/></svg>
              ${item.label}
            </a>
          `;
          } else {
            return `
            <div>
              <svg viewBox="0 0 20 20" fill="none"><path d="M10 2 3 6l7 4 7-4-7-4Z" stroke="currentColor" stroke-width="1.3"/><path d="M3 10l7 4 7-4M3 14l7 4 7-4" stroke="currentColor" stroke-width="1.3"/></svg>
              ${item.label}
            </div>
          `;
          }
        })
        .join("")}
    </div>
  `;
};

const renderFooter = (data) => {
  const footer = document.getElementById("footer").querySelector(".wrap");
  footer.innerHTML = `<p>${data.footer.line1}</p><p>${data.footer.line2}</p>`;
};

const init = async () => {
  try {
    const slug = getSlug() || "udit";
    const data = await fetchJSON(slug);

    renderHero(data);
    renderNavLinks(data);
    renderServicios(data);
    renderPrecios(data);
    renderIncluye(data);
    renderTiempos(data);
    renderTerminos(data);
    renderCTA(data);
    renderFooter(data);

    window.dispatchEvent(new Event("propuesta:ready"));
  } catch (error) {
    console.error("Error cargando propuesta:", error);
    document.body.innerHTML = `
      <div style="padding: 60px 20px; text-align: center;">
        <h2>Propuesta no encontrada</h2>
        <p>Revisa la URL o regresa a la página de inicio.</p>
        <a href="/" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #0b3249; color: white; border-radius: 999px; text-decoration: none;">Volver al inicio</a>
      </div>
    `;
  }
};

init();
