# Overview

This software is a REST API that utilizes the node.js framework to access scripture data from the standard works of The Church of Jesus Christ of Latter Day Saints. The intention of this project was to further my understanding and application of javascript by using it at a deeper level than simple API calls. I learned how to create a lightweight express server that utilizes the ASGI standard and common middleware functions to provide both security and performance.

This software was written to create easy access to a variety of scripture data. It currently only includes books found in The Book of Mormon: Another Testament of Jesus Christ. It allows the user to recieve a scriptur at random on each server load or a random scripture filtered by the book chosen by the user.

[Software Demo Video](https://youtu.be/otAKtYXd6BM)

# Development Environment

The entirety of this project was written in vscode with a rest extension for testing purposes. The live server can be found on Render at (https://scripture-api.onrender.com).

I used JavaScript in conjunction with node.js and the express.js and cors packages

# Useful Websites

- [W3Schools](https://www.w3schools.com/js/default.asp)
- [ExpressJs](https://expressjs.com/en/resources/middleware/cors.html)

# Future Work

- Future updates will include all of the standard works for "The Church of Jesus Christ of Latter Day Saints"
- Ability to create post requests tied to a specific scripture that can act as a journal entry
- Feature for filtering chronologically based on user book choice