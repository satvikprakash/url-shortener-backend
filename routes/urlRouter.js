const express = require("express");
const router = express.Router();
const { createShortIdHandler, redirectToUrlHandler, getAnalyticsHandler } = require("../controllers/urlController");

router.route('/create').post(createShortIdHandler);

router.route('/redirect/:shortId').get(redirectToUrlHandler);

router.route('/analytics/:shortId').get(getAnalyticsHandler);


// Exporting to ../index.js
module.exports = router;