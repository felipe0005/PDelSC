const express = require("express");
const path = require("path");
const fs = require("node:fs");

const app = express();
PORT = 3000;
const NUMEROS = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public"));
});

app.post("/saveNumber", (req, res) => {
  const { numero } = req.body;
  console.log(numero);

  if (!numero) return;

  if (NUMEROS.length >= 20) {
    res
      .status(406)
      .json({ message: "Cantidad de numeros alcanzada", numeros: NUMEROS });
    return;
  }

  if (NUMEROS.length < 10) {
    NUMEROS.push(numero);
    res
      .status(200)
      .json({ message: `Faltan ${10 - NUMEROS.length}`, numeros: NUMEROS });
    return;
  }

  NUMEROS.push(numero);
  fs.writeFileSync("numeros.txt", JSON.stringify(NUMEROS), (err) => {
    if (err) console.log(err);
  });

  res
    .status(200)
    .json({ message: "Numero agregado con exito", numeros: NUMEROS });
});

app.get("/getNumbers", (req, res) => {
  res.send(NUMEROS);
});

app.listen(PORT, () => {
  console.log("server runing in http://localhost:" + PORT);
});
