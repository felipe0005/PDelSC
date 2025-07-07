const express = require("express");
const app = express();
const path = require("path")
const PORT = 3000
const objetos = []

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())


app.get("/", (req,res)  => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/objetos", (req, res) => {
  res.json(objetos);
});

app.post("/objetos", (req, res) => {
  const {
    nombre,
    apellido,
    sexo,
    email,
    nacimiento,
    dni,
    estadoCivil,
    telefono,
    tieneHijos,
    cantidadHijos,
    nacionalidad
  } = req.body;

  if (
    !nombre ||
    !apellido ||
    !sexo ||
    !email ||
    !nacimiento ||
    !dni ||
    !estadoCivil ||
    !telefono ||
    typeof tieneHijos === "undefined" ||
    typeof cantidadHijos === "undefined" ||
    !nacionalidad
  ) {
    return res.status(400).json({ error: "Faltan campos" });
  }

  objetos.push({
    nombre,
    apellido,
    sexo,
    email,
    nacimiento,
    dni,
    estadoCivil,
    telefono,
    tieneHijos,
    cantidadHijos,
    nacionalidad
  });

  res.status(201).json({ message: "Objeto agregado" });
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});