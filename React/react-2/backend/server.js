import express from "express";
import cors from "cors";
import { conn } from "./connect.js";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/api/usuarios", async (req, res) => {
  try {
    const [rows] = await conn.query("SELECT * FROM usr");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/api/usuarios", async (req, res) => {
  try {
    const { name, surname, direction, phone, personalphone, email, nacionalestate } = req.body;
    const [result] = await conn.query(
      `INSERT INTO usr (name, surname, direction, phone, personalphone, email, nacionalestate)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, surname, direction, phone, personalphone, email, nacionalestate]
    );
    const [newUser] = await conn.query("SELECT * FROM usr WHERE id = ?", [result.insertId]);
    res.json(newUser[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put("/api/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, direction, phone, personalphone, email, nacionalestate } = req.body;
    await conn.query(
      `UPDATE usr SET name=?, surname=?, direction=?, phone=?, personalphone=?, email=?, nacionalestate=? WHERE id=?`,
      [name, surname, direction, phone, personalphone, email, nacionalestate, id]
    );
    const [updatedUser] = await conn.query("SELECT * FROM usr WHERE id = ?", [id]);
    res.json(updatedUser[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.delete("/api/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await conn.query("DELETE FROM usr WHERE id = ?", [id]);
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});