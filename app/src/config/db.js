const mysql = require("mysql");

const db = mysql.createConnection({
  host: "",
  user: "",
  password: "modernheena",
  database: "login_lecture",
});

db.connect();

module.exports = db;
