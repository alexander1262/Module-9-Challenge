const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please include a title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Write a description for your README',
        name: 'description',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please write a description!')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Write installation instructions for your README',
        name: 'installation',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please include instructions')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Write your usage information for your README',
        name: 'usage',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please include usage information')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Write your contribution guidelines for your README',
        name: 'contribution',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please include contribution guidelines')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Write your test instructions for your README',
        name: 'test',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please include test instructions')
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Choose a license from the list of options',
        name: 'license',
        choices: [
            'GNU_AGPLv3',
            'GNU_GPLv3',
            'GNU_LGPLv3',
            'Mozilla_Public_License_2.0',
            'Apache_License_2.0',
            'MIT',
            'Boost_Software_License_1.0',
            'The_Unlicense'],
    },
    {
        type: 'input',
        message: 'Enter your Github username',
        name: 'github',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your username')
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please ienter your email address')
                return false;
            }
        }
    }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('README successfully created!')
}

function init() {
    console.log('init')
    inquirer.prompt(questions)
        .then((response) => {
            console.log('then')
            console.log('response= ', response)
            writeToFile('README.md', generateMarkdown({...response}));
});
}

init();
