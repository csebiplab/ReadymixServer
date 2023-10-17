const { Schema, model } = require("mongoose");

const sitemapSchema = new Schema(
    {
        url: {
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
        priority: {
            type: Number,
            required: [true, "priority is required"],
            trim: true,
            min: 0.1,
            max: 1,
            // validate: {
            //     validator: (v) => {
            //         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            //         return emailRegex.test(v);
            //     },
            //     message: "Invalid email format",
            // },
        },
        frequency_change: {
            type: String,
            required: [true, "frequency is required"],
            enum: {
                values: ["yearly", "monthly", "weekly"],
                message: "{VALUE} is wrong. must be yearly/monthly/weekly",
            },
        },
    },
    {
        timestamps: true,
    }
);

const Sitemap = model("Sitemap", sitemapSchema);

module.exports = Sitemap;
