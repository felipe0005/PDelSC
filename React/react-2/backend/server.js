import express from 'express';
import { connectDB } from "./connect.js";
import path from 'path';

const app = express();
const PORT = 3000;


app.use(express.static(path.join(process.cwd(), '../frontend/dist')));

app.get('/api/usuarios', async (req, res) => {
    const DB = await connectDB();
    if (!DB) return res.status(500).json({ error: 'No se pudo conectar a la base de datos' });
    const [rows] = await DB.execute("SELECT * FROM usr");
    res.json(rows);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), '../frontend/dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
