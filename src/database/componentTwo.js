const mongoose = require("mongoose");

const ComponentTwoSchema = new mongoose.Schema(
    {
        value: String,
    },
    { timestamps: true }
);
const ComponentTwo = mongoose.model("ComponentTwo", ComponentTwoSchema);

module.exports = ComponentTwo;
