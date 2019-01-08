#NoteTaker

[![Waffle.io - Columns and their card count](https://badge.waffle.io/KathleenYruegas/note_taker.svg?columns=all)](https://waffle.io/KathleenYruegas/note_taker)

## Purpose

The objective of this code challenge was to create a simple note taking app using Node.js endpoints hosted on AWS API Gateway, while utilizing AWS Lambdas to connect to the AWS DynamoDB. I went for a stretch goal of building the front end in React which is a new technology for me.

  * Expected Functionality:
    - Allow input of new Note Item, max of 250 characters, with dropdown menu of tags: work, personal, and hobby.
    - View all previously created Note Items.
    - Ability to filter items by tag and by date.

### Cloning

* `git clone https://github.com/KathleenYruegas/note_taker.git` into your desired local directory
* `npm install`
* `yarn start` (app will be hosted locally on localhost:3000)


### Testing
This app is tested with `Enzyme` and `Jest`.
- To run testing:
- From root directory, `yarn test`


### Technology Used
  **Front End**
  - React
  - ES6

  **Back End**
  - AWS API Gateway
  - AWS Lambda
  - AWS DynamoDB


### API Endpoints (written on AWS API Gateway)

**GET `https://cq31v4skne.execute-api.us-east-2.amazonaws.com/beta/todos?searchValue=all`**

  - This endpoint will return all of the note items in the database.
  - Currently the `searchValue` query parameter must be set to `all`

  **Example Response**
```json
[
  {
      "created": "2018-12-24T20:37:24.415Z",
      "todoDescription": "Get new star map",
      "tag": "hobby",
      "id": "7c79a750-0a36-11e9-bcc2-0d0bf7a5a8bd"
  },
  {
      "created": "2018-12-28T01:05:13.702Z",
      "todoDescription": "Plan runs",
      "tag": "hobby",
      "id": "a1d97790-0a3c-11e9-a0ea-f767cfc23cfb"
  },
  {
      "created": "2018-12-28T00:21:13.826Z",
      "todoDescription": "Clean house",
      "tag": "personal",
      "id": "7c79a750-0a36-11e9-bcc2-0d0bf7a5a8bd"
  }
]
```

**POST `https://cq31v4skne.execute-api.us-east-2.amazonaws.com/beta/todos?searchValue=all`**

  - This endpoint will allow you to add a new note to the database.

  **Expected Request Format**
```json
{
  /* Headers */
  "Content-Type": "application/json"
}
{
  /* Body */
  "todoDescription": "New note info goes here",
  "tag": "work",
  "created": "Tues, Jan 5th"
}
```
  * Note: The `created` attribute can be in any format.

  **Example Response**

  - A successful response will return `status code: 200`




**Known Issues**



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
