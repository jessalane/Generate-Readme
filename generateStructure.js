const genMarkdown = (response) => {
    `# ${response.title}

    ## Description

    ${response.description}

    ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

    ## Installation

    ${response.installation}

    ## Usage

    ${response.usage}
    ![alt text](${response.screenshot})

    ## Credits

    ${response.credits}

    ## License
    ${response.license}
    [https://choosealicense.com/](https://choosealicense.com/).

    ---

    ## How to Contribute

    ${response.contribute}
    The [Contributor Covenant](https://www.contributor-covenant.org/)

    ## Tests
    ${response.tests}
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
}

module.exports = genMarkdown;