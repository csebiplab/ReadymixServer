const express = require("express");
const {
    getMetadataController,
    postMetadataController,
    deleteMetadataController,
    updateMetadataController,
} = require("../../controllers/seo-credentials/metadata.controllers");

const router = express.Router();

router
    .route("/")
    .get(getMetadataController)
    .post(postMetadataController)
    .delete(deleteMetadataController)
    .patch(updateMetadataController);

module.exports = router;
