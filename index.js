const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Home Page Route"));

app.get("/about", (req, res) => res.send("Acerca de que!!"));

app.get("/portfolio", (req, res) =>
  res.send("De que portafolio estás hablando!!")
);

app.get("/contact", (req, res) => res.send("Esta es la página de contacto"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
