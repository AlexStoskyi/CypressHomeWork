⚡️ Object for testing
Web site - https://conduit.realworld.how/

📦 Setup
Install node.js - JavaScript runtime environment
Make sure Java version 8 or above installed, and its directory is specified in the JAVA_HOME environment variable for Allure Report
Clone git repository git clone 
Install project dependencies specified in the package.json npm install

⚙️ Running Tests
run with UI - npx cypress open 

For reporting used Allure Report - Automation Test Reporting Tool
Learn more about Allure Report at Allure

To generate allure report:

npm run allure:generateReport
To open allure report:

npm run allure:openReport
🌏 Report on CI
https://example.github.io/example

🐳 Run tests using Docker
Learn more about Docker tool at Docker
Install Docker Desktop
To generate Docker image:

npm run dockerBuild
Run test in Docker container:

npm run dockerRun