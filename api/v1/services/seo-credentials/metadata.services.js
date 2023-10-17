const Metadata = require("../../models/seo-credentials/metadata.model");

const getMetadataService = async (query) => {
    const result = await Metadata.find(query);
    return result;
};
const postMetadataService = async (data) => {
    const result = await Metadata.create(data);
    return result;
};

const deleteMetadataService = async (query) => {
    const result = await Metadata.deleteOne(query);
    return result;
};
const updateMetadataService = async (query, data) => {
    const result = await Metadata.updateOne(query, data);
    return result;
};

module.exports = {
    getMetadataService,
    postMetadataService,
    deleteMetadataService,
    updateMetadataService,
};
