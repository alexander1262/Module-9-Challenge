function renderLicenseBadge(license) {
  if (license !== 'The Unlicense') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';

}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';

}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

${renderLicenseLink(data.license)}

* [Installation](#installation)

* [Usage](#usage)

* [Contribution](#contribution)

* [Test](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contribution

${data.contribution}

## Test

${data.test}

## Questions

For any additional questions, contact me at the following places:

Github: ${data.github}\n
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
