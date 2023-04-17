const { Router } = require("express");
const BuildPath = require("../utils/BuildPath");

// Importe o middleware de login
const { LoginMiddleware } = require("../middlewares/AuthMiddleware");

const roteador = Router();

roteador.get("/", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});

roteador.get("/login", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/login.html`);
});

// Definir a rota de login
roteador.post("/login", LoginMiddleware);

roteador.get("/logado", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/logado.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/404.html`);
});

module.exports = roteador;
