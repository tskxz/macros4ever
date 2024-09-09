const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/food4ever');

const foodSchema = new mongoose.Schema({
    name: String,
    unit: String,
    serving_size: Number,
    fat: Number,
    satured_fat: Number,
    carbohydrates: Number,
    sugar: Number,
    fiber: Number,
    protein: Number,
    salt: Number,
    calories: Number
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;