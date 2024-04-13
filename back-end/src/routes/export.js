'use strict'

const express = require("express")
const router = express.Router()

const {
    exportDataInventory
} = require('../controllers/export.controller')

router.route('/').get(exportDataInventory)

module.exports = router;