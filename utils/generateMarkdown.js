// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return;
  }
  else if (license === "Apache") {
    return;
  }
  else if (license === "GPL") {
    return;
  }
  else if (!license) {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##  Description
  ${data.description}
  ---
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  ---
  ## Installation
  ###### Run ${data.installation} to install dependencies.
  ---
  ## Usage
  ###### ${data.usage}
  ---
  ## License
  ###### This project is licensed under the terms of ${data.license} license.
  ---
  ## Contributing
  ###### ${data.contribute}
  ---
  ## Tests
  ###### Run ${data.tests} to run tests.
  ---
  ## Questions
  ###### If you have any questions about this repo,
  ###### contact ${data.username} at ${data.email}
  ###### https://github.com/${data.username}/${data.title}
`;
}

module.exports = generateMarkdown;
