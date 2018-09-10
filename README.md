Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @kaluzsikc Sign out
23
6 6 codeclan/e24_classnotes Private
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
You’re editing a file in a project you don’t have write access to. We’ve created a fork of this project for you to commit your proposed changes to. Submitting a change to this file will write it to a new branch in your fork, so you can send a pull request.
e24_classnotes/week_07/day_1/hw_pubsub_prime_checker/ 
hw_pubsub_prime_checker.md
  or cancel
    
 
1
# Homework: Pub/Sub Prime Checker
2
​
3
### Learning Objectives
4
​
5
- Be able to install and configure webpack in an application
6
- Be able to implement the pub/sub pattern in a front-end JavaScript application
7
​
8
## Brief
9
​
10
Your task is to create a Prime Checker application that allows a user to submit a number, and see if the number is [prime](https://en.wikipedia.org/wiki/Prime_number) or not.
11
​
12
Use the pub/sub pattern to create modular views, with a model that handles the business logic. You should use the start point, which has the HTML already provided.
13
​
14
Use webpack to bundle your JavaScript files.
15
​
16
### MVP
17
​
18
- A user should be able to enter a number into the input, submit the form and see if the number is prime or not.
19
​
20
![Screenshot of Resulting Application](images/screenshot_prime_checker.png)
21
​
22
*Screenshot of Resulting Application*
23
​
24
### Planning
25
​
26
#### Webpack
27
​
28
You will need to set-up webpack in your application:
29
​
30
1. Initialise npm - `npm init`
31
2. Install 'webpack' and 'webpack-cli' - `npm install webpack webpack-cli`
32
3. Create a webpack config file - webpack.config.js
33
4. Add the configuration details to the config file
34
5. Add a script to the package.json to run webpack in watch mode - `"build": "webpack -w"`
35
6. Add a script tag to link to the bundled file in the HTML - `<script type="text/javascript" src="js/bundle.js"></script>`
36
7. Run webpack - `npm run build`
37
8. Check the log that shows the JavaScript has loaded is showing in the browser console.
38
9. Add `bundle.js` to a .gitignore file
39
​
40
#### Pub/Sub
41
​
42
When developing an application that implements the pub/sub pattern, one approach is to follow the event and data flow. You might start by identifying which event starts the data flow, and handling that first. Then pass the data through the application, making sure you have it available to you at each stage, before progressing. Drawing a pub/sub event and data flow diagram that you can refer back to can help with this.
43
​
@kaluzsikc
Propose file change

Update hw_pubsub_prime_checker.md

Add an optional extended description…
 
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
