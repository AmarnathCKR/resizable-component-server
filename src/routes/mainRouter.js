const express = require('express');
const { getAllComponentItems, addItems, updateItem, getCount } = require('../controller/mainController');
const router = express.Router();


router.get('/', getAllComponentItems);
router.post('/add', addItems);
router.post('/update', updateItem);
router.get("/count", getCount)

module.exports = router;
