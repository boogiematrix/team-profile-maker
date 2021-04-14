const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');
const questions = require('./questions');
const templates = require('./templates');

function addMoreTeamMembers(role) {
    inquirer
        .prompt(role)
        .then((data) => {
            if (role === questions.engineerQuestions) {
                var worker = new Engineer(data.name, data.id, data.email, data.github);
            } else if (role === questions.internQuestions) {
                var worker = new Intern(data.name, data.id, data.email, data.school);
            }

            fs.appendFile(`./dist/team.html`, templates(worker), (err) => {
                console.error(err)
            });
console.log(data.teamMember)
            if (data.teamMember === 'Engineer') {
                addMoreTeamMembers(questions.engineerQuestions)
            } else if (data.teamMember === 'Intern') {
                addMoreTeamMembers(questions.internQuestions)
            } else {
                fs.appendFile(`./dist/team.html`, templates(), (err) => {
                    console.error(err)
                })
            }

        })
}
function init () {

    inquirer
    .prompt(questions.managerQuestions)
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        var fileName = `./dist/team.html`
        //insert html template rendering, and write file, then start new prompt or finish
        fs.writeFile(fileName, templates(manager), (err) => {
            console.error(err)
        })
        
        if (data.teamMember === 'Engineer') {
            addMoreTeamMembers(questions.engineerQuestions)
        } else if (data.teamMember === 'Intern') {
            addMoreTeamMembers(questions.internQuestions)
        } else {
            fs.appendFile(fileName, templates(), (err) => {
                console.error(err)
            })
        }
    })
}
module.exports = init