// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.title_of_project}</h1>
  <br />

  Made by ${answers.author}

  ## Description / Features
   ${answers.features}

  ## Installation
   ${answers.installation}
  
  ## Usage
   ${answers.usage}
  
   ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-red)
  <br />

  This application is covered by the ${answers.license} license. 
  
  Users are (hopefully) expected to follow this lisense guidelines, or else they shalt be smitten with the wrath of my dissapointment.

  ## Contributors
   ${answers.contributors}
  
  ## Tests
  ${answers.tests}
  <br />
  
  ## Contact information
  GitHub: [${answers.username}](https://github.com/${answers.username})
  <br />
  <br/>
  Have any questions? feel free to email at: ${answers.email}
      `;
    }
module.exports = generateMarkdown;
