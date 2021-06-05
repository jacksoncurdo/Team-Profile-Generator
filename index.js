const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatehtml = require("./src/generatehtml");


const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "generatehtml");


const team = [];

function makeManager() {
    console.log("Let's build your team.")
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is your phone number?',
        },
    ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.phone)
            team.push(manager)
            addEmployee();
        })
};

function makeEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?',
        },
    ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.gitHub)
            team.push(engineer)
            addEmployee();
        })
};

function makeIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
        },
    ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            team.push(intern)
            addEmployee();
        })
};


function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add a manager, engineer, or intern?',
            choices: ["Manager", "Engineer", "Intern", "None"]
        },
    ])
        .then((data) => {

            switch (data.newEmployee) {
                case "Manager":
                    makeManager();
                    break;
                case "Intern":
                    makeIntern();
                    break;
                case "Engineer":
                    makeEngineer();
                    break;
                default:
                    fs.writeFile(outputPath, generatehtml(team), (err) =>
                    err ? console.error(err) : console.log('Document created!')
                    );
            }
        });
};

makeManager();