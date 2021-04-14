
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'officeNumber'
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', 'Finished building team']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
    },   
    {
        type: 'input',
        message: 'What is their github name?',
        name: 'github'
    }, 
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', 'Finished building team']
    }
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What school do they attend?',
        name: 'school'
    }, 
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'teamMember',
        choices: ['Engineer', 'Intern', 'Finished building team']
    }
]



module.exports = {managerQuestions, engineerQuestions, internQuestions}