const express = require("express");
const app = express();
const createError = require("http-errors");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

require("dotenv").config();
const dbConnect = require("./db/dbConnect");
dbConnect();

app.use(express.json());
const permittedOrigins = ["http://localhost:3000"];

// Configure CORS middleware
const corsOptions = {
    origin: (origin, callback) => {
        if (permittedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use(cors());
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many request from this api. try again later",
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// import routes----------->
const metadataRoute = require("./api/v1/routes/seo-credentials/metadata.routes");
const robotTxtRoute = require("./api/v1/routes/seo-credentials/robot-txt.routes");
const searchConsoleRoute = require("./api/v1/routes/seo-credentials/search-console.routes");
const sitemapRoute = require("./api/v1/routes/seo-credentials/sitemap.routes");
// routes------------>
app.use("/api/v1/metadata", metadataRoute);
app.use("/api/v1/robot-txt", robotTxtRoute);
app.use("/api/v1/search-console", searchConsoleRoute);
app.use("/api/v1/sitemap", sitemapRoute);

app.get("/", (req, res) => {
    res.send("this is server");
});

app.use((req, res, next) => {
    createError(404, "Route not found");
    next();
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

module.exports = app;
