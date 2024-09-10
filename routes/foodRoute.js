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

router.get('/:id', async(req, res) => {
    const food = await Food.findById(req.params.id);
    if(food) {
        res.json(food);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
})

router.post('/', authenticateToken, admin, async (req, res) => {
    const {name, unit, serving_size, fat, satured_fat, carbohydrates, sugar, fiber, protein, salt, calories} = req.body;
    if(!name ||!fat || !carbohydrates || !protein){
        return res.status(400).json({ message: 'Missing name, fat, carbohydrates or protein fields' });
   } else {
    const food = new Food({
        user: req.user._id,
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
        calories: calories || fat * 9 + carbohydrates * 4 + protein * 4,
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

router.delete('/:id', authenticateToken, admin, async (req, res) => {
    const food = await Food.findByIdAndDelete(req.params.id)
    if(food){
        await food.deleteOne({_id: food._id});
        res.json({ message: 'Food deleted successfully' });
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
})

module.exports = router;
