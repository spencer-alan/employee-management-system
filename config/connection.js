const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.connection({
  host: localhost,
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database at " + connection.threadId + "\n");
  start();
});

module.exports = connection;