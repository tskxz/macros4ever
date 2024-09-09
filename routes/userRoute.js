const express = require('express')
const users = require('../data/users')

const router = express.Router()

router.get('/', (req, res) => {
    res.json(users)
})

module.exports = router