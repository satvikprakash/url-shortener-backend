const express = require("express");
const URL = require('../models/urlSchema');
const { setUser, getUser } = require('../service/auth');
const staticRouter = express.Router();


// Renders Home Page
staticRouter.route("/").get(async (req, res) => {
    const token = res.cookies?.uid;
    const user = getUser(token);

    if(!user){
        const urls = await URL.find({});
        return res.render('home', { totalLength: urls.length });
    }
    
    const urls = await URL.find({createdBy: user._id});
    res.render('home.ejs', {
        urls: urls,
    });
});


// Renders SignUp page
staticRouter.route('/login').get((req, res) => {
    res.render('login');
})


// Renders SignUp page
staticRouter.route('/signup').get((req, res) => {
    res.render('signup');
});


// Exported to ../index.js
module.exports = staticRouter;