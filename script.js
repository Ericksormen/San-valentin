document.getElementById("no-btn").addEventListener("click", function() {
  document.getElementById("si-btn").style.fontSize = "24px"; // Cambiar tamaño del botón "Sí"
  document.getElementById("imagen").src = "https://imgur.com/oAefGJ8"; // Cambiar la URL de la imagen cuando la respuesta es "No"
});

document.getElementById("si-btn").addEventListener("click", function() {
  document.getElementById("imagen").src = "https://imgur.com/xFK91Ex"; // Cambiar la URL de la imagen cuando la respuesta es "Sí"
});
