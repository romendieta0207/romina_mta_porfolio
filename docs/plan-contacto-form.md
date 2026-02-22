# Plan de implementación: Sección Contacto (Estilo Spicy Agencia)

Este documento describe cómo implementar una sección de contacto inspirada en el diseño de Spicy Agencia Creativa: layout de dos columnas, inputs minimalistas con underline rojo, checkbox de privacidad y botón "ENVIAR" con borde rojo.

## Requisitos

- Layout de dos columnas:
  - **Columna izquierda**: información de contacto (teléfono, email, descripción).
  - **Columna derecha**: formulario con campos (nombre, email, mensaje).
- Campos:
  - Nombre (text input).
  - Email (email input).
  - Mensaje (textarea).
  - Checkbox de privacidad.
  - Botón "ENVIAR" con borde rojo.
- Estilo minimalista:
  - Inputs con borde inferior rojo (underline).
  - Sin borde superior/izquierda/derecha.
  - Tipografía en rojo (#D23F57 o similar).
- Validación simple con JS:
  - Campo nombre no vacío.
  - Email formato válido (regex básico).
  - Mensaje no vacío.
  - Checkbox de privacidad requerido.
  - Mensaje de error/éxito al usuario.
- Responsive: una columna en móviles.

## Estructura HTML sugerida

```html
<section class="contacto" id="contacto" data-observe>
  <div class="contacto__container">
    <!-- Columna Izquierda: Información -->
    <div class="contacto__info">
      <h2 class="contacto__heading">Contáctanos</h2>
      <p class="contacto__phone">(+34) 123 456 789</p>
      <p class="contacto__text">
        Siempre que quieras llámanos o escríbenos a
        <a href="mailto:contacto@example.com">contacto@example.com</a>, rellena
        el formulario y me pondré en contacto
      </p>
      <div class="contacto__social">
        <h3>Síguenos</h3>
        <p>Puedes seguirme y ver lo que hago.</p>
      </div>
    </div>

    <!-- Columna Derecha: Formulario -->
    <div class="contacto__form-wrapper">
      <form class="contacto__form" id="contactForm">
        <div class="form-group">
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre *"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            required
          />
        </div>

        <div class="form-group">
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Tu mensaje *"
            rows="6"
            required
          ></textarea>
        </div>

        <div class="form-group checkbox-group">
          <input type="checkbox" id="privacidad" name="privacidad" required />
          <label for="privacidad"
            >He leído y acepto la Política de Privacidad.</label
          >
        </div>

        <button type="submit" class="contacto__btn">Enviar</button>
        <div class="form-message" id="formMessage"></div>
      </form>
    </div>
  </div>
</section>
```

- Layout flexbox para dos columnas (o grid).
- Inputs sin label explícito; placeholder con asterisco (\*).
- Checkbox con label inline.
- Mensaje de resultado debajo del botón.

## CSS

Agregar a `_scrollytelling.css` o `_components.css`:

```css
.contacto {
  padding: var(--space-4xl) var(--space-2xl);
  background: white;
}

.contacto__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  max-width: 1200px;
  margin: 0 auto;
}

/* Columna izquierda */
.contacto__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.contacto__heading {
  font-size: var(--font-size-4xl);
  color: var(--color-secondary); /* rojo #D23F57 */
  font-weight: var(--font-weight-bold);
}

.contacto__phone {
  font-size: var(--font-size-xl);
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
}

.contacto__text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-secondary);
}

.contacto__text a {
  color: var(--color-secondary);
  text-decoration: underline;
}

.contacto__social h3 {
  font-size: var(--font-size-lg);
  color: var(--color-secondary);
  margin-top: var(--space-lg);
}

/* Formulario (columna derecha) */
.contacto__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group input,
.form-group textarea {
  padding: var(--space-md) 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--color-secondary);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  color: var(--color-secondary);
  transition: border-color var(--transition-base);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-secondary);
  opacity: 0.7;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-bottom-color: var(--color-primary-dark);
}

/* Checkbox de privacidad */
.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.checkbox-group input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-secondary);
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.checkbox-group label {
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  cursor: pointer;
}

/* Botón Enviar */
.contacto__btn {
  padding: var(--space-sm) var(--space-xl);
  background: transparent;
  border: 2px solid var(--color-secondary);
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
  align-self: flex-end;
  text-transform: uppercase;
}

.contacto__btn:hover {
  background: var(--color-secondary);
  color: white;
}

.form-message {
  margin-top: var(--space-md);
  padding: var(--space-md);
  border-radius: var(--radius-md);
  text-align: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.form-message.success {
  color: var(--color-success);
  opacity: 1;
}

.form-message.error {
  color: var(--color-error);
  opacity: 1;
}

/* Responsive: una columna en móvil */
@media (max-width: 768px) {
  .contacto__container {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .contacto__btn {
    align-self: center;
  }
}
```

- Inputs con borde inferior rojo (underline effect).
- Sin fondo, solo borde-bottom.
- Botón con borde rojo, sin fondo.
- Checkbox personalizado.
- Dos columnas que se adaptan a una en móviles.

## JavaScript

Agregar a `main.js`:

```js
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

    // Validación
    if (!nombre) {
      showMessage("El nombre es obligatorio", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showMessage("Ingresa un email válido", "error");
      return;
    }

    if (!mensaje) {
      showMessage("El mensaje no puede estar vacío", "error");
      return;
    }

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
```

- Validación de nombre, email (regex), mensaje y checkbox.
- Mensajes de error y éxito.
- Limpia el formulario tras éxito.

## Pasos

1. Insertar HTML del formulario en `index copy.html` (sección contacto).
2. Agregar CSS a `_scrollytelling.css`.
3. Agregar función JS a `main.js`.
4. Probar:
   - Campos vacíos muestran error.
   - Email inválido muestra error.
   - Checkbox no marcado muestra error.
   - Válido muestra éxito y limpia.
5. Verificar en mobile y desktop.

El plan está listo para revisión. No se implementará hasta obtener aprobación.
