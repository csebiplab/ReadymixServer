const express = require("express");
const createError = require("http-errors");
const {
    getSitemapService,
    postSitemapService,
    deleteSitemapService,
    updateSitemapService,
} = require("../../services/seo-credentials/sitemap.services");

const getSitemapController = async (req, res) => {
    try {
        const query = req.query;
        const sitemap = await getSitemapService(query);
        console.log(sitemap);
        return res.status(200).json(sitemap);
    } catch (error) {
        console.log(error);
        createError(404, eror.message);
    }
};
const postSitemapController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const sitemap = await postSitemapService(data);
        console.log(sitemap);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteSitemapController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const sitemap = await deleteSitemapService(query);
        console.log(sitemap);
        if (sitemap.acknowledged && sitemap.deletedCount === 0) {
            return res.status(500).json("We didn't find any sitemap to delete");
        } else if (sitemap.acknowledged && sitemap.deletedCount) {
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
const updateSitemapController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const sitemap = await updateSitemapService(query, data);
        console.log(sitemap);
        if (sitemap.acknowledged && !sitemap.matchedCount) {
            return res.status(404).json("We didn't find any sitemap to update.");
        } else if (sitemap.matchedCount && sitemap.modifiedCount) {
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
    getSitemapController,
    postSitemapController,
    deleteSitemapController,
    updateSitemapController,
};
