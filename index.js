// array of questions for user
let questions = [
    {
        type: "input",
        name: "Title_of_project",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "author",
        message: "Who made this project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "What does the project do?",
    },
    {
        type: "input",
        name: "license",
        message: "What is the liscence for this project?",
    },
    {
        type: "input",
        name: "Features",
        message: "What does the project do?",
    },
    {
        type: "input",
        name: "Installation",
        message: "how do you install the project?",
    },
    {
        type: "input",
        name: "contributors ",
        message: "any contributors?",
    },
    {
        type: "input",
        name: "Installation",
        message: "how do you install the project?",
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
