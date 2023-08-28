import mysql from "mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root", //default user
  password: "root", //default pass
  database: "company_employee_db", //database name
})