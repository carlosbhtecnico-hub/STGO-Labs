document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    document.getElementById("respuesta").textContent = "⚠️ Por favor completa todos los campos.";
    document.getElementById("respuesta").style.color = "red";
    return;
  }

  document.getElementById("respuesta").textContent = "✅ Mensaje enviado correctamente. ¡Gracias!";
  document.getElementById("respuesta").style.color = "green";
  this.reset();
});