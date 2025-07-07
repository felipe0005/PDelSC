import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {});

app.get("/fetch", (req, res) => {
  res.sendFile("./public/fetch/index.html", { root: "." });
});

app.get("/axios", (req, res) => {
  res.sendFile("./public/axios/index.html", { root: "." });
});

app.listen(PORT, () => {
  console.log(`Server runing in http://localhost:${PORT}`);
});
