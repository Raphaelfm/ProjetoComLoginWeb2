const execQuery = require("../execQuery");

async function deletarAluno(aluno) {
  try {
    const resultado = await execQuery(
      `DELETE FROM alunos WHERE alunos.nome = '${aluno.nome}'`
    );
  } catch (erro) {
    console.log(erro);
  }
}

module.exports = deletarAluno;
