require("dotenv").config();

const mongodb_url =
    process.env.NODE_ENV !== "production" ? process.env.MONGODB_LOCAL : process.env.MONGODB_ATLAS;

const jwt_secret_key = process.env.JWT_SECRET_KEY;

module.exports = { mongodb_url, jwt_secret_key };
