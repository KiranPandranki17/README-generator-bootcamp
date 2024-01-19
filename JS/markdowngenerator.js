// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  
  To install dependencies, run these commands:
     
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  * Name: ${data.name}
  * Email: ${data.email}
  * GitHub: [${data.creator}](https://github.com/${data.creator}/)
  
  ${renderLicenseSection(data.license)}
  `;
  }


  // Function to render the license badge
function renderLicenseBadge(license) {
    return license !== "None" ? `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)` : "";
  }
  
  // Function to render the license link
  function renderLicenseLink(license) {
    return license !== "None" ? `\n* [License](#license)\n` : "";
  }
  
  // Function to render the license section in the README
  function renderLicenseSection(license) {
    return license !== "None"
      ? `## License  
    
  Copyright © ${new Date().getFullYear()} ${license}. All rights reserved.
  
  Licensed under the [${license}](#license) license.`
      : "";
  }


  module.exports = generateMarkdown;