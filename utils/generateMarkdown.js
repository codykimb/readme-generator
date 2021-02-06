// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (answers.license === "MIT") {
    answers.badge = "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
  }
  else if (answers.license === "Apache") {
    answers.badge =  "![License](https://img.shields.io/badge/License-Apache%202.0-red.svg)";
  }
  else if (answers.license === "GPL") {
    answers.badge =  "![License: GPL v3](https://img.shields.io/badge/license-GPLv3-green.svg)"
  }
  else {
    answers.badge =  "";
  }
  return answers;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  if (answers.license === "MIT") {
    answers.link = "(https://opensource.org/licenses/MIT)";
  }
  else if (answers.license === "Apache") {
    answers.link = "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if (answers.license === "GPL") {
    answers.link = "(https://gnu.org/licenses/gpl-3.0)"
  }
  else {
    answers.link = "";
  }
  return answers;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {
  if (!answers.license) {
    answers.lsection = "";
  }
  else {
    answers.lsection = `---
  ## License
  ##### This project is licensed under the terms of ${answers.license} license.
  ##### ${answers.link}`
  }
  return answers
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}

  ##  Description
  ##### ${data.description}
  ---
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ---
  ## Installation
  ##### Run ${data.installation} to install dependencies.
  ---
  ## Usage
  ##### ${data.usage}
  ${data.lsection}
  ---
  ## Contributing
  ##### ${data.contribute}
  ---
  ## Tests
  ##### Run ${data.tests} to run tests.
  ---
  ## Questions
  ##### If you have any questions about this repo, contact ${data.username} at ${data.email}
  ##### https://github.com/${data.username}
`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};