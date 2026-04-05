document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const respuesta = document.getElementById("respuesta");

  // Expresión regular para validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validaciones
  if (nombre === "" || correo === "" || mensaje === "") {
    respuesta.innerText = "⚠️ Todos los campos son obligatorios";
    respuesta.style.color = "red";
    return;
  }

  if (!emailRegex.test(correo)) {
    respuesta.innerText = "⚠️ Ingresa un correo válido";
    respuesta.style.color = "red";
    return;
  }

  if (mensaje.length < 10) {
    respuesta.innerText = "⚠️ El mensaje debe tener al menos 10 caracteres";
    respuesta.style.color = "red";
    return;
  }

  // Si todo está correcto
  respuesta.innerText = "✅ Mensaje enviado correctamente";
  respuesta.style.color = "green";

  // Limpiar formulario
  document.getElementById("formulario").reset();
});