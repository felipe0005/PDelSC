import express from "express";
import cors from "cors";
import { connectDB } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/usuarios", async (req, res) => {
  const DB = await connectDB();
  if (!DB)
    return res
      .status(500)
      .json({ error: "No se pudo conectar a la base de datos" });
  const [rows] = await DB.execute("SELECT * FROM usr");
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
