document.getElementById("no-btn").addEventListener("click", function() {
  document.getElementById("si-btn").style.fontSize = "20px";
  document.getElementById("imagen").src = "imagen_no.jpg"; // Cambiar la imagen cuando la respuesta es "No"
});

document.getElementById("si-btn").addEventListener("click", function() {
  document.getElementById("imagen").src = "imagen_si.jpg"; // Cambiar la imagen cuando la respuesta es "Sí"
});