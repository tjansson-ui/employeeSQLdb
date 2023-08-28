DROP DATABASE IF EXISTS company_employee_db;
CREATE DATABASE company_employee_db;

USE company_employee_db;

--Add department table --
CREATE TABLE department (

    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30), 
    PRIMARY KEY (id)
);

--Add role table --
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30), --to hold role title
    salary DECIMAL, --to hold role salary
    department_id INT, --to hold reference to department role belongs to
    PRIMARY KEY (id)
);

--Add employee table --
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30), --to hold employee first name
    last_name VARCHAR(30), --to hold employee last name
    role_id INTEGER, --to hold reference to employee role
    manager_id INTEGER DEFAULT NULL,-- to hold reference to another employee that is the manager of the current employee 
    PRIMARY KEY (id),
    ); 