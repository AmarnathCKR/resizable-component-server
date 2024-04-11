const mongoose = require("mongoose");

const ComponentThreeSchema = new mongoose.Schema(
    {
        value: String,
    },
    { timestamps: true }
);
const ComponentThree = mongoose.model("ComponentThree", ComponentThreeSchema);

module.exports = ComponentThree;
