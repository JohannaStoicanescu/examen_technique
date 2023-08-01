const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bonjour !");
});

app.get("/hello", (req, res) => {
  const nom = req.query.nom;
  if (nom) {
    res.send(`Bonjour ${nom} !`);
  } else {
    res.send("Quel est votre nom ?");
  }
});

app.post("/chat", (req, res) => {
  const message = req.body.msg;
  let response;
  if (message) {
    message === "ville"
      ? (response = "Nous sommes à Paris")
      : message === "météo"
      ? (response = "Il fait beau")
      : (response = "Message non reconnu");
  }
  res.json({ response });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Il y a un problème.");
  } else {
    console.log(`Serveur sur le port ${port}.`);
  }
});
