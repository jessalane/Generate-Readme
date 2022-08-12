const genMarkdown = (data) => {
   return `# ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}
    ![alt text](${data.screenshot})
    
    ## Credits
    ${data.credits}

    ## License
    ${data.license}

    ---

    ## Questions
    If you have further questions please reach out to me through the methods listed below:
    email: ${data.email}
    GitHub: ${data.github}

    ## How to Contribute
    ${data.contribute}
    The [Contributor Covenant](https://www.contributor-covenant.org/)

    ## Tests
    ${data.tests}`
}

module.exports = genMarkdown;