const execQuery = require("../execQuery");

async function inserirAluno(aluno) {
  try {
    const resultado = await execQuery(
      `INSERT into alunos VALUES ('${aluno.nome}')`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = inserirAluno;
