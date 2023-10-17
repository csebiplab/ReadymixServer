const express = require("express");
const createError = require("http-errors");

const {
    getMetadataService,
    postMetadataService,
    deleteMetadataService,
    updateMetadataService,
} = require("../../services/seo-credentials/metadata.services");

const getMetadataController = async (req, res) => {
    try {
        const query = req.query;
        const metadata = await getMetadataService(query);
        console.log(metadata);
        return res.status(200).json(metadata);
    } catch (error) {
        console.log(error);
        createError(404, eror.message);
    }
};
const postMetadataController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const metadata = await postMetadataService(data);
        console.log(metadata);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteMetadataController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const metadata = await deleteMetadataService(query);
        console.log(metadata);
        if (metadata.acknowledged && metadata.deletedCount === 0) {
            return res.status(500).json("We didn't find any metadata to delete");
        } else if (metadata.acknowledged && metadata.deletedCount) {
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
const updateMetadataController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const metadata = await updateMetadataService(query, data);
        console.log(metadata);
        if (metadata.acknowledged && !metadata.matchedCount) {
            return res.status(404).json("We didn't find any metadata to update.");
        } else if (metadata.matchedCount && metadata.modifiedCount) {
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
    getMetadataController,
    postMetadataController,
    deleteMetadataController,
    updateMetadataController,
};
