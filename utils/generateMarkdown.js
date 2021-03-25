// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.title_of_project}</h1>
  <br />

  Made by ${answers.author}
##  Table of contents

[Description / Features](#description)

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[Tests](#test)

[Contact information](#contact)

  # <a name="description"></a> Description / Features
   ${answers.features}

  # <a name="installation"></a> Installation
   ${answers.installation}
  
  # <a name="usage"></a> Usage
   ${answers.usage}
  
  # License
  ![badge](https://img.shields.io/badge/license-${answers.license}-red)
  <br />

  This application is covered by the ${answers.license} license. 
  
  Users are (hopefully) expected to follow this lisense guidelines, or else they shalt be smitten with the wrath of my dissapointment.

  # <a name="contributors"></a> Contributors
   ${answers.contributors}
  
  # <a name="tests"></a> Tests
  ${answers.tests}
  <br />
  
  # <a name="contact"></a> Contact information
  GitHub: [${answers.github}](https://github.com/${answers.github})
  <br />
  <br/>
  Have any questions? feel free to email at: ${answers.email}
      `;
    }
module.exports = generateMarkdown;
