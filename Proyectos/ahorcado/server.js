import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join("public"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
