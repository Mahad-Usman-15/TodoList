import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let input = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.cyan `What you want to do`,
            choices: ["add", "delete", "exit", "view", "update"]
        }
    ]);
    if (input.select === "add") {
        let input = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: chalk.cyan `What you want to add`,
                validate: (input) => {
                    if (input === "") {
                        return chalk.red `Please add something`;
                    }
                    return true;
                }
            }
        ]);
        todos.push(input.add);
        console.log(todos);
    }
    if (input.select === "delete") {
        let delete1 = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: chalk.cyan `What you want to delete`,
                choices: todos.map(item => item)
            }
        ]);
        let newtodo = todos.filter((item) => item !== delete1.delete);
        todos = [...newtodo];
        console.log(todos);
    }
    if (input.select === "exit") {
        console.log(chalk.bold `Exiting program....`);
        condition = false;
    }
    if (input.select === "view") {
        console.log(chalk.bold `****TODO_LIST****`);
        console.log(todos);
    }
    if (input.select === "update") {
        let update = await inquirer.prompt([
            {
                name: "update",
                type: "list",
                message: chalk.cyan `What you want to update`,
                choices: todos.map(item => item)
            }
        ]);
        let input = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: chalk.cyan `What you want to add`,
            }
        ]);
        let newtodo = todos.filter((item) => item !== update.update);
        todos = [...newtodo, input.add];
        console.log(todos);
    }
}
