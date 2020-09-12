INSERT INTO department(name) VALUES ("Engineering");

INSERT INTO department(name) VALUES ("Sales");

INSERT INTO department(name) VALUES ("Finance");

INSERT INTO role(title, salary, department_id) VALUES ("Lead Engineer", 120000.00, 1);

INSERT INTO role(title, salary, department_id) VALUES ("Software Engineer", 100000.00, 1);

INSERT INTO role(title, salary, department_id) VALUES ("Junior Engineer", 90000.00, 1);

INSERT INTO role(title, salary, department_id) VALUES ("Lead Salesperson", 120000.00, 2);

INSERT INTO role(title, salary, department_id) VALUES ("Junior Salesperson", 90000.00, 2);

INSERT INTO role(title, salary, department_id) VALUES ("Lead Financial Advisor", 120000.00, 3);

INSERT INTO role(title, salary, department_id) VALUES ("JuniorFinancial Advisor", 90000.00, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Jane",
  "Doe",
  1
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Fred",
  "Jones",
  4
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Maddie",
  "Smith",
  6
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "John",
  "Doe",
  2,
  1
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Jimmy",
  "Doe",
  3,
  1
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Greg",
  "Jones",
  5,
  2
);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (
  "Alex",
  "Smith",
  7,
  3
);