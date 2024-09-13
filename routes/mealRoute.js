const express = require('express');
const Meal = require('../models/mealModel');
const Food = require('../models/foodModel');
const authenticateToken = require('../middleware/authMiddleware');
const { getMeals, createMeal } = require('../controllers/mealController');

const router = express.Router()

router.get('/', authenticateToken, getMeals);
router.post('/', authenticateToken, createMeal);

router.delete('/:id', authenticateToken, async (req, res) => {
    const meal = await Meal.findByIdAndDelete(req.params.id)
    if(meal){
        await meal.deleteOne({_id: meal._id});
        res.json({ message: 'Meal deleted successfully' });
    } else {
        res.status(404).json({ message: 'Meal not found' });
    }
})

module.exports = router