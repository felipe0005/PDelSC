const ObtenerUsuarios = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (response.status === 200) {
      const data = await response.json();
      data.forEach((user) => {
        console.log(`Nombre: ${user.name}, Email: ${user.email}`);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

ObtenerUsuarios();
