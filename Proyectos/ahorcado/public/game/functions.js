let palabra = "";
let oculta = [];
let errores = 0;
const maxErrores = 6;

const $btnJugar = document.getElementById("btnJugar");
const $btnVerificar = document.getElementById("btnVerificar");
const $game = document.getElementById("game");
const $inputLetra = document.getElementById("letra");
const $pOculta = document.getElementById("palabraOculta");

async function obtenerPalabra() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?lang=es"
  );
  const data = await response.json();
  return data[0].toLowerCase();
}

async function IniciarJuego() {
  palabra = await obtenerPalabra();
  oculta = Array(palabra.length).fill("_");
  errores = 0;
  actualizarVista();
}

function actualizarVista() {
  $pOculta.textContent = oculta.join(" ");
}

function verificarPalabra() {
  const letra = $inputLetra.value.toLowerCase();
  $inputLetra.value = "";
  if (!letra) return;

  let acierto = false;
  palabra.split("").forEach((l, i) => {
    if (l === letra && oculta[i] === "_") {
      oculta[i] = letra;
      acierto = true;
    }
  });

  if (!acierto) errores++;

  actualizarVista();

  if (!oculta.includes("_")) {
    alert("¡Ganaste! 🎉");
    $game.style.display = "none";
  } else if (errores >= maxErrores) {
    alert(`Perdiste 😢. La palabra era "${palabra}"`);
    $game.style.display = "none";
  }
}

$btnJugar.addEventListener("click", () => {
  $game.style.display = "block";
  IniciarJuego();
  $inputLetra.focus();
});

$btnVerificar.addEventListener("click", verificarPalabra);

$inputLetra.addEventListener("keyup", (e) => {
  if (e.key === "Enter") verificarPalabra();
});
