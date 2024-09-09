const express = require('express')
const foods = require('../data/foods')

const router = express.Router()

router.get('/', (req, res) => {
    res.json(foods)
})

module.exports = router