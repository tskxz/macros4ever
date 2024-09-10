const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
})

const User = mongoose.model('User', userSchema);

module.exports = User;