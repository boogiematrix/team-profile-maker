const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');
const questions = require('./questions');
const templates = require('./templates');
var fileName
function addMoreTeamMembers(role) {
    inquirer
        .prompt(role)
        .then((data) => {
            //creates new engineer or intern objects based on user responses
            if (role === questions.engineerQuestions) {
                var worker = new Engineer(data.name, data.id, data.email, data.github);
            } else if (role === questions.internQuestions) {
                var worker = new Intern(data.name, data.id, data.email, data.school);
            }
            // adds the new employee object's template to the html file
            fs.appendFile(fileName, templates(worker), (err) => {
                console.error(err)
            });
            //recursively calls this function if user decides to add more team members
            //or adds final html template
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
function init () {

    inquirer
    .prompt(questions.managerQuestions)
        .then((data) => {
        //creates new manager object and a filename from the manager's name
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        fileName = `./dist/${data.name}.html`
        //creates new html file
        fs.writeFile(fileName, templates(manager), (err) => {
            console.error(err)
        })
        //creates new employee html card based on user response
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