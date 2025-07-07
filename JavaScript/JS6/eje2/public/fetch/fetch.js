
const $form = document.getElementById("form");
const $createdUserContainer = document.getElementById("created-user");


async function sendData(endpoint, objectData, callback) {
  try {

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectData),
    });


    const data = await response.json();


    callback(response, data);
  } catch (err) {
  
    console.error(`Error enviando data ${err}`);
  } 
}


$form.addEventListener("submit", (e) => {
  e.preventDefault(); 


  const $nameInput = document.getElementById("name");
  const $emailInput = document.getElementById("email");


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = $nameInput.value;
  const email = $emailInput.value;

  if (!name || name.trim() == "") {
    console.error("Name is required");
    return;
  }

  if (!email || email.trim() == "") {
    console.error("Email is required");
    return;
  }

  if (!emailRegex.test(email)) {
    console.error("Invalid email");
    return;
  }


  sendData(
    "http://localhost:3000/users", 
    { name: name, email: email }, 
    (response, data) => {
      if (!data || !response) {
        console.error("Error fetching data");
        return;
      }

      $createdUserContainer.innerHTML = `Id del usuario creado: ${data.createdUser.id}`;
    }
  );
});
