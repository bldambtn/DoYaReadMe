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
    message: "Enter credit and citations:",
    name: "creditInput",
  },
  {
    type: "input",
    message: "Enter licensing information:",
    name: "licensingInput",
  },
  {
    type: "input",
    message: "Enter feature description(s):",
    name: "featureInput",
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
      creditInput,
      licensingInput,
      featureInput,
    } = response;

    const readmeContent = `
# ${titleInput}

## Description
${descriptionInput}

## Table of Contents
- [Installation]
- [Usage]
- [Credits]
- [License]
- [Features]

## Installation
${installationInput}

## Usage
${usageInput}

## Contributing
${creditInput}

## License
${licensingInput}

## Features
${featureInput}
`;

    writeToFile("README2.md", readmeContent);
  });
}

// Call the init function to start the application
init();
