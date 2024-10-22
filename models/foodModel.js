const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');

const foodSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: String,
    unit: String,
    serving_size: Number,
    fat: Number,
    saturated_fat: Number,
    carbohydrates: Number,
    sugar: Number,
    fiber: Number,
    protein: Number,
    salt: Number,
    calories: Number,
    public: Boolean,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;