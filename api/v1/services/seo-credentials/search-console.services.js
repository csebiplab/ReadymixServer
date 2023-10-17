const SearchConsole = require("../../models/seo-credentials/search-console.model");

const getSearchConsoleService = async (query) => {
    const result = await SearchConsole.find(query);
    return result;
};
const postSearchConsoleService = async (data) => {
    const result = await SearchConsole.create(data);
    return result;
};

const deleteSearchConsoleService = async (query) => {
    const result = await SearchConsole.deleteOne(query);
    return result;
};
const updateSearchConsoleService = async (query, data) => {
    const result = await SearchConsole.updateOne(query, data);
    return result;
};

module.exports = {
    getSearchConsoleService,
    postSearchConsoleService,
    deleteSearchConsoleService,
    updateSearchConsoleService,
};
