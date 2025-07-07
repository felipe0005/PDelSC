import axios from "axios";

const ObtenerUsuarios = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (response.status === 200) {
      response.data.array.forEach((user) => {
        console.log(`Nombre: ${user.name}, Email: ${user.email}`);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

ObtenerUsuarios();
