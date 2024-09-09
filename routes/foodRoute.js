const express = require('express');
const foods = require('../data/foods');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.json(foods);
});

module.exports = router;
