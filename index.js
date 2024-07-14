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
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contributingInput",
  },
  {
    type: "input",
    message: "Enter test instructions:",
    name: "testsInput",
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
      contributingInput,
      testsInput,
    } = response;

    const readmeContent = `
# ${titleInput}

## Description
${descriptionInput}

## Installation
${installationInput}

## Usage
${usageInput}

## Contributing
${contributingInput}

## Tests
${testsInput}
`;

    writeToFile("README2.md", readmeContent);
  });
}

// Call the init function to start the application
init();