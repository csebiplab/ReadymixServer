const express = require("express");
const {
    getSitemapController,
    postSitemapController,
    deleteSitemapController,
    updateSitemapController,
} = require("../../controllers/seo-credentials/sitemap.controllers");

const router = express.Router();

router
    .route("/")
    .get(getSitemapController)
    .post(postSitemapController)
    .delete(deleteSitemapController)
    .patch(updateSitemapController);

module.exports = router;
