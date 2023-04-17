require("dotenv").config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const express = require("express");
const roteadorAlunos = require("./routes/AlunosRoutes");
const roteadorStatic = require("./routes/StaticRoutes");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/public", express.static(`${__dirname}/public`));

app.use(roteadorAlunos);
app.use(roteadorStatic);

app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});
