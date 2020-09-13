const connection = require("../config/connection.js");

class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  };

  getAllDepartments() {
    connection.query("SELECT * FROM departments", function(err, results) {
      if (err) throw err;
      return results;
    });
  };

  viewDepartment(id) {
    connection.query(
      "SELECT * FROM departments WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  addDepartment(name) {
    connection.query(
      "INSERT INTO departments SET ?",
      {
        name: name
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  updateDepartment(id, name) {
    connection.query(
      "UPDATE department SET ? WHERE ?",
      [
        {
          name: name
        },
        {
          id: id
        }
      ], function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  deleteDepartment(id) {
    connection.query(
      "DELETE FROM departments WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };
};

module.exports = Department;