const $form = document.getElementById("form");
const $display = document.getElementById("display");
const $alert = document.getElementById("alert");

async function sendData(data, endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const contentType = response.headers.get("content-type");
    const body =
      contentType && contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    return {
      status: response.status,
      ok: response.ok,
      body: body,
    };
  } catch (err) {
    console.log(err);
  }
}

async function fetchData(endpoint, display) {
  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      display.innerHTML = data.map((el) => `<p>${el}</p>`);
    }
  } catch (err) {
    console.log(err);
  }
}

$form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const $input = document.getElementById("number");
  const $btn = document.getElementById("btn");
  const numero = $input.value;

  if (!numero) {
    showAlert("error", "Ingrese un numero valido");
    return;
  }

  const response = await sendData(
    { numero: numero },
    "http://localhost:3000/saveNumber"
  );

  if (response.status === 200) {
    $input.classList.remove("border-[#202020]", "text-[#202020]");
    $input.classList.add("border-[#bba712]", "text-[#bba712]");
    $btn.classList.remove("border-[#202020]", "text-[#202020]");
    $btn.classList.add("border-[#bba712]", "text-[#bba712]");
    showAlert("success", "Numero agregado con exito");

    setTimeout(() => {
      $input.classList.add("border-[#202020]", "text-[#202020]");
      $input.classList.remove("border-[#bba712]", "text-[#bba712]");
      $btn.classList.add("border-[#202020]", "text-[#202020]");
      $btn.classList.remove("border-[#bba712]", "text-[#bba712]");
    }, 2000);
  }

  $display.innerHTML = response.body.numeros.map((el) => `<p>${el}</p>`);
  $input.value = "";
});

function showAlert(type, msg) {
  $alert.classList.remove("-translate-y-10");
  $alert.classList.add("translate-y-5");
  $alert.textContent = msg;

  if (type === "error") {
    $alert.classList.add("bg-red-400");
  }
  if (type == "success") {
    $alert.classList.add("bg-[#bba712]");
  }

  setTimeout(() => {
    $alert.classList.remove("translate-y-5", "bg-red-500", "bg-[#bba712]");
    $alert.classList.add("-translate-y-10");
  }, 2000);
}

fetchData("http://localhost:3000/getNumbers", $display);
