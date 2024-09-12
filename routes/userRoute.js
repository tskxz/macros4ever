const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();
const admin = require('../middleware/adminMiddleware');
const { login, register, getUsers, logout, profile } = require('../controllers/userController');


// @POST /api/users/login
// PUBLIC: Login a user
router.post('/login', login);

// @POST /api/users/register
// PUBLIC: Register a new user
router.post('/register', register)

// @GET /api/users
// Private Admin: Get all users
router.get('/', authenticateToken, admin, getUsers)

// @POST /api/users/logout
// Public: Logout a user
router.post('/logout', logout)

// @GET /api/users/profile
// Private: Get the authenticated user's information
router.get('/profile', authenticateToken, profile);

module.exports = router;
