URL Shortener API
This project provides a URL Shortening Service, allowing users to convert long URLs into short, shareable links. The service generates a unique short identifier for each provided URL. It is built using Node.js and MongoDB, and is fully integrated with JSON Web Token (JWT) authentication for secure user registration and login.

Key Features
URL Shortening: Users can input long URLs and receive a shorter, easily shareable version.
JWT Authentication: Secure user authentication through JSON Web Tokens (JWT). Once the user registers and logs in, the token is stored in cookies for maintaining session state.
MongoDB Database: The application stores all URL data and user information in a MongoDB database, which is set up locally on your machine.
Multiple URL Shortening: Users can input multiple URLs at once, and the API will generate unique short IDs for each.


Getting Started
Prerequisites:
Before you begin, make sure you have the following installed:

Node.js and npm (Node Package Manager)
MongoDB (for local database management)

User Registration & Authentication:
To use the URL shortener API, users must create an account. This is handled through JWT Authentication:
You can create a new user by providing a username and password. Upon successful registration, the server will issue a JWT token.

Login:
After registration, users can log in using their credentials. Upon successful login, the server will issue another JWT token that will be stored in your browser's cookies.
Accessing Shortened URLs:
Each time a user sends a request to shorten a URL, the server checks the JWT token stored in the cookies to validate the user’s identity. If the token is valid, the user can proceed with the URL shortening request.

Database Structure:
MongoDB is used as the local database to store both user credentials and shortened URLs.
The data is stored locally on your machine, meaning you will need to have a local instance of MongoDB running in order to use the application.
Clone this project and enter the directory where package.json file is present

Running th Project:
Once you're inside the directory, run the dev script for making your own changes and viewing them
Run the dev script: npm run dev - for viewing your changes
Run the start script: npm start - for viewing the project when its completely done.
