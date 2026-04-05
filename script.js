document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    document.getElementById("respuesta").innerText = "Todos los campos son obligatorios";
    return;
  }

  document.getElementById("respuesta").innerText = "Mensaje enviado correctamente";
});