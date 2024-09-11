const express = require('express');
const Food = require('../models/foodModel');
const authenticateToken = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const {getFoods} = require('../controllers/foodController');

const router = express.Router();

// @GET /api/foods
// Public: Get all food items
router.get('/', getFoods);

// @GET /api/foods/myfoods
// Private: Get all food items created by the authenticated user
router.get('/myfoods', authenticateToken, async (req, res) => {
    const myFoods = await Food.find({ user: req.user._id });
    res.json(myFoods);
});

// @POST /api/foods/myfoods
// Private: Create a new food item for the authenticated user
router.post('/myfoods', authenticateToken, async (req, res) => {
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
        public: false,
    })
    const createdFood = await food.save();
    res.json(createdFood);
   }
})

// @POST /api/foods/publish/:id
// Private Admin: Publish a food item with the given ID
router.post('/publish/:id', authenticateToken, admin, async (req, res) => {
    const food = await Food.findById(req.params.id);
    if(!food){
        return res.status(404).json({ message: 'Food not found' });
    } else {
        food.public = true;
        await food.save();
        res.json(food);
    }
})

// @GET /api/foods/:id
// Public: Get a single food item with the given ID
router.get('/:id', async(req, res) => {
    const food = await Food.findById(req.params.id);
    if(food) {
        res.json(food);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
})

// @POST /api/foods/
// Private Admin: Create a new food item
router.post('/', authenticateToken, admin, async (req, res) => {
    const {name, unit, serving_size, fat, satured_fat, carbohydrates, sugar, fiber, protein, salt, calories, public} = req.body;
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
        public: public || false,
    })
    const createdFood = await food.save();
    res.json(createdFood);
   }
})

// @PUT /api/foods/:id
// Private Admin: Update a food item with the given ID
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

// @DELETE /api/foods/:id
// Private Admin: Delete a food item with the given ID
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
