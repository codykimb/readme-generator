// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./utils/generateMarkdown.js");

// array of questions for user input
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
        name: "title",
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
        name: "installation",
        message: "What command should be run to install your dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"
    },
];

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        else {
          console.log('Your README.md file has been created!')
        };
      });
    };

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data =>{
        return renderLicenseBadge(data);
    })
    .then(data =>{
        return renderLicenseLink(data);
    })
    .then(data =>{
        return renderLicenseSection(data);
    })
    .then(data => {
        writeToFile("./dist/README.md", generateMarkdown(data));
    })
}

// call to initialize app
init();
