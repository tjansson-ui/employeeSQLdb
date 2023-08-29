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
  };

export const viewAllRoles = () => {
    //joins the roles and department tables
    connection.query(`SELECT * FROM roles JOIN departments ON roles.department_id = departments.id`,
      function (err, results) {
        if (err) throw err
        console.table(results)
        prompter()
      })
  };

export const viewAllEmployees = () => {    //joins the employees with department and roles tables
    connection.query(`SELECT * FROM employees 
    INNER JOIN roles ON employees.role_id = roles.id
    INNER JOIN departments ON roles.department_id = departments.id`,
      function (err, results, fields) {
        if (err) throw err
        console.table(results)
        prompter()
      })
  };
  

export const exit = () => {
    connection.end();
    console.log("Database no longer connected. Program ended.");
  };