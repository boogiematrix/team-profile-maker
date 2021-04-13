const inquirer = require("inquirer")

const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const questions = require('./src/questions');
const { engineerQuestions, internQuestions } = require("./src/questions");

function addMoreTeamMembers(role) {
    inquirer
        .prompt(role)
        .then((data) => {
            if (role === engineerQuestions) {
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
            } else if (role === internQuestions) {
                let intern = new Intern(data.name, data.id, data.email, data.school);
            }

            fs.appendFile(fileName)
        })
}


inquirer
    .prompt(questions.managerQuestions)
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        var fileName = `./dist/${data.name}.html`
        //insert html template rendering, and write file, then start new prompt or finish
        fs.writeFile(fileName, html, (err) => {
            err ? console.error(err) : console.log('success')
        })

        if (data.teamMember = 'Engineer') {
             addMoreTeamMembers(engineerQuestions)
        } else if (data.teamMember = 'Intern') {
             addMoreTeamMembers(internQuestions)
        } else {
            fs.appendFile(fileName, html, (err) => {
                err ? console.error(err): console.log('success')
            })
        }
    })