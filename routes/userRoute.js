const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authenticateToken = require('../middleware/authMiddleware');
const asyncHandler = require('../middleware/asyncHandler');
const router = express.Router();
const admin = require('../middleware/adminMiddleware');

require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });

        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'strict'
        })

        res.json({
            userId: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
    
}));

router.post('/register', asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ message: 'Email already exists' });
    }
    
    const user = await User.create({name, email, password})
    if(user){
        const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });

        res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: 'strict'
        })

        res.json({
            userId: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(400).json({ message: 'Failed to create user' });
    }
}))

router.get('/', authenticateToken, admin, async(req, res) => {
    const users = await User.find();
    res.json(users)
})

router.post('/logout', (req, res) => {
    res.cookie('jwt', '', {
		httpOnly: true,
		expires: new Date(0)
	})
	res.status(200).json({message: 'Logged out successfully'})
})

router.get('/profile', authenticateToken, (req, res) => {
    res.json(req.user)
});

module.exports = router;
