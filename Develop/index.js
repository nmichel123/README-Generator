const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");
const axios = require("axios");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = 
[{
    type: "input",
    message: "Title of Project?",
    name: "title",
},
{
    type: "input",
    message: "Description of Project?",
    name: "description",
},
{
    type: "input",
    message: "Installation Instructions?",
    name: "installation"
},
{
    type: "input",
    message: "Usage Information?",
    name: "usage",
},
{
    type: "list",
    message: "License Information?",
    choices: ["Free to use", "Use with Permission", "No one can use",],
    name: "license",
},
{
    type: "input",
    message: "Contribution Guidelines?",
    name: "contribution",
},
{
    type: "input",
    message: "Testing Information?",
    name: "test",
},
{
    type: "input",
    message: "Contact Email?",
    name: "contact",
},
{
    type: "input",
    message: "GitHub Username?",
    name: "gitHub",
},
];
prompt()

function  prompt() {
 return inquirer.prompt(questions);
}

writeToFile ()

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
