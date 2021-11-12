const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenses.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return [
    {
      type: "input",
      message: "What is your project title:",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please provide a short description of the project:",
      name: "projectDescription",
    },
    {
      type: "list",
      message: "What is your project license",
      name: "license",
      choices: [
        licenses.Apache,
        licenses.Boost,
        licenses.Eclipse,
        licenses.MIT,
        licenses.WTFPL,
      ],
    },
  ];
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions()).then((answers) => {
    writeToFile("./output/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
