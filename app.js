const express = require("express");
const app = express();
const sqlite = require("sqlite");
const { open } = sqlite;
const sqlite3 = require("sqlite3");
const path = require("path");
const dbPath = path.join(__dirname, "todoApplication.db");
let db = null;
app.use(express.json());

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:3000/");
    });
  } catch (err) {
    console.log(`DB error : ${err.message}`);
  }
};

initializeDBAndServer();

module.exports = app;

// get todos api

app.get("/todos/", async (request, response) => {
  const { status = "", priority = "", search_q = "" } = request.query;
  const query1 = `select * from todo where status='${status}';`;
  const query2 = `select * from todo where priority='${priority}';`;
  const query3 = `select * from todo where status='${status}' and priority='${priority}';`;
});
