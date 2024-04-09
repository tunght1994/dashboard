'use strict'

const express = require("express")
const router = express.Router()

const {
    getAllInventory,
    createInventory
} = require('../controllers/inventory.controller')

router.route('/').get(getAllInventory).post(createInventory)

module.exports = router;