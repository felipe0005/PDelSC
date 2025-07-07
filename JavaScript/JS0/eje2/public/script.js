const $lista = document.getElementById("lista");

let data = null;

async function fecthData() {
  try {
    const response = await fetch("http://localhost:3000/personas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      data = await response.json();
      console.log();

      $lista.innerHTML = "";

      data.forEach((user) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td class="border border-violet-300 px-2 py-2 text-center">${user.jugador}</td>
          <td class="border border-violet-300 px-2 py-2 text-center">${user.nacionalidad}</td>
          <td class="border border-violet-300 px-2 py-2 text-center">${user.precio}</td>
          <td class="border border-violet-300 px-2 py-2 text-center">${user.objeto}</td>
        `;
        $lista.appendChild(fila);
      });
    }
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

async function sendData(data) {
  try {
    const response = await fetch("/sendData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jugador: data.jugador,
        nacionalidad: data.nacionalidad,
        objeto: data.objeto,
        precio: data.precio,
      }),
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const $jugador = document.getElementById("jugador");
  const $precio = document.getElementById("precio");
  const $objeto = document.getElementById("objeto");
  const $apellido = document.getElementById("apellido");

  if ($jugador.value.trim().length < 4) {
    invalidInput($jugador);
    return;
  }

  if (
    $precio.value.trim() == "" ||
    isNaN($precio.value) ||
    Number($precio.value) <= 0
  ) {
    invalidInput($precio);
    return;
  }

  if ($objeto.value.trim() == "") {
    invalidInput($objeto);
    return;
  }

  if ($apellido.value.trim() == "") {
    invalidInput($nacionalidad);
    return;
  }

  const data = {
    jugador: $jugador.value,
    precio: $precio.value,
    objeto: $objeto.value,
    nacionalidad: $apellido.value,
  };

  sendData(data);

  showAlert("Registro almacenado correctamente", "success");

  fecthData();

  $jugador.value = "";
  $precio.value = "";
  $apellido.value = "";
  $objeto.value = "";
});

function showAlert(msg, type) {
  const $alerta = document.getElementById("alerta");
  const $mensaje = document.getElementById("texto");

  $mensaje.textContent = msg;

  $alerta.classList.remove("bg-red-200");
  $mensaje.classList.remove("text-red-500");
  $alerta.classList.remove("bg-green-200", "border-green-500");
  $mensaje.classList.remove("text-green-500");

  if (type === "error") {
    $alerta.classList.add("bg-red-200");
    $mensaje.classList.add("text-red-500");
  }

  if (type === "success") {
    $alerta.classList.add("bg-green-200");
    $mensaje.classList.add("text-green-500");
  }

  $alerta.classList.remove("translate-y-[-50px]");
  $alerta.classList.add("translate-y-[10px]");

  setTimeout(() => {
    $alerta.classList.remove("translate-y-[10px]");
    $alerta.classList.add("translate-y-[-50px]");
  }, 3000);
}

function invalidInput(input) {
  input.focus();

  input.classList.remove("bg-violet-200", "focus:outline-violet-400");

  input.classList.add(
    "bg-red-200",
    "border-red-400",
    "text-red-500",
    "focus:outline-red-400"
  );

  showAlert("El nombre debe tener 4 caracteres", "error");
  return;
}
