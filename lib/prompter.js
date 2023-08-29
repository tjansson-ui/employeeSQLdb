import inquirer from "inquirer"
import { menuList } from "./menu.js"
import { switchFunc } from "./switcher.js"

export const prompter = () => {
  inquirer.prompt(menuList)
    .then((answer) => {
        switchFunc(answer.prompts)
    })
.catch((err) => {
  console.log(err)
})}