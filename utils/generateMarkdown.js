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
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#contributing)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}

  This material licensed under the ${
    data.license
  }. All rights not explicitly granted in the ${data.license} are reserved.
  
  ## Contributing
  
  ${data.contributions}

  ## Tests
  
  ${data.tests}
  
  ## Questions

  ${data.gitHubUserName}
  ${data.email}

`;
}
module.exports = generateMarkdown;
