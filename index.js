// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is your GitHub username?", "What is your email address?", "What is your project's name?", "Please write a short description of your project:", "What kind of license should your project have?", "What command should be run to install your dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];

const promptUser = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: questions[0] + "(Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your username!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: questions[1]
        },
        {
            type: "input",
            name: "projectName",
            message: questions[2] + "(Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name of your project!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: questions[3]
        },
        {
            type: "list",
            message: questions[4],
            name: "license",
            choices: ["MIT", "Apache", "GPL" ]
        },
        {
            type: "input",
            name: "installCommand",
            message: questions[5],
            default: "npm i"
        },
        {
            type: "input",
            name: "testCommand",
            message: questions[6],
            default: "npm test"
        },
        {
            type: "input",
            name: "using",
            message: questions[7]
        },
        {
            type: "input",
            name: "contributing",
            message: questions[8]
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();
