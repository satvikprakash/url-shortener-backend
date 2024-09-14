const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const setUser = (existingUser) => {
    return jwt.sign({
        _id: existingUser._id,
        email: existingUser.email
    }, SECRET_KEY);
};


const getUser = (token) => {
    if(!token) 
        return null;
    
    return jwt.verify(token, SECRET_KEY);
}



// exported to ../middleware/authenticate & ../controllers/userController
module.exports = {
    setUser,
    getUser,
}