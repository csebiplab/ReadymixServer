const express = require("express");
const {
    getRobotTxtController,
    postRobotTxtController,
    deleteRobotTxtController,
    updateRobotTxtController,
} = require("../../controllers/seo-credentials/robot-txt.controller");

const router = express.Router();

router
    .route("/")
    .get(getRobotTxtController)
    .post(postRobotTxtController)
    .delete(deleteRobotTxtController)
    .patch(updateRobotTxtController);

module.exports = router;
