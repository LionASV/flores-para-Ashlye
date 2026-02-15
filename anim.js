var lyrics = document.querySelector("#lyrics");

// Mensajes romanticos rotando en lugar de la letra sincronizada
var loveMessages = [
  "Te quiero mucho <3",
  "mi corazon siempre sera tuyo por siempre",
  "Eres mi lugar favorito.",
  "Contigo todo es mas bonito.",
  "Me haces muy feliz poder hablar contigo",
  "Siempre quiero estar contigo.",
  "Te pienso y no dejo de pensar en esos ojos hermosos y tiernos",
  "tu eres la historia mas bonita en mi vida",
  "no necesito nada mas que estar contigo"
];

var currentMessageIndex = 0;
lyrics.style.animation = "none";
lyrics.style.transition = "opacity 0.8s ease";

function showMessage(index) {
  lyrics.style.opacity = 0;
  setTimeout(function () {
    lyrics.textContent = loveMessages[index];
    lyrics.style.opacity = 1;
  }, 350);
}

showMessage(currentMessageIndex);
setInterval(function () {
  currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
  showMessage(currentMessageIndex);
}, 4000);

// Funcion titulo
// Oculta el titulo despues de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
