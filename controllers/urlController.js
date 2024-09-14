const URL = require("../models/urlSchema");
const shortid = require("shortid");


// Create new ShortID
const createShortIdHandler = async (req, res) => {
    const url = req.body.url;
    
    if(!url){
        return res.status(400).json("Please provide a URL");
    }

    const id = shortid(url);

    try{
        const newId = await URL.create({
            shortId: id,
            redirectUrl: url,
            visitHistory: [],
            createdBy: req.user._id
        });

        const allUrls = await URL.find({});
        return res.render('home', { id: newId.shortId, urls: allUrls });
    }

    catch(err){
        return res.status(500).json({ err: "Internal Server Error", message: err.message });
    }
};


// Redirect to URL
const redirectToUrlHandler = async (req, res) => {
    const shortId =req.params.shortId;

    if(!shortId){
        return res.status(400).json("Please provide a shortId");
    };

    try{
        const url = await URL.findOneAndUpdate(
            { shortId }, {
                $push: { visitHistory: { timestamp: new Date() } }
        });

        if(!url)
            return res.status(404).json({ err: "URL not found" });

        res.redirect(url.redirectUrl);
    }

    catch(err){
        return res.status(500).json({ err: "Internal Server Error", message: err.message });
    }
};


// Return analytics
const getAnalyticsHandler = async (req, res) => {
    const shortId = req.params.shortId;

    if(!shortId)
        return res.json("Please provide a ShortID");

    try{
        const url = await URL.findOne({ shortId: req.params.shortId });

        if(!url)
            return res.status(400).json("URL not found");

        res.status(200).json({ OriginalUrl: url.redirectUrl, clicks: url.visitHistory.length })
    }

    catch(err){
        return res.status(500).json({ err: "Internal Server Error", message: err.message });
    }
}


// Exporting to ../routes/UrlRouter
module.exports = {
    createShortIdHandler,
    redirectToUrlHandler,
    getAnalyticsHandler,
}