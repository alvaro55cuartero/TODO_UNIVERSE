const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const TextSchema = mongoose.Schema({

    name: {
        type: String,
        min: [4, "Name is too short"],
        max: [40, "Name is too long"],
        required: [true, "Name is required"],
        unique: true
    },

    owner: {
        type: Array
    },

    status: {
        type: String,
        required: true,
        default: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});