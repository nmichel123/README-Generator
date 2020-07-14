const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile)

const licenses = [
    {
        license1: "1",
        name: "Boost Software License 1.0",
        url: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    },
    {
        license2: "2",
        name: "BSD 3-Clause License", 
        url: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    }
]

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
    choices: [licenses[0].name,licenses[1].name],
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


function  prompt() {
  return inquirer.prompt(questions);
};

// function to write README file
function  writeInput (data) {
    

    return "\n ## Description \n" + data.description + "\n ## Installation Instructions \n" + data.installation +
     "\n ## Usage Information\n" + data.usage + "\n ## License Information \n" + data.license+ "\n ## Contribution Guidelines \n" + data.contribution +
      "\n ## Testing Information\n" + data.test + "\n ## Contact Information \n" + data.contact +"\n" + data.gitHub;
};

function tableOf (data){
    let badge; if (data.license = licenses[0].name) {
        badge = licenses[0].url}
        else {
            badge = licenses[1].url;
        }
    return "# " + data.title + "\n" + badge + "\n" + 
    `
## Table of Contents
  * [Description](##description)
  * [Installation Instructions](##installation-instructions)
  * [Usage Information](##usage-information)
  * [Contribution Guidelines](##contribution-guidelines)
  * [Testing Information](##testing-information)
  * [License Information](##license-information)
  * [Contact Information](##contact-information)
`
}
// function to initialize program
async function init() {
    try {
    let file = "README.md"
    const data = await prompt ();
    const toc = await writeInput (data)
    const userInput = await tableOf (data)
    await writeFileAsync(file, userInput);
    await appendFileAsync (file, toc);
    await appendFileAsync (file, )
    }
    catch(err) {
        console.log (err)
    }
}

// function call to initialize program
init();