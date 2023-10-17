const { Schema, model } = require("mongoose");

const metadataSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "description is required"],
            trim: true,
        },
        page: {
            type: String,
            required: [true, "page name is required"],
            enum: {
                values: ["root", "concrete-delivery"],
                message: "{VALUE} is wrong. must be root/concrete-delivery",
            },
        },
        google_console_key: {
            type: String,
            required: [true, "google_console_key is required"],
            trim: true,
        },
        yandex_console_key: {
            type: String,
            required: [true, "yandex_console_key is required"],
            trim: true,
        },
        yahoo_console_key: {
            type: String,
            required: [true, "yahoo_console_key is required"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Metadata = model("Metadata", metadataSchema);

module.exports = Metadata;
