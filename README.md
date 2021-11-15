# CypressTestScaffolding(sample e-commerce website)

**Tool used to Automate :** Cypress version 5.3.0

**Programming Langauge :** JavaScript / Nodejs

**Type of Framework :** For this project used page object model and data driven framework

**POM:** As per the page object model, I have maintained a class for every web page. Each web page has a separate class which holds functionalities and members of that web page

**Packages:** Cypress has inbuild packages like fixtures where we can use for test data,support to maintain our page objects,integrations to have our spec files

**Test Report:** I have used test execution on  Cypress dash board and Mochawesome report. Just run the html file to see the report.

**Package.json file:** This will help to make it easy for others to manage and install the npm.

**Note:** Pass and Fail report is available in mochawesome-report folder

### Running the Test

**Pre-requisite** - Need cypress and nodejs installed

open terminal and enter 

    npx cypress open & click enter

A test runner will open then you can find all your test folders on left side ,just click endToEnd_spec_spec.js

A new chrome window opens and test run on it

**Another way to run:**

open package.json file and right click and run on this line 

    "specificTest": "npx cypress run mochaReport -- --spec \"cypress/integration/examples/endToEnd_spec.js\"",

**To run headless:**

        npm run test --headless

**To Run on Dashboard **

open package.json--> select 'RecordDashBoard' under scripts--> Right click on it--> Run Script.

**To run on Browser:**

open terminal --> type 'npx cypress open' --> test runner opens, select desired browser on top right corner--> tap on 'endToEnd_spec_spec.js'
