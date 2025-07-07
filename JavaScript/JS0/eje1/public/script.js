const $lista = document.getElementById("lista");

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/obtener", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      $lista.innerHTML = data
        .map(
          (user) =>
            `<li class="border-b-2 border-violet-300 px-6 py-2 text-center w-full">${user.name}, ${user.surname}</li>`
        )
        .join("");
    }
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

async function sendData(data) {
  try {
    const response = await fetch("/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        surname: data.surname,
      }),
    });

    if (response.ok) {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const $name = document.getElementById("name");
  const $surname = document.getElementById("surname");

  if ($name.value.trim().lenght < 4) {
    showAlert("ingrese un nombre valido", "error");
    invalidInput($name);
    return;
  }

  if ($surname.value.trim().length < 4) {
    showAlert("ingrese un apellido valido", "error");
    return;
  }

  const data = { name: $name.value, surname: $surname.value };

  showAlert("dato ingresado validamente", "success");

  sendData(data);

  fetchData();
});

fetchData();

function invalidInput(input) {
  input.focus();
  input.classList.remove("bg-gray-300", "focus:outline-emerald-400");
  input.classList.add(
    "bg-red-200",
    "border-red-400",
    "text-red-500",
    "focus:outline-red-400"
  );
}

function showAlert(msg, type) {
  const $alerta = document.getElementById("alerta");
  const $mensaje = document.getElementById("mensaje");

  // Asigna el texto del mensaje
  $mensaje.textContent = msg;

  // Quita clases de estilos anteriores
  $alerta.classList.remove(
    "bg-red-200",
    "border-red-500",
    "bg-green-200",
    "border-green-500"
  );
  $mensaje.classList.remove("text-red-500", "text-green-500");

  // Aplica estilos según el tipo de mensaje
  if (type === "error") {
    $alerta.classList.add("bg-red-200", "border-red-500");
    $mensaje.classList.add("text-red-500");
  }

  if (type === "success") {
    $alerta.classList.add("bg-green-200", "border-green-500");
    $mensaje.classList.add("text-green-500");
  }

  // Muestra la alerta (animación hacia abajo)
  $alerta.classList.remove("translate-y-[-50px]");
  $alerta.classList.add("translate-y-[10px]");

  // Oculta la alerta después de 3 segundos
  setTimeout(() => {
    $alerta.classList.remove("translate-y-[10px]");
    $alerta.classList.add("translate-y-[-50px]");
  }, 3000);
}
