DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments(
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles(
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL(15,2) NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id),
  PRIMARY KEY (id)
);

CREATE TABLE employees(
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  PRIMARY KEY (id)
);