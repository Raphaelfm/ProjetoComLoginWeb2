const { getAll } = require("../execQuery");

async function listarAlunos() {
  try {
    const result = await getAll("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = listarAlunos;
