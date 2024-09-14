const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: {
    type: String,
    require: true,
   },

   email: {
    type: String,
    require: true,
    unique: true
   },

   password: {
    type: String,
    require: true
   }
}, { timestamps: true });

const users = mongoose.model('user', userSchema);

// exported to ../controllers/userController
module.exports = users;