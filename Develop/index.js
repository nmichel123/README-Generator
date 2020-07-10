// array of questions for user
const questions = [
{
    type: input,
    message: "Title of Project?",
    name: "title",
},
{
    type: input,
    message: "Description of Project?",
    name: "description",
},
{
    type: list,
    message: "List Table of Contents",
    name: "toc",
},
{
    type: input,
    message: "Installation Instructions?",
    name: "installation"
},
{
    type: input,
    message: "Usage Information?",
    name: "usage",
},
{
    type: list,
    message: "License Information?",
    choices: ["Free to use", "Use with Permission", "No one can use",],
    name: "license",
},
{
    type: input,
    message: "Contribution Guidelines?",
    name: "contribution",
},
{
    type: input,
    message: "Testing Information?",
    name: "test",
},
{
    type: input,
    message: "Contact information for Questions?",
    name: "contact",
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
