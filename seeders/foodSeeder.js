const mongoose = require('mongoose');
const foods = require('../data/foods');
const Food = require('../models/foodModel');

mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');

const importData = async () => {
    const created_foods = await Food.create(foods);
    console.log(`Created ${created_foods.length} foods.`);
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