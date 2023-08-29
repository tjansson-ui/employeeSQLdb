DROP DATABASE IF EXISTS company_employee_db;
CREATE DATABASE company_employee_db;

USE company_employee_db;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30), 
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INTEGER, 
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30), 
    role_id INTEGER NOT NULL, 
    manager_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
); 
