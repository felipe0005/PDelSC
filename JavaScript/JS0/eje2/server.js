const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const personas = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/sendData", (req, res) => {
  const { jugador, apellido, objeto, precio } = req.body;
  const persona = { jugador, apellido, objeto, precio };
  personas.push(persona);
  res.status(201).json({ message: "Persona agregada" });
});

app.get("/personas", (req, res) => {
  res.send(personas);
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
