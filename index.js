// Important Dependencies....
const inquirer = require("inquirer");
const utils = require("util");
const fs = require("fs");
const createReadme = require("./utils/generateMarkdown")
/// Hopefully this will actually do the job! ///
const writeFileAsync = utils.promisify(fs.writeFile);
/// User input fields. 
function userQuestions() {
    return inquirer.prompt([
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
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "features",
        message: "What are the features of the application?",
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
]);
} 

// Async function that reads the user prompt
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await userQuestions();
        // Then magically spits out a readme following the template.
        const createReadme = createReadme(answers);

        // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', createReadme);
        console.log('Successfully wrote to README.md');

        // Backup error just in case.
    }   catch(err) {
        console.log("Uh oh, Looks like something went horrifically wrong!")
        console.log(err);
    }
  }
  
  //Majick startup
  init();  
