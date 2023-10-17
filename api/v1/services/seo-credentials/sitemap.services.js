const Sitemap = require("../../models/seo-credentials/sitemaps.model");

const getSitemapService = async (query) => {
    const result = await Sitemap.find(query);
    return result;
};
const postSitemapService = async (data) => {
    const result = await Sitemap.create(data);
    return result;
};

const deleteSitemapService = async (query) => {
    const result = await Sitemap.deleteOne(query);
    return result;
};
const updateSitemapService = async (query, data) => {
    const result = await Sitemap.updateOne(query, data);
    return result;
};

module.exports = {
    getSitemapService,
    postSitemapService,
    deleteSitemapService,
    updateSitemapService,
};
