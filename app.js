const inquirer = require("inquirer");
const cTable = require("console.table");
const Employee = require("./library/employee.js");
const Role = require("./library/role.js");
const Department = require("./library/department.js");


function getAllEmployees() {
  const employee = new Employee();
  const employees = employee.getAllEmployee();
  console.table(employees);
};

function getAllRoles() {
  const role = new Role();
  const roles = role.getAllRoles();
  console.table(roles);
};

function getAllDepartments() {
  const department = new Department();
  const departments = department.getAllDepartments();
  console.table(departments)
};

function init() {
  inquirer.prompt(
    {
      name: "init",
      type: "list",
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
      ],
  }).then((answer) => {
    switch(answer.init) {
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
        break;
      default:
        console.log("Defualt case");
        break;
}
  }).catch(function(error) {
    if (error) throw error;
  })
};

// Start application
init();