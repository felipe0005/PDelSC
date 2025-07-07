const $input = document.getElementById("name");
const $userContainer = document.getElementById("user");

async function searchUsers(endpoint, callback) {
  try {
    const response = await axios.get(endpoint);
    const data = await response.json();
    callback(data, response);
  } catch (err) {
    console.error(`Error fetching  ${err}`);
  } finally {
    console.info("Fetch finalizado");
  }
}

$input.addEventListener("input", () => {
  const searchTerm = $input.value.toLowerCase();

  searchUsers(
    "https://jsonplaceholder.typicode.com/users",
    (data, response) => {
      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
      $userContainer.innerHTML = filteredUsers
        .map((user) => `<p>${user.name}</p>`)
        .join("");
    }
  );
});
