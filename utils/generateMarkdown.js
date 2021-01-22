// function to generate markdown for README
function generateMarkdown(data) {
  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };
  
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
