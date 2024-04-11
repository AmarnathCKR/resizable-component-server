const ComponentOne = require("../database/componentOne");
const ComponentThree = require("../database/componentThree");
const ComponentTwo = require("../database/componentTwo");
const Session = require("../database/sessionShema");


module.exports.getAllComponentItems = async (req, res) => {
  try {
    console.time("get-all");
    const componentOne = await ComponentOne.find({});
    const componentTwo = await ComponentTwo.find({});
    const componentThree = await ComponentThree.find({});
    console.time("get-all");
    res.send({ componentOne: componentOne ? componentOne : null, componentTwo: componentTwo ? componentTwo : null, componentThree: componentThree ? componentThree : null })
  } catch (err) {
    res.status(500).json({ error: err })
  }
};

module.exports.addItems = async (req, res) => {
  try {
    console.time("add");
    const { value, componentId } = req.body;

    if (!value || !componentId) return res.status(404).json({ error: "Invalid input" });

    if (componentId === "componentOne") {
      const newItem = new ComponentOne({ value });
      await newItem.save()
    } else if (componentId === "componentTwo") {
      const newItem = new ComponentTwo({ value });
      await newItem.save()
    } if (componentId === "componentThree") {
      const newItem = new ComponentThree({ value });
      await newItem.save()
    }
    console.time("add");
    res.send("success")

  } catch (err) {
    res.status(500).json({ error: err })
  }
};

module.exports.updateItem = async (req, res) => {
  try {
    console.time("update");
    const { value, componentId, itemId } = req.body;

    if (!value || !componentId || !itemId) return res.status(404).json({ error: "Invalid input" });

    if (componentId === "componentOne") {
      const newItem = await ComponentOne.findByIdAndUpdate(itemId, { $set: { value } });

    } else if (componentId === "componentTwo") {
      const newItem = await ComponentTwo.findByIdAndUpdate(itemId, { $set: { value } });

    } if (componentId === "componentThree") {
      const newItem = await ComponentThree.findByIdAndUpdate(itemId, { $set: { value } });

    }
    console.time("update");
    res.send("success")

  } catch (err) {
    res.status(500).json({ error: err })
  }
};

module.exports.getCount = async (req, res) => {
  try {
    console.time("getCount");
    const addCount = await Session.find({action : "add"});
    const updateCount = await Session.find({action : "update"});
    console.time("getCount");
    res.send({addCount, updateCount })
  } catch (err) {
    res.status(500).json({ error: err })
  }
};