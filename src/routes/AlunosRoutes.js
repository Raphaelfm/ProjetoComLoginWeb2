const { Router } = require("express");
const AlunosController = require("../controllers/AlunosController");
const {
  AuthMiddleware,
  ManagerMiddleware,
} = require("../middlewares/AuthMiddleware");

const roteador = Router();

roteador.get(
  "/alunos",
  AuthMiddleware,
  ManagerMiddleware,
  AlunosController.getAlunos
);

roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);

module.exports = roteador;
