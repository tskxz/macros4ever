const express = require('express');
const Food = require('../models/foodModel');
const authenticateToken = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const {getFoods, myFoods, createMyFood, publishFood, getFood, createFood, updateFood} = require('../controllers/foodController');

const router = express.Router();

// @GET /api/foods
// Public: Get all food items
router.get('/', getFoods);

// @GET /api/foods/myfoods
// Private: Get all food items created by the authenticated user
router.get('/myfoods', authenticateToken, myFoods);

// @POST /api/foods/myfoods
// Private: Create a new food item for the authenticated user
router.post('/myfoods', authenticateToken, createMyFood);

// @POST /api/foods/publish/:id
// Private Admin: Publish a food item with the given ID
router.post('/publish/:id', authenticateToken, admin, publishFood)

// @GET /api/foods/:id
// Public: Get a single food item with the given ID
router.get('/:id', getFood);

// @POST /api/foods/
// Private Admin: Create a new food item
router.post('/', authenticateToken, admin, createFood);

// @PUT /api/foods/:id
// Private Admin: Update a food item with the given ID
router.put('/:id', authenticateToken, admin, updateFood)

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
