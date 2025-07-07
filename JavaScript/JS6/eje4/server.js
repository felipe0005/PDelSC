import express from "express";
import { PELICULAS } from "./pelicula";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/peliculas", (req, res) => {
  res.status(200).json({ message: "todas las peliculas", pokemons: PELICULAS });
});

app.post("/api/peliculas", (req, res) => {
  try {
    const pelicula = req.body;

    if (!pelicula) {
      return res.status(406).json({ message: "movie is required" });
    }

    PELICULAS.push(pelicula);
    res.status(201).json({ message: "Saved succesfully", pelicula: pwlicula });
  } catch (err) {
    res.status(500).json({ message: "Error saving movie" });
  }
});

app.post("/api/pokemons/:id", (req, res) => {
  try {
    const { id } = req.params;
    const pelicula = PELICULAS.filter((peli) => peli.id === parseInt(id));
    if (!pelicula) {
      return res.status(404).json({ message: "movie not found" });
    }
    res.status(200).json({ message: "movie found", pelicula: pelicula });
  } catch (err) {
    res.status(500).json({ message: "Error finding movie" });
  }
});
