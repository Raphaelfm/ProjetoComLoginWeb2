const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function openDB() {
  return open({
    filename: "./src/database/database.db",
    driver: sqlite3.Database,
  });
}

module.exports = openDB;
