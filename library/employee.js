const connection = require("../config/connection.js");
// const Role = require("./role.js");

module.exports = class Employee {
  // constructor(id, first_name, last_name, role_id, manager_id) {
  //   const role_id = Role.id;
  //   super(role_id);
  //   this.id = id;
  //   this.first_name = first_name;
  //   this.last_name = last_name;
  //   this.manager_id = manager_id;
  // };

  getAllEmployee() {
    let query = "SELECT e.id, e.first_name, e.last_name, r.title, e.manager_id, d.name as Department, r.salary ";
    query += "FROM ((employees e INNER JOIN roles r ON e.role_id = r.id) INNER JOIN departments d ON r.department_id = d.id)";
    connection.query(query, function(err, results) {
      if (err) throw err;
      return results;
    });
  };

  viewEmployee(id) {
    let query = "SELECT e.id, e.first_name, e.last_name, r.title, e.manager_id, d.name as Department, r.salary ";
    query += "FROM ((employees e INNER JOIN roles r ON e.role_id = r.id) INNER JOIN departments d ON r.department_id = d.id) ";
    query += "WHERE ?";
    connection.query(query, { id: id }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  addEmployee(data) {
    connection.query("INSERT INTO employess SET ?",{ data }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  updateEmployeeRole(id, role_id) {
    connection.query("UPDATE employees WHERE ? SET ?",[{ role_id: role_id }, { id: id }], function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };

  deleteEmployee(id) {
    connection.query("DELETE FROM employees WHERE ?",{ id: id }, function(err, result) {
        if (err) throw err;
        return result;
      }
    );
  };
};

