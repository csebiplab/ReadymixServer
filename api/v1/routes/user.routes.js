const express = require("express");
const {
    getProjectsController,
    postProjectsController,
    deleteProjectsController,
    updateProjectsController,
} = require("../Controllers/projects.controller");

const router = express.Router();

router
    .route("/")
    .get(getProjectsController)
    .post(postProjectsController)
    .delete(deleteProjectsController)
    .patch(updateProjectsController);

module.exports = router;
