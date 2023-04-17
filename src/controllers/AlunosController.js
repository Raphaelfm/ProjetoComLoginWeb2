const deletarAluno = require("../services/AlunosServices/deletarAluno");
const inserirAluno = require("../services/AlunosServices/inserirAluno");
const listarAlunos = require("../services/AlunosServices/listarAlunos");

class AlunosController {
  constructor() {}

  async getAlunos(req, res) {
    const alunos = await listarAlunos();
    console.log(alunos);
    res.end(JSON.stringify(alunos));
  }

  async inserirAluno(req, res) {
    const aluno = req.body;
    console.log(aluno.nome);
    const alunoInserido = await inserirAluno(aluno);
    res.end(JSON.stringify(aluno));
  }

  async excluirAluno(req, res) {
    const aluno = req.body;
    const alunoExcluido = await deletarAluno(aluno);
    res.end(alunoExcluido);
  }
}

module.exports = new AlunosController();
