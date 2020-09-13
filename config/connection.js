const mysql = require("mysql");
require('dotenv').config();
//console.log(process.env);


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.SQL_PWD,
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Database at " + connection.threadId + "\n");
});

module.exports = connection;