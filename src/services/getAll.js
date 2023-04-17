const openDB = require("../database/sqlite");

async function getAll() {
  try {
    const db = await openDB();
    const result = await db.get("SELECT nome FROM alunos");
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getAll;
