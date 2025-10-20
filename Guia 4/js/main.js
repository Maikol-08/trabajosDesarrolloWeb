// Interactividad con JavaScript puro

document.addEventListener("DOMContentLoaded", () => {
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const form = document.getElementById("login-form");
  const message = document.getElementById("login-message");

  // Mensaje de bienvenida
  btnBienvenida.addEventListener("click", () => {
    alert("¡Bienvenido a Café Aroma! 🌿 Esperamos que disfrutes tu visita.");
  });

  // Validación básica del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "barista" && pass === "cafe123") {
      message.classList.remove("text-danger");
      message.classList.add("text-success");
      message.textContent = "Inicio de sesión exitoso ☕ Bienvenido al sistema.";
    } else {
      message.classList.remove("text-success");
      message.classList.add("text-danger");
      message.textContent = "Usuario o contraseña incorrectos.";
    }
  });
});
