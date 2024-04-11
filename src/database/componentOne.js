const mongoose = require("mongoose");

const ComponentOneSchema = new mongoose.Schema(
    {
        value: String,
    },
    { timestamps: true }
);
const ComponentOne = mongoose.model("ComponentOne", ComponentOneSchema);

module.exports = ComponentOne;
