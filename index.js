const { prompt } = require('inquirer');
const fs = require('fs');
let genMarkdown = require('./generateStructure.js');

prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
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
        message: 'license something',
        name: 'license',
        choices: ['ASL', 'Spanish', 'English', 'French', 'Arabic', 'Mandarin', 'German']
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
        type: 'input',
        message: 'List any guidelines on how other developers can contribute to this project:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What tests have you created, and how can they be run?',
        name: 'tests',
    },
])
.then(data => {
    fs.writeFileSync(`README.md`, genMarkdown(data));
});