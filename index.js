// array of questions for user
let questions = [
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    


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
