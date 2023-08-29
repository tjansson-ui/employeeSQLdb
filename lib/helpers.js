import inquirer from "inquirer";
import { connection } from "../db/connection.js"
import { prompter } from "./prompter.js";

export const viewAllDepartments = () => {
    connection.query(`SELECT * FROM departments`,
      function (err, results) {
        if (err) throw err
        console.table(results)
        prompter()
      })
  };// All Departments

export const viewAllRoles = () => {
    //joins the roles and department tables
    connection.query(`SELECT * FROM roles JOIN departments ON roles.department_id = departments.id`,
      function (err, results) {
        if (err) throw err
        console.table(results)
        prompter()
      })
  };// All Roles

export const viewAllEmployees = () => {    //joins the employees with department and tables
    connection.query(`SELECT * FROM employees 
    INNER JOIN roles ON employees.role_id = roles.id
    INNER JOIN departments ON roles.department_id = departments.id`,
      function (err, results, fields) {
        if (err) throw err
        console.table(results)
        prompter()
      })
  };// All Employees
  
export const addDepartment = () => {
    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the name of the department:"
      }
    ])
      .then(function (answer) {
        connection.query(`INSERT INTO departments (name) VALUES
      (?)`, [answer.name],
          function (err, results) {
            if (err) throw err
            console.log(`New department "${answer.name}" has been added`)
            prompter()
          })
      })
  }; //Department Adder
  
export const addRole = () => {
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "Enter title for role:"
      },
      {
        name: "salary",
        type: "input",
        message: "Salary? (no commas):"
      },
      {
        name: "depID",
        type: "input",
        message: "What is the ID for this role? (Should match the departments table):"
      },
    ])
      .then(function (answer) {
        connection.query(`INSERT INTO roles (title, salary, department_id) VALUES
      (?, ?, ?)`, [answer.title, answer.salary, answer.depID],
          function (err, results) {
            if (err) throw err
            console.log(`Role, ${answer.title}, has been added`)
            prompter()
          })
      })
  }; //Role Adder

export const addEmployee = () => {
    inquirer.prompt([
      {
        name: "fName",
        type: "input",
        message: "Add employee's legal First name:"
      },
      {
        name: "lName",
        type: "input",
        message: "Last name:"
      },
      {
        name: "roleID",
        type: "input",
        message: "Role ID (Reference roles table):"
      },
      {
        name: "managerID",
        type: "input",
        message: "Manager ID (Reference employees table):"
      },
    ])
      .then(function (answer) {
        connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
      (?, ?, ?, ?)`, [answer.fName, answer.lName, answer.roleID, answer.managerID],
          function (err, results) {
            if (err) throw err
            console.log(`Employee, ${answer.fName} ${answer.lName}, has been added`)
            prompter()
          })
      })
  }; //Employee Adder

export const updateEmployeeRole = () => {
    inquirer.prompt([
      {
        name: "employeeID",
        type: "input",
        message: "Which employee should we update (ID)?"
      },
      {
        name: "role",
        type: "input",
        message: "What is their new role? (ID)?"
      },
    ])
    .then(function(answer) {
      connection.query(`UPDATE employees SET role_id = ? WHERE id = ?`, [answer.role, answer.employeeID],
        function (err, results, fields) {
          if (err) throw err
          console.log(`Employee ${answer.employeeID} now has role ${answer.role}`)
          prompter()
        })
    })
  }; //Employee Updater

export const exit = () => {
    connection.end();
    console.log("Database no longer connected. Program ended.");
  };