const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "username is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: (v) => {
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                    return emailRegex.test(v);
                },
                message: "Invalid email format",
            },
        },
        password: {
            type: String,
            required: [true, "password is required"],
            minlength: [6, "password must be 6 characters"],
            set: (v) => {
                bcrypt.hashSync(v, bcrypt.genSaltSync(16));
            },
        },
        image: {
            type: String,
            trim: true,
            validate: {
                validator: (v) => {
                    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
                    return urlRegex.test(v);
                },
            },
        },
        address: {
            type: String,
            trim: true,
        },
        phone: {
            type: Number,
            trim: true,
        },
        role: {
            type: String,
            enum: {
                values: ["admin", "moderator", "user"],
                message: "{VALUE} is wrong. must be admin/moderator/user",
            },
            default: "user",
        },
        isBanned: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;
