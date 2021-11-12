const licenses = require("./licenses");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  switch (license) {
    case licenses.Apache:
      return (badge = "https://img.shields.io/badge/s-Apache_2.0-blue.svg");

    case licenses.Boost:
      badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    case licenses.Eclipse:
      badge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
      break;
    case licenses.MIT:
      badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case licenses.WTFPL:
      badge = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
      break;
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case licenses.Apache:
      link = "https://opensource.org/licenses/Apache-2.0";
      break;
    case licenses.Boost:
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case licenses.Eclipse:
      link = "https://opensource.org/licenses/EPL-1.0";
      break;
    case licenses.MIT:
      link = "https://opensource.org/licenses/MIT";
      break;
    case licenses.WTFPL:
      link = "http://www.wtfpl.net/about/";
      break;
    default:
      link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("license", license);
  if (renderLicenseBadge(license) && renderLicenseLink(license)) {
    console.log("about to return");
    return `[![License: ${license}](${renderLicenseBadge(
      license
    )})](${renderLicenseLink(license)})`;
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  
  ${data.projectDescription}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#contributing)
  - [Questions](#questions)

  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  Provide instructions and examples for use.
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  The last section of a high-quality README file is the license.
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Contributing
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide
  
  ## Questions

`;
}
module.exports = generateMarkdown;
