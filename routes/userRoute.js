const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../data/users');
const router = express.Router();
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
});

router.get('/profile', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        res.json({ message: 'Access granted', user });
    });
});

module.exports = router;
