// inquirer navigator
export const menuList = [
    {
        type: "list",
        name: "prompts",
        message: "Choice next action:",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Update an existing employee's role",
          "Exit",
        ],
    },
  ];