const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('../middleware/asyncHandler');

require('dotenv').config();


const authenticateToken = asyncHandler (async(req, res, next) => {
    let token;

	// Read jwt from the cookie
	token = req.cookies.jwt
	if(token){
		try{
			const decoded = jwt.verify(token, process.env.SECRET_KEY)
			req.user = await User.findById(decoded.userId).select('-password')
			next()
		} catch(error) {
			console.log(error)
			res.status(401)
			throw new Error('not authorized, token failed')
		}
	} else {
		res.status(401)
		throw new Error('not authorized, no token')
	}
})

module.exports = authenticateToken;
