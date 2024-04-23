#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        mesage: "select one of the operators to perform opration",
        type: "list",
        name: "operators",
        choices: ["addition", "subtraction", "multiplication", "division", "percentage"],
    },
]);
//conditional Statement
if (answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operators === "percentage") {
    console.log(answer.firstnumber % answer.secondnumber);
}
{
    ("please enter a vilad number");
}
