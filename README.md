<h1>Homework: Pub/Sub Prime Checker</h1>

Learning Objectives
Be able to install and configure webpack in an application
Be able to implement the pub/sub pattern in a front-end JavaScript application

<h2> Brief</h2>

Your task is to create a Prime Checker application that allows a user to submit a number, and see if the number is prime or not.

Use the pub/sub pattern to create modular views, with a model that handles the business logic. You should use the start point, which has the HTML already provided.

Use webpack to bundle your JavaScript files.

MVP
A user should be able to enter a number into the input, submit the form and see if the number is prime or not.
Screenshot of Resulting Application

Screenshot of Resulting Application

Planning
Webpack
You will need to set-up webpack in your application:

Initialise npm - npm init
Install 'webpack' and 'webpack-cli' - npm install webpack webpack-cli
Create a webpack config file - webpack.config.js
Add the configuration details to the config file
Add a script to the package.json to run webpack in watch mode - "build": "webpack -w"
Add a script tag to link to the bundled file in the HTML - <script type="text/javascript" src="js/bundle.js"></script>
Run webpack - npm run build
Check the log that shows the JavaScript has loaded is showing in the browser console.
Add bundle.js to a .gitignore file
Pub/Sub
When developing an application that implements the pub/sub pattern, one approach is to follow the event and data flow. You might start by identifying which event starts the data flow, and handling that first. Then pass the data through the application, making sure you have it available to you at each stage, before progressing. Drawing a pub/sub event and data flow diagram that you can refer back to can help with this.
