const RobotTxt = require("../../models/seo-credentials/robot-txt.model");

const getRobotTxtService = async (query) => {
    const result = await RobotTxt.find(query);
    return result;
};
const postRobotTxtService = async (data) => {
    const result = await RobotTxt.create(data);
    return result;
};

const deleteRobotTxtService = async (query) => {
    const result = await RobotTxt.deleteOne(query);
    return result;
};
const updateRobotTxtService = async (query, data) => {
    const result = await RobotTxt.updateOne(query, data);
    return result;
};

module.exports = {
    getRobotTxtService,
    postRobotTxtService,
    deleteRobotTxtService,
    updateRobotTxtService,
};
