# Node.js Professional README Generator

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project.

With this application, you can quickly and easily create a README file by using it's command-line to generate one. This allows the project creator to devote more time to working on the project.

This application is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). This application follows everything the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) states a high-quality, professional README should contain.

The application will be invoked by using the following command:

```bash
node index.js
```

## After invoking the application, the questions start:

<img src="./readme/node.png" alt="getting started" width="700"/>

## Screenshot of example output after answering all questions:

![example README.md](./readme/createdReadMe.png)

## Satisfied User Story

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Satisfied Acceptance Criteria

```
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

- Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

- Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

## Grading Requirements

This homework is graded based on the following criteria:

### Deliverables: 20%

- A sample README generated using the application must be submitted.

- Your GitHub repository containing your application code.

### Walkthrough Video: 27%

- A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

- The walkthrough video must demonstrate how a user would invoke the application from the command line.

- The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

- The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
