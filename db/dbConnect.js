const mongoose = require("mongoose");
const { mongodb_url } = require("../secret/secret");

const dbConnect = async () => {
    try {
        mongoose.connect(mongodb_url);
        console.log(`db connected successfully`, mongodb_url);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = dbConnect;
