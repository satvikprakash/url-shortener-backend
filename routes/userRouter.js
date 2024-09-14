const express = require("express");
const { createNewUserHandler, loginUserHandler } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.route('/signup').post(createNewUserHandler);

userRouter.route('/login').post(loginUserHandler);


// exported to ../index.js
module.exports = userRouter;