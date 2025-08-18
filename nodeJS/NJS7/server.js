import express from 'express';
import { connectDB } from "./connect.js";

const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send("hello world")
})

const main = async() => {
    const DB = await connectDB();
    if(!DB) return;
    const [rows] = await DB.execute("SELECT * FROM usr");
    console.log(rows);
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

main();