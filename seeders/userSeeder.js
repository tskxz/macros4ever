const mongoose = require('mongoose');
const users = require('../data/users');
const User = require('../models/userModel');

mongoose.connect('mongodb://127.0.0.1:27017/food4ever');

const importData = async () => {
    const created_users = await User.create(users);
    console.log(`Created ${created_users.length} users.`);
    process.exit();
}


const destroyData = async () => {
    await User.deleteMany();
    console.log('Deleted all users.');
    process.exit()
}

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}