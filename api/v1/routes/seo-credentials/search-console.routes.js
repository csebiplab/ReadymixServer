const express = require("express");
const {
    getSearchConsoleController,
    postSearchConsoleController,
    deleteSearchConsoleController,
    updateSearchConsoleController,
} = require("../../controllers/seo-credentials/search-console.controller");

const router = express.Router();

router
    .route("/")
    .get(getSearchConsoleController)
    .post(postSearchConsoleController)
    .delete(deleteSearchConsoleController)
    .patch(updateSearchConsoleController);

module.exports = router;
