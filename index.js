// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
let markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your full name?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are your usage instructions?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Give a link to a screenshot:',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'List anyone who helped with the project (and their contact), any tutorials used, or third-party assets that require attribution:',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Pick your license:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'BSD-3-Clause', 'GPL-3.0']
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'Would you like to allow contributions?',
        name: 'contribute',
        choices: ['yes', 'no']
    },
    {
        type: 'input',
        message: 'How do you test this application?',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(file, data) {
    fs.writeFileSync(`README.md`, data, (err) => err ? console.error(err) : console.log("Your file was created successfully!"));
};

// TODO: Create a function to initialize app
function init() {
    try {
        const answers = inquirer.prompt(questions);
        const genStructure = markdown(answers);
        writeToFile(answers.file, genStructure)
    } catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
