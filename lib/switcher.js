import * as switcher from "./helpers.js"

export const switchFunc = (answer) => {
  switch (answer) {
    case "View all departments":
        switcher.viewAllDepartments();
    break;
  
    case "View all roles":
        switcher.viewAllRoles();
    break;
  
    case "View all employees":
        switcher.viewAllEmployees();
    break;
  
//TODO All below cases
    case "Add a new department":
        switcher.addDepartment();
    break;
  
    case "Add a new role":
        switcher.addRole();
    break;
  
    case "Add a new employee":
        switcher.addEmployee();
    break;
  
    case "Update an existing employee's role":
        switcher.updateEmployeeRole();
    break;
  
    case "Exit":
        switcher.exit();
    break;
  }
}