import inquirer from "inquirer"
import { menuList } from "./menu.js"

export const prompter = () => {
  inquirer.prompt(menuList)
    .then((answer) => {
      promptSwitch(answer.prompts)
    })
.catch((err) => {
  console.log(err)
})}