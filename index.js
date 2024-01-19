const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./JS/markdowngenerator");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install/deploy your project?",
  },
  {
    type: "checkbox",
    name: "usage",
    message: "Select the languages/technologies used:",
    choices: [
      "JavaScript",
      "Python",
      "Java",
      "HTML/CSS",
      "Node.js",
      "React",
      "Vue.js",
      "Angular",
      "Django",
      "Flask",
      "Express.js",
      "Other",
    ],
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license you would like to use?",
    choices: [
      "MIT",
      "APACHE2.0",
      "Boost1.0",
      "MPL2.0",
      "ISC",
      "BSD2",
      "GPL-3.0",
      "Unlicense",
      "EPL-2.0",
      "CC0-1.0",
      "AGPL-3.0",
      "none",
    ],
  },
  {
    type: "input",
    name: "contributors",
    message: "Provide a list of contributors if any?",
  },
  {
    type: "input",
    name: "test",
    message: "What command need to be run to run the tests?",
  },
  {
    type: "input",
    name: "author",
    message: "Provide your full name?",
  },
  {
    type: "input",
    name: "github",
    message: "Provide your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "Provide your email address?",
  },
  // Add more questions as needed
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    const readmeFileName = `${inquirerResponses.title.replace(
      /\s+/g,
      "-"
    )}-README.md`;
    console.log("Generating README...");
    writeToFile(readmeFileName, generateMarkdown({ ...inquirerResponses }));
  });
}

init();
