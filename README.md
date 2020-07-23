# StackOverflow_API
A CRUD operation that allows users to ask or answer questions and vote for answers.


## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
 * [Api-endpoints](#api-endpoints)
 * [HowTo](#howto)

## Technologies

* [ES6](http://es6-features.org/) - ECMAScript version six
* [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript Progamming Language
* [Node](https://nodejs.org/) - Runtime Environment
* [Express](https://expressjs.com/) - Web Application Framework
* [Redis](https://redis.io/) - In-memory data structure store
* [MongoDB](https://www.mongodb.com/) - Database Management Tool


## Features

* User can create a question
* User can search for question by query
* User can answer a question by question Id
* User can vote for an answer


### HowTo

You can test endpoints by using the production application on [swagger-api-docs]() or [the development](#development)


### API Deployment
API is deployed to [Amazon Web Services EC2]()

### Development

* git clone [StackOverflow_API Repository](https://github.com/DanielAdek/StackOverflow_API.git) 
* Run `yarn install` or `npm install` to install packages
* Create `.env` file. Use the `.xample.env` file as a model for your .env file
* Start mongodb and redis
* Run `yarn watch` or `npm run watch`to start the development server
* Navigate to [localhost:{port}/api-docs]() in your browser to test APIs endpoint from swagger OR use 
[Postman](https://getpostman.com/) or [Insomnia](https://insomnia.rest/) to test endpoints.
***You can test endpoints with the following routes listed on the [table](#api-endpoints) provided below:***

## Api-endpoints


##### Open the postman or insomnia and test the following existing routes


|API            | HTTP Verb       | Action
-------------------|-------------------|--------------
_`/api/v1/stack/question/create`_ | _`POST`_ | Create a question|
_`/api/v1/stack/question?search=searchword`_ | _`GET`_ | Search for a question |
_`/api/v1/stack/question/{questionId}/answer`_ | _`POST`_ | Answer a question |
_`/api/v1/stack/answer/{answerId}/vote`_ | _`PATCH`_ | Vote an answer |
