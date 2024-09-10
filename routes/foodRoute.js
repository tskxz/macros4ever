const express = require('express');
const Food = require('../models/foodModel');
const authenticateToken = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

const router = express.Router();

// @GET /api/foods
// Public: Get all food items
router.get('/', async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

router.post('/', authenticateToken, admin, async (req, res) => {
    const {name, unit, serving_size, fat, satured_fat, carbohydrates, sugar, fiber, protein, salt, calories} = req.body;
    if(!name ||!unit ||!serving_size ||!fat ||!satured_fat || !carbohydrates || !fiber || !protein || !salt || !calories){
        console.log(name, unit, serving_size, fat, satured_fat, carbohydrates, fiber, protein, salt, calories);
        return res.status(400).json({ message: 'All fields are required' });
   } else {
    const food = new Food({
        name: name,
        unit: unit,
        serving_size: serving_size,
        fat: fat,
        satured_fat: satured_fat,
        carbohydrates: carbohydrates,
        sugar: sugar,
        fiber: fiber,
        protein: protein,
        salt: salt,
        calories: calories,
    })
    const createdFood = await food.save();
    res.json(createdFood);
   }
})

router.put('/:id', authenticateToken, admin, async (req, res) => {
    const {name, unit, serving_size, fat, satured_fat, carbohydrates, sugar, fiber, protein, salt, calories} = req.body;
    const food = await Food.findById(req.params.id)
    if(food){
        food.name = name;
        food.unit = unit;
        food.serving_size = serving_size;
        food.fat = fat;
        food.satured_fat = satured_fat;
        food.carbohydrates = carbohydrates;
        food.sugar = sugar;
        food.fiber = fiber;
        food.protein = protein;
        food.salt = salt;
        food.calories = calories;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
})

module.exports = router;
