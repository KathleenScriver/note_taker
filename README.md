#NoteTaker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/KathleenYruegas/note_taker.svg?columns=all)](https://waffle.io/KathleenYruegas/note_taker)

## Purpose

The objective of this code challenge was to create a simple note taking app using Node.js endpoints hosted on AWS API Gateway, while utilizing AWS Lambdas to connect to the AWS DynamoDB.

### Expected Functionality:
  - Allow input of new Note Item, max of 250 characters, with dropdown menu of tags: work, personal, and hobby.
  - View all previously created Note Items.
  - Ability to filter items by tag and by date.

### Technology
  **Front End**
  - React
  - ES6

  **Back End**
  - AWS API Gateway
  - AWS Lambda
  - AWS DynamoDB

### Testing
 This app is tested with `Enzyme` and `Jest`.
 - To run testing:
  - From root directory, `yarn test`

### Cloning

  * `git clone https://github.com/KathleenYruegas/note_taker.git` into your desired local directory
  * `npm install`
  * `yarn start` (app will be hosted locally on localhost:3000)

### Reflection of Work

Working with React for the first time was very challenging, interesting, and rewarding.

This was my first time accessing AWS and playing around with the tools they offer.  Through the provided tutorials and my own AWS documentation reading, I was able to implement the AWS API Gateway, Lambda functions, and DynamoDB on my back end. This was definitely challenging, but AWS is well documented and there are plenty of resources to comb through.

For the tag-filter, I decided to do this on the back end to push more of the computational logic to the database as opposed to doing it on the client browser. This was achieved by performing different queries on DynamoDB via the lambda function.

On the front end, I went with a fairly simple layout and used JQuery to easily manipulate the DOM.

**Known Issues**

Currently, the sort by date functionality puts the items in order from least to most recent. In future iterations, I'd rather this be a sort option where no matter which filter you're on (tag), you can have the option to then sort by date.

The lambda code in this repo was copied and pasted from my AWS Lambda Console and is for display purposes only.

### Live App Usage

![](link)


### AWS Services Used

Since I cannot provide you access to my AWS account, I have included screenshots showing the DynamoDB Console, API Gateway Console, and Lambda pages I used.


**DynamoDB Console**

<img src='assets/DynamoDB Console.png'>


**API Gateway Console**

<img src='assets/API Gateway Console.png'>


**Lambda Console**

<img src='assets/LambdaConsole.png'>

<img src='assets/getLambda.png'>

<img src='assets/addLambda.png'>



### Other Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
