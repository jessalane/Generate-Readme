// required packages
var moment = require('moment');

// function to render the contribute section
function renderContributions(contribute) {
  switch (contribute) {
    case 'yes' :
      contribute = `
## How to Contribute
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
---
To learn more about contributing, see the following link:
The [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)
      `
      break;
    default :
      contribute = ` `
      break;
  } 
  return contribute;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      // if MIT;
      license = 'https://img.shields.io/badge/License-MIT-blue.svg';
      break;
    case 'Apache 2.0':
      // if apache
      license = 'https://img.shields.io/badge/License-Apache-blue.svg';
      break;
    case 'BSD-3-Clause':
      // if BDS
      license = 'https://img.shields.io/badge/License-bsd-blue.svg';
      break;
    case 'GPL-3.0':
      // if GPL
      license = 'https://img.shields.io/badge/License-gpl-blue.svg';
      break;
    default:
      license = ' ';
      break;
  }
  return license;
}

// function to render license links
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      // if MIT;
      license = `https://opensource.org/licenses/MIT`;
      break;
    case 'Apache 2.0':
      // if apache
      license = `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'BSD-3-Clause':
      // if BDS
      license = `https://opensource.org/licenses/BSD-3-Clause`;
      break;
    case 'GPL-3.0':
      // if GPL
      license = `https://opensource.org/licenses/GPL-3.0`;
      break;
    default:
      license = ' ';
      break;
  }
  return license;
}

// function to render license content
function renderLicenseSection(data) {
  switch (data.license) {
    case 'MIT':
      // if MIT;
      license = `
Copyright ${moment().format('YYYY')} ${data.userName}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `
      break;
    case 'Apache 2.0':
      // if apache
      license = `
Copyright ${moment().format('YYYY')} ${data.userName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    
http://www.apache.org/licenses/LICENSE-2.0
    
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
      `
      break;
    case 'BSD-3-Clause':
      // if BDS
      license = `
Copyright ${moment().format('YYYY')} ${data.userName}

edistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      `
      break;
    case 'GPL-3.0':
      // if GPL
      license = `
      ${data.title}
Copyright (C) ${moment().format('YYYY')} ${data.userName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/.
      `
      break;
    default:
      license = ' ';
      break;
  }
  return license;
}

// function to generate readme markdown
function genMarkdown(data) {
  return `
  # ${data.title}\
  ![license badge](${renderLicenseBadge(data.license)})\n
  -------\n

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Credits](#credits)\n
  [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}\n
  ![project screenshot](${data.screenshot})
  
  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data)}\n
  [${data.license}](${renderLicenseLink(data.license)})

  ---

  ## Questions
  If you have further questions please reach out to me through the methods listed below:\n
  email: ${data.email}\n
  GitHub: ${data.github}\n
  ${renderContributions(data.contribute)}
  ## Tests
  ${data.tests}
  `;
}
// exporting the genmarkdown function to index.js
module.exports = genMarkdown;