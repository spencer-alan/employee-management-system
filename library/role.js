const Department = require("./department");

const connection = require("../config/connection.js");
const Department = require("./department.js");

class Role extends Department {
  constructor(id, title, salary, department_id) {
    const department_id = Department.id;

    super(department_id);
    this.id = id;
    this.title = title;
    this.salary = salary;
  };

  getAllRoles() {
    connection.query("SELECT * FROM roles", function(err, result) {
      if (err) throw err;
      return result;
    });
  };

  viewRole(id) {
    connection.query(
      "SELECT * FROM roles WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  addRole(data) {
    connection.query("INSERT INTO roles SET ?", data, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  updateRole(id, data) {
    connection.query(
      "UPDATE roles SET ? WHERE ?",
      [
        {
          data
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

  deleteRole(id) {
    connection.query(
      "DELETE FROM roles WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };
};

module.exports = Role;