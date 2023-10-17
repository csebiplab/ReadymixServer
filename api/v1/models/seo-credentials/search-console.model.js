const { Schema, model } = require("mongoose");

const searchConsoleSchema = new Schema(
    {
        google_analytics_key: {
            type: String,
            required: [true, "google_analytics_key is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const SearchConsole = model("SearchConsole", searchConsoleSchema);

module.exports = SearchConsole;
