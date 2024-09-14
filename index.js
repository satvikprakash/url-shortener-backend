const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;
UrlString = process.env.URL;

// express app
const app = express();


// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.set('view cache', false); // Disable view caching



// Routers
const UrlRouter = require("./routes/urlRouter");
const staticRouter = require('./routes/staticRouter');
const userRouter = require('./routes/userRouter');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const restrictToLoggedInUsersOnly = require('./middleware/authenticate');


// Connection to MongoDB
mongoose.connect(UrlString)
.then(() =>{
    console.log("Database Connection Successfull");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch(err => console.log("Database Connection Failed ",err));


// Routes
app.use('/url', restrictToLoggedInUsersOnly, UrlRouter);
app.use('/', staticRouter);
app.use('/user', userRouter);