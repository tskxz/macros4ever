const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
})

userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next()
    }
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

module.exports = User;