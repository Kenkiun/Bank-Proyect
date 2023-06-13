const express = require('express')
const { transfer } = require('../controllers/transfers.controllers')
const router = express.Router()


router.post(transfer)


module.exports = router