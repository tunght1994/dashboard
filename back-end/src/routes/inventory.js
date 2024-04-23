'use strict'

const express = require("express")
const router = express.Router()
const upload = require('../controllers/multer.controller');

const {
    getAllInventory,
    createInventory
} = require('../controllers/inventory.controller')

router.route('/').get(getAllInventory).post(createInventory)

module.exports = router;