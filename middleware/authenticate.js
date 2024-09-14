const { setUser, getUser } = require('../service/auth');


const restrictToLoggedInUsersOnly = async(req, res, next) => {
    const token = req.cookies?.uid;
    const existingUser = getUser(token);

    if(!existingUser)
        return res.render('login');

    req.user = existingUser;
    return next();
};

module.exports = restrictToLoggedInUsersOnly;