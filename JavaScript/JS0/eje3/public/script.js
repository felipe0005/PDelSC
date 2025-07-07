const nombre = document.getElementById("nombre");
const apelli = document.getElementById("apellido");
const sexoRadios = document.getElementsByName("sexo");
const mail = document.getElementById("email");
const nacim = document.getElementById("nacimiento");
const dni = document.getElementById("documento");
const Scivil = document.getElementById("estado-civil");
const tel = document.getElementById("telefono");
const hijos = document.getElementById("hijos");
const Nhijos = document.getElementById("cantidad-hijos");
const nacionalidad = document.getElementById("nacionalidad");
const form = document.getElementById("form");
const parra = document.getElementById("warning");
const lista = document.getElementById("lista");

hijos.addEventListener("change", () => {
  if (hijos.checked) {
    Nhijos.classList.remove("hidden");
  } else {
    Nhijos.classList.add("hidden");
    Nhijos.value = "";
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre.value.length < 2) {
    warnings += `El nombre es inválido <br>`;
    entrar = true;
  }
  if (apelli.value.length < 2) {
    warnings += `El apellido es inválido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(mail.value)) {
    warnings += `El email es inválido <br>`;
    entrar = true;
  }
  if (tel.value.length < 4) {
    warnings += `El teléfono es inválido <br>`;
    entrar = true;
  }
  if (dni.value.length < 7) {
    warnings += `El DNI es inválido <br>`;
    entrar = true;
  }
  if (hijos.checked && (!Nhijos.value || Nhijos.value < 1)) {
    warnings += `Debe indicar la cantidad de hijos <br>`;
    entrar = true;
  }
  if (entrar) {
    parra.innerHTML = warnings;
  } else {
    parra.innerHTML = "Enviado";

    await sendData({
      nombre: nombre.value,
      apellido: apelli.value,
      sexo: sexo.value,
      email: mail.value,
      nacimiento: nacim.value,
      dni: dni.value,
      estadoCivil: Scivil.value,
      telefono: tel.value,
      tieneHijos: hijos.checked,
      cantidadHijos: hijos.checked ? Nhijos.value : 0,
      nacionalidad: nacionalidad.value,
    });
    await fetchData();

    nombre.value = "";
    apelli.value = "";
    sexo.value = "";
    mail.value = "";
    nacim.value = "";
    dni.value = "";
    Scivil.value = "";
    tel.value = "";
    hijos.checked = false;
    Nhijos.value = "";
    Nhijos.classList.add("hidden");
    nacionalidad.value = "";
  }
});

async function fetchData() {
  try {
    const response = await fetch("/objetos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      lista.innerHTML = data
        .map(
          (item) =>
            `<li class="border-b-2 border-violet-300 px-6 py-2 text-center w-full">
              ${item.nombre} - ${item.apellido} - ${item.sexo} - ${
              item.email
            } - ${item.nacimiento} - ${item.dni} - ${item.estadoCivil} - ${
              item.telefono
            } - ${item.tieneHijos ? "Sí" : "No"} - ${item.cantidadHijos} - ${
              item.nacionalidad
            }
            </li>`
        )
        .join("");
    }
  } catch (err) {
    console.log(err);
  }
}

async function sendData(data) {
  try {
    await fetch("/objetos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
}

fetchData();
