# Assignment Zero
## Purpose
The purpose of this assignment is to work with Postman become familiar with HTTP, and REST through the testing framework provided by Postman.  Furthermore, to check in your first node program to github.

You will create a Postman collection and create a REST test within the project. You will need to automate each test and include the required asserts (tests) for each request in the validation.

## Requirements
X Sign-up for a free GitHub account: https://github.com/ – Homework assignments will be stored on GitHub
X Accept GitHub Classroom 
X Download IDE, you can use WebStorm or VSCode for all assignments
X Download Desktop version of Postman https://www.postman.com/downloads/
X Create a REST request to get started
    x Create an environment variable book_title for the query string for title  
    x Url: https://www.googleapis.com/books/v1/volumes?q={{book_title}} 
    x Use this request to get a JSON response of books with the name Turing in the title
    x Parse the result and store the id in a postman variable 
    x Asserts (Postman tests) must include:
        x validating books returned have the title turing (e.g. items[i].title)
        x Response status code (e.g. 200)
X Create a Chained request that requests 
    x Url: https://www.googleapis.com/books/v1/volumes/{{id}} 
    x Using the id you stored from the first request, make sure the second request uses the ID pulled from the first request 
    x Create Asserts that:
        x Validate response contains the ID from the request 
        x Validate response status code (e.g. 200)
X Modify /utils/googlebooks.js
    x Change the method to return an object
    ```
        {
            data: response.data, 
            status: response.status, 
            statusText: response.statusText, 
            headers: response.headers,
            requestHeader: response.config.headers
        }
    ```
    
- Review the HTTP Headers in the Request and Response – create text file headers.txt and describe each key value pair in the HTTP header in both request and response and check it in with the project to GitHub (e.g. what is the content-type and what does it mean)

## Submission
    [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/20172955-5381dfb6-0796-46c7-9551-46ba5c890a07?action=collection%2Ffork&collection-url=entityId%3D20172955-5381dfb6-0796-46c7-9551-46ba5c890a07%26entityType%3Dcollection%26workspaceId%3D07f04d3e-23de-4fa5-a0f9-859966d2ff57)
    - Header file explanation in headers.txt

## Rubic
- -10 homework not uploaded
- -2 missing postman button in readme.md
- -2 missing check in request 1 for checking title in items
- -2 missing ID check in request 2
- -2 missing change in utils/googlebooks.js (adding new object)
- -2 missing text file with request headers
