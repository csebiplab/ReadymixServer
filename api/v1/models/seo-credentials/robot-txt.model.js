const { Schema, model } = require("mongoose");

const robotTxtSchema = new Schema(
    {
        sitemap_url: {
            type: String,
            required: [true, "sitemap url is required"],
            trim: true,
            validate: {
                validator: (v) => {
                    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                    return urlRegex.test(v);
                },
            },
        },
        user_agent: {
            type: String,
            required: [true, "user_agent is required"],
            trim: true,
        },
        allow: {
            type: String,
            required: [true, "allow value is required"],
            trim: true,
        },
        disallow: {
            type: String,
            required: [true, "disallow value is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const RobotTxt = model("RobotTxt", robotTxtSchema);

module.exports = RobotTxt;
