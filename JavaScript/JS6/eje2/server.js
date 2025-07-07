import express from "express";
const app = express();
const PORT = 3000;
const USERS = [];

app.use(express.json());
app.use(express.static("public"));

app.get("/fetch", (req, res) => {
  res.sendFile("public/fetch/index.html", { root: "." });
});


app.listen(PORT, () => {
  console.log(`Server runing in port http://localhost:${PORT}`);
});
