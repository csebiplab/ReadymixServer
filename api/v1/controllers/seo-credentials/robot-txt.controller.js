const express = require("express");
const createError = require("http-errors");
const {
    getRobotTxtService,
    postRobotTxtService,
    deleteRobotTxtService,
    updateRobotTxtService,
} = require("../../services/seo-credentials/robot-txt.services");
const RobotTxt = require("../../models/seo-credentials/robot-txt.model");

const getRobotTxtController = async (req, res) => {
    try {
        const query = req.query;
        const robotTxt = await getRobotTxtService(query);
        return res.status(200).json(robotTxt);
    } catch (error) {
        createError(404, eror.message);
    }
};
const postRobotTxtController = async (req, res) => {
    try {
        const data = req.body;
        const existingData = await RobotTxt.find({});
        if (existingData?.length > 0) {
            return res
                .status(405)
                .json(
                    "Already have a data. you haven't permission to create another. please update existing data or delete"
                );
        } else {
            const robotTxt = await postRobotTxtService(data);
            res.status(200).json({
                status: "Successful",
                message: "Data added successfully",
            });
        }
    } catch (error) {
        return res.status(404).json(error.message);
    }
};

const deleteRobotTxtController = async (req, res) => {
    try {
        const query = req.query;
        const robotTxt = await deleteRobotTxtService(query);
        if (robotTxt.acknowledged && robotTxt.deletedCount === 0) {
            return res.status(500).json("We didn't find any robotTxt to delete");
        } else if (robotTxt.acknowledged && robotTxt.deletedCount) {
            return res.status(200).json({
                status: "Successful",
                message: "Data deleted successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        createError(500, error.message);
        return res.status(500).json(error.message);
    }
};
const updateRobotTxtController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        const robotTxt = await updateRobotTxtService(query, data);
        if (robotTxt.acknowledged && !robotTxt.matchedCount) {
            return res.status(404).json("We didn't find any robotTxt to update.");
        } else if (robotTxt.matchedCount && robotTxt.modifiedCount) {
            return res.status(200).json({
                status: "Successful",
                message: "Data update successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    getRobotTxtController,
    postRobotTxtController,
    deleteRobotTxtController,
    updateRobotTxtController,
};
