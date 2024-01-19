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