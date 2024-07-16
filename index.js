// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of your project:",
    name: "titleInput",
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "descriptionInput",
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "installationInput",
  },
  {
    type: "input",
    message: "Enter usage information:",
    name: "usageInput",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    name: "licenseInput",
    choices: ["MIT", "Apache", "GPL", "BSD"],
  },
  {
    type: "input",
    message: "Enter contributing information:",
    name: "creditInput",
  },
  {
    type: "input",
    message: "Enter testing details:",
    name: "testInput",
  },
  {
    type: "input",
    message: "Enter your GhitHub username:",
    name: "questionInput1",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "questionInput2",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log("README generated successfully!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const {
      titleInput,
      descriptionInput,
      installationInput,
      usageInput,
      licenseInput,
      creditInput,
      testInput,
      questionInput1,
      questionInput2,
    } = response;

    const licenseBadge = `[![License: ${licenseInput}](https://img.shields.io/badge/License-${licenseInput}-brightgreen.svg)](https://opensource.org/licenses/${licenseInput})`;

    const readmeContent = `
# ${titleInput}
### ${licenseBadge}

## Description
${descriptionInput}

## Table of Contents
- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Tests]
- [Questions] 

## Installation
${installationInput}

## Usage
${usageInput}

## License
This application is covered under the ${licenseInput} license.

## Contributing
${creditInput}

## Tests
${testInput}

## Questions
For additional questions, please contact https://github.com/${questionInput1} or email ${questionInput2}. Thank you.
`;

    writeToFile("README2.md", readmeContent);
  });
}

// Call the init function to start the application
init();
