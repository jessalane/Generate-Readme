// requried packages and imported files
const inquirer = require('inquirer');
const fs = require('fs');
let markdown = require('./utils/generateMarkdown.js');

// array of questions
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

// function to write data to a readme file
function writeToFile(data) {
    fs.writeFileSync(`README.md`, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
};

// initialize funciton to run the questions
function init() {
    try {
        inquirer.prompt(questions)
        .then((answer) => {
            const genStructure = markdown(answer);
            writeToFile(genStructure);
        })
    } catch(err) {
        console.log(err);
    }
}

// calling init function
init();
