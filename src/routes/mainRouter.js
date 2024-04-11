const express = require('express');
const { getAllComponentItems, addItems, updateItem } = require('../controller/mainController');
const router = express.Router();


router.get('/', getAllComponentItems);
router.post('/add', addItems);
router.post('/update', updateItem);

module.exports = router;
