const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },

    redirectUrl: {
        type: String,
        required: true,
        unique: true
    },

    visitHistory: [{ timestamp: {type: Date} }],

    createdBy: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, { timestamps: true });

const URL = mongoose.model("url", urlSchema);

module.exports = URL;