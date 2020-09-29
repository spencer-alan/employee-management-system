//const Employee = require("./library/employee.js");
//const Role = require("./library/role.js");
//const Department = require("./library/department.js");
const inquirer = require("inquirer");
const cTable = require("console.table");
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

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to Database at " + connection.threadId + "\n");
// });

// Question variables



const startQuestion = [
  {
    type: "list",
    name: "start",
    message: "What would you like to do?",
    choices: [
      {
        name: "View All Employees", 
        value: "viewAllEmployees"
      },
      {
        name: "View all Departments",
        value: "viewAllDepartments"
      },
      {
        name: "View all Roles",
        value: "viewAllRoles"
      },
      {
        name: "View Employee by ID",
        value: "viewEmployee"
      },
      {
        name: "View Department by ID",
        value: "viewDepartment"
      },
      {
        name: "View Role by ID",
        value: "viewRole"
      },
      {
        name: "Add Employee",
        value: "addEmployee"
      },
      {
        name: "Add Department",
        value: "addDepartment"
      },
      {
        name: "Add Role",
        value: "addRole"
      },
      {
        name: "Update Employee Role",
        value: "updateEmployeeRole"
      },
      {
        name: "Delete Employee",
        value: "deleteEmployee"
      },
      {
        name: "Delete Depeartment",
        value: "deleteDepartment"
      },
      {
        name: "Delete Role",
        value: "deleteRole"
      },
      {
        name: "Exit",
        value: "exit"
      }
    ]
  }
];

const getEmployeeId = [
  {
    type: "input",
    name: "employeeId",
    message: "What is the ID number of th employee you want to view?",
    validate: function(value) {
      if (isNaN(value)) {
        return "Please enter a valid number"
      } else {
        return true;
      };
    }
  }
];

const addEmployeeQuestions = [
  {
    type: "input",
    name: "firstName",
    message: "What is the first name of the employee?",
    validate: function(value) {
      if (value === null) {
        return "Please enter a valid name";
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the last name of the employee?",
    validate: function(value) {
      if (value === null) {
        return "Please enter a valid name";
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "roleId",
    message: "What is the role ID number of the employee?",
    validate: function(value) {
      if (value === null) {
        return "Please enter a valid name";
      } else {
        return true;
      }
    }
  }
];

const addDepartmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the department?",
    validate: function(value) {
      if (value === null) {
        return "Please enter a valid name";
      } else {
        return true;
      }
    }
  }
];

const addRoleQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the role?",
    validate: function(value) {
      if (value === null) {
        return "Please enter a valid title";
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary of the role?",
    validate: function(value) {
      if (isNaN(value)) {
        return "Please enter a valid number"
      } else {
        return true;
      };
    }
  },
  {
    type: "input",
    name: "departmentId",
    message: "What is the ID of the department for this role?",
    validate: function(value) {
      if (isNaN(value)) {
        return "Please enter a valid number"
      } else {
        return true;
      };
    }
  }
];

const getDepartmentQuestions = [
  {
    type: "input",
    name: "id",
    message: "What is the id of the department you want to view?",
    validate: function(value) {
      if (isNaN(value)) {
        return "Please enter a valid number"
      } else {
        return true;
      };
    }
  }
];

const getRoleQuestions = [
  {
    type: "input",
    name: "roleId",
    meassage: "What is the id of the role you want to view?",
    validate: function(value) {
      if (isNaN(value)) {
        return "Please enter a valid number"
      } else {
        return true;
      };
    }
  }
];




// Functions to find information

function getAllDepartments() {
  connection.query("SELECT * FROM departments", function(err, results) {
    if (err) throw err;
    console.table(results);  
    console.log("returning to start");
    start();
  });
};

function getAllEmployees() {
  let query = "SELECT e.id, e.first_name, e.last_name, r.title, e.manager_id, d.name as Department, r.salary ";
  query += "FROM ((employees e INNER JOIN roles r ON e.role_id = r.id) ";
  query += "INNER JOIN departments d ON r.department_id = d.id)";
  connection.query(query, function(err, results) {
  if (err) throw err;
  console.table(results);
  start();
  });
};

function getAllRoles() {
  let query = "SELECT r.id, r.title, r.salary, d.name as department ";
  query += "FROM roles r INNER JOIN departments d ON (r.department_id = d.id)";
  connection.query(query, function(err, result) {
    if (err) throw err;
    console.table(result);
    start();
  });
};

function getDepartment() {
  inquirer.prompt(getDepartmentQuestions).then(function(answers) {
    let query = "SELECT * FROM departments WHERE ";
    query += `id = ${answers.id}`;
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
  });
};

function getEmployee() {
  inquirer.prompt(getEmployeeId).then(function(answer) {
    let query = "SELECT e.id, e.first_name, e.last_name, r.title, e.manager_id, d.name as Department, r.salary ";
    query += "FROM ((employees e INNER JOIN roles r ON e.role_id = r.id) INNER JOIN departments d ON r.department_id = d.id) ";
    query += `WHERE e.id = ${answer.employeeId}`;
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
  });
};

function getRole() {
  inquirer.prompt(getRoleQuestions).then(function (answer) {
    let query = "SELECT r.id, r.title, r.salary, d.name as department ";
    query += "FROM roles r INNER JOIN departments d ON (r.department_id = d.id) ";
    query += `WHERE r.id = ${answer.roleId}`;
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.table(result);
      start();
    });
  });
};

function addDepartment() {
  inquirer.prompt(addDepartmentQuestions).then(function(answers) {
    let query = "INSERT INTO departments SET ";
    query += `name = "${answers.name}"`;
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log("Department has been addded!");
      start();
    });
  });
};

function addEmployee() {
  inquirer.prompt(addEmployeeQuestions).then(function(answers) {
    let query = "INSERT INTO employees SET ";
    query += `first_name = "${answers.firstName}", `;
    query += `last_name = "${answers.lastName}", `;
    query += `role_id = ${answers.roleId}`;
    if (typeof answers.managerId === "number") {
      query += `, manager_id = "${answers.managerId}"`
    }
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log("Employee has been added!");
      start();
    });
  });
};

function addRole() {
  inquirer.prompt(addRoleQuestions).then(function(answers) {
  let query = "INSERT INTO roles SET ";
  query += `title = "${answers.title}", `;
  query += `salary = ${answers.salary}, `;
  query += `department_id = ${answers.departmentId}`
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log("Role has been added!");
      start();
    });
  })
}

function start() {
  inquirer.prompt(startQuestion).then(answers => {
    switch(answers.start) {
      case "viewAllEmployees":
        getAllEmployees();
        break;
      case "viewAllDepartments":
        getAllDepartments();
        break;
      case "viewAllRoles":
        getAllRoles();
        break;
      case "viewEmployee":
        getEmployee();
        break;
      case "viewDepartment":
        getDepartment();
        break;
      case "viewRole":
        getRole();
        break;
      case "addEmployee":
        addEmployee();
        break;
      case "addDepartment":
        addDepartment();
        break;
      case "addRole":
        addRole();
        break;
      case "deleteEmployee":
        deleteEmployee();
        break;
      case "deleteDepartment":
        deleteDepartment();
        break;
      case "deleteRole":
        deleteRole();
        break;
      case "updateEmployeeRole":
        updateEmployee();
        break;
      case "exit":
        console.log("Thank you and have a nice day!");
        connection.end();
        break;
      default:
        console.log("Defualt case");
        break;
}
  }).catch(function(error) {
    if (error) {
      return
    };
  });
};

// Start application
start();