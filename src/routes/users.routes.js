const express = require('express')
const { signup, login, history } = require('../controllers/users.controllers')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.route('/:id/history')
.get(history)

module.exports = router