INSERT INTO department(name) VALUES ("Engineering");

INSERT INTO department(name) VALUES ("Sales");

INSERT INTO department(name) VALUES ("Finance");

INSERT INTO role(title, salary, department_id) VALUES ("Lead Engineer", "120000", "1");

INSERT INTO role(title, salary, department_id) VALUES ("Software Engineer", "100000", "1");

INSERT INTO role(title, salary, department_id) VALUES ("Junior Engineer", "90000", "1");

INSERT INTO role(title, salary, department_id) VALUES ("Lead Salesperson", "120000", "2");

INSERT INTO role(title, salary, department_id) VALUES ("Junior Salesperson", "90000", "2");

INSERT INTO role(title, salary, department_id) VALUES ("Lead Financial Advisor", "120000", "3");

INSERT INTO role(title, salary, department_id) VALUES ("JuniorFinancial Advisor", "90000", "3");

INSERT INTO manager(first_name, last_name,role_id) VALUES (
  "Jane",
  "Doe",
  1
);

INSERT INTO manager(first_name, last_name, role_id) VALUES (
  "Fred",
  "Jones",
  4
);

INSERT INTO manager(first_name, last_name, role_id) VALUES (
  "Maddie",
  "Smith",
  6
);

INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES (
  "John",
  "Doe",
  1,
  2
);

INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES (
  "Jimmy",
  "Doe",
  1,
  3
);

INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES (
  "Greg",
  "Jones",
  2,
  5
);

INSERT INTO employee(first_name, last_name, manager_id, role_id) VALUES (
  "Alex",
  "Smith",
  3,
  7
);