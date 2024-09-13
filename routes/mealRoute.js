const express = require('express');
const Meal = require('../models/mealModel');
const Food = require('../models/foodModel');
const authenticateToken = require('../middleware/authMiddleware');
const { getMeals, createMeal, deleteMeal } = require('../controllers/mealController');

const router = express.Router()

router.get('/', authenticateToken, getMeals);
router.post('/', authenticateToken, createMeal);

router.delete('/:id', authenticateToken, deleteMeal)

module.exports = router