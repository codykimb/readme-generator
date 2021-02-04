// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?" + "(Required)",
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
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name?" + "(Required)",
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
        message: "Please write a short description of your project:"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "Apache", "GPL" ]
    },
    {
        type: "input",
        name: "installCommand",
        message: "What command should be run to install your dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "testCommand",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "using",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/README.md', fileName, data, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Your README.md file has been created!'
        });
      });
    };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
