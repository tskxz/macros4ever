const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/macros4ever');

const mealSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {type: String},

    mealItens: [
        {
            name: {type: String},
            unit: {type: String},
            serving_size: {type: Number},
            fat: {type: Number},
            carbohydrates: {type: Number},
            protein: {type: Number},
            calories: {type: Number},
            food: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Food',
            }
        }
    ],

    protein: {type: Number},
    fat: {type: Number},
    carbohydrates: {type: Number},
    calories: {type: Number},
})

const Meal = mongoose.model('Meal', mealSchema)

module.exports = Meal