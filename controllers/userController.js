const users = require('../models/userSchema');
const URL = require('../models/urlSchema');
const { setUser, getUser} = require('../service/auth');


// Handler to create new User
const createNewUserHandler = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const newUser = await users.create({ name, email, password});

        return res.render('login', { signupSuccessMessage: "User Created Successfully" });
    }

    catch(err){
        return res.status(500).json({ err: "Internal Server Error", message: err.message });
    }
};


// Login Handler
const loginUserHandler = async (req, res) => {
    const { email, password } = req.body;

    try{
        const existingUser = await users.findOne({ email, password});

        if(!existingUser)
            return res.render('login', { invalidCredentials: "Invalid Credentials" });
        
        // Creating a JWT Token
        const token = setUser(existingUser);
        res.cookie('uid', token)
        const urls = await URL.find({ createdBy: existingUser._id });
        return res.render('home', { urls: urls, loginSuccessful: `Login succesful ${existingUser.name}` });    
    }

    catch(err){
        return res.status(500).json({ err: "Internal Server Error", message: err.message });
    }
};


// Exported to ../routes/userRouter
module.exports = {
    createNewUserHandler,
    loginUserHandler,
}