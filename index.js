const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenses.js");
const inquirer = require("inquirer");
const fs = require("fs");

// Question to populate README
const questions = () => {
  return [
    {
      type: "input",
      message: "What is your project title:",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a short description of the project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Please provide usage:",
      name: "usage",
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
    {
      type: "input",
      message:
        "Please provide a list of gitHub usernames who contributed (separated by commas):",
      name: "contributing",
    },
    {
      type: "input",
      message: "Please describe the projects tests:",
      name: "tests",
    },
    {
      type: "input",
      message: "Please provide your gitHub username:",
      name: "gitHubUserName",
    },
    {
      type: "input",
      message: "Please provide your email address for questions:",
      name: "email",
    },
  ];
};

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions()).then((answers) => {
    writeToFile("./output/README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
