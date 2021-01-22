// array of questions for user
const inquirer = require("inquirer");

const util = require("util");

/// Hopefully this will actually do the job! ///
const createReadme = require("./utils/generateReadme")

/// User input fields. 
let questions = [
    {
        type: "input",
        name: "title_of_project",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "author",
        message: "Who made this project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the project do?",
    },
    {
        type: "input",
        name: "license",
        message: "What is the liscence for this project?",
    },
    {
        type: "input",
        name: "features",
        message: "What does the project do?",
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install the project?",
    },
    {
        type: "input",
        name: "contributors ",
        message: "any contributors?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?",
    },
    
];

console.log(questions)

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    writeToFile();
    console.log("File written!")
}

// function call to initialize program
init();
