const connection = require("../config/connection.js");
const Role = require("./role.js");

class Employee extends Role {
  constructor(id, first_name, last_name, role_id, manager_id) {
    const role_id = Role.id;
    super(role_id);
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.manager_id = manager_id;
  };

  getAllEmployee() {
    connection.query("SELECT * FROM employees", function(err, results) {
      if (err) throw err;
      return results;
    });
  };

  viewEmployee(id) {
    connection.query(
      "SELECT * FROM employees WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  addEmployee(data) {
    connection.query(
      "INSERT INTO employess SET ?",
      {
        data
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  updateEmployeeRole(id, role_id) {
    connection.query(
      "UPDATE employees WHERE ? SET ?",
      [
        {
          role_id: role_id
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

  deleteEmployee(id) {
    connection.query(
      "DELETE FROM employees WHERE ?",
      {
        id: id
      }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };
};

module.exports = Employee;