const { prompt } = require('inquirer');
const fs = require('fs');
const create = require('./generateStructure.js');

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
        message: 'Give a link to a screenshot:',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'What are your usage instructions?',
        name: 'usage',
    },
])
.then(response => {
    fs.writeFileSync(`README.md`, create.genMarkdown(response));
});