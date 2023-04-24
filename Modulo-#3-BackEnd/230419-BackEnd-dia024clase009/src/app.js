const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
  //res.send("Bienvenido a mi API");
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log("body: ", body);
  res.send("Hola: "+ body.name)
  //res.send("Me llamaste por POST");
});

app.put("/", (req, res) => {
  res.send("Me llamaste por PUT");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
