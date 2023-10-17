const express = require("express");
const createError = require("http-errors");
const {
    getSearchConsoleService,
    postSearchConsoleService,
    deleteSearchConsoleService,
    updateSearchConsoleService,
} = require("../../services/seo-credentials/search-console.services");
const SearchConsole = require("../../models/seo-credentials/search-console.model");

const getSearchConsoleController = async (req, res) => {
    try {
        const query = req.query;
        const searchConsole = await getSearchConsoleService(query);
        console.log(searchConsole);
        return res.status(200).json(searchConsole);
    } catch (error) {
        console.log(error);
        createError(404, eror.message);
    }
};
const postSearchConsoleController = async (req, res) => {
    try {
        const data = req.body;
        const existingData = await SearchConsole.find({});
        if (existingData?.length > 0) {
            return res
                .status(405)
                .json(
                    "Already have a data. you haven't permission to create another. please update existing data or delete"
                );
        } else {
            const searchConsole = await postSearchConsoleService(data);
            res.status(200).json({
                status: "Successful",
                message: "Data added successfully",
            });
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteSearchConsoleController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const searchConsole = await deleteSearchConsoleService(query);
        console.log(searchConsole);
        if (searchConsole.acknowledged && searchConsole.deletedCount === 0) {
            return res.status(500).json("We didn't find any searchConsole to delete");
        } else if (searchConsole.acknowledged && searchConsole.deletedCount) {
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
const updateSearchConsoleController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const searchConsole = await updateSearchConsoleService(query, data);
        console.log(searchConsole);
        if (searchConsole.acknowledged && !searchConsole.matchedCount) {
            return res.status(404).json("We didn't find any searchConsole to update.");
        } else if (searchConsole.matchedCount && searchConsole.modifiedCount) {
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
    getSearchConsoleController,
    postSearchConsoleController,
    deleteSearchConsoleController,
    updateSearchConsoleController,
};
