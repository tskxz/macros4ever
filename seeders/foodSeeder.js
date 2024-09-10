const mongoose = require('mongoose');
const foods = require('../data/foods');
const users = require('../data/users');
const Food = require('../models/foodModel');
const User = require('../models/userModel');

mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');

const importData = async () => {
    const createdUsers = await User.insertMany(users);
    
    adminUser = createdUsers[0]._id
    const sampleFoods = foods.map((food) => {
        return {...food, user: adminUser}
    })
    
    await Food.insertMany(sampleFoods);
    console.log(`Created ${sampleFoods.length} foods.`);
    process.exit();
}


const destroyData = async () => {
    await Food.deleteMany();
    console.log('Deleted all foods.');
    process.exit()
}

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}