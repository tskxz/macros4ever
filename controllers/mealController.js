const Meal = require('../models/mealModel');
const Food = require('../models/foodModel');

const getMeals = async( req, res) => {
    const meals = await Meal.find({user: req.user._id}).populate('mealItens.food');
    res.json(meals);
}

const getMeal = async(req, res) => {
    const mealId = req.params.id
    const meal = await Meal.findById({_id: mealId, user: req.user._id}).populate('mealItens.food');
    res.json(meal);
}

const createMeal = async(req, res) => {

    // Get the name of the meal and food items from the request body
    const {name, mealItens} = req.body

    const foodItems = await Promise.all(
        mealItens.map(async(item) => {
            const food = await Food.findById(item._id); // Get food document by ID
            if(!food){
                throw new Error(`Food item with ID ${item._id} not found`);
            }

            return {
                ...item,
                name: food.name,
                unit: food.unit || item.unit,
                serving_size: item.serving_size,
                fat: (food.fat / food.serving_size) * item.serving_size,
                carbohydrates: (food.carbohydrates / food.serving_size) * item.serving_size,
                protein: (food.protein / food.serving_size) * item.serving_size,
                calories: (food.calories / food.serving_size) * item.serving_size,
                food: item._id
            };
        })
    )

    const totalProtein = foodItems.reduce((sum, item) => sum + (item.protein || 0), 0)
    const totalFat = foodItems.reduce((sum, item) => sum + (item.fat || 0), 0)
    const totalCarbohydrates = foodItems.reduce((sum, item) => sum + (item.carbohydrates || 0), 0)
    const totalCalories = foodItems.reduce((sum, item) => sum + (item.calories || 0), 0)

    try {
        const meal = new Meal({
            user: req.user._id,
            name,
            mealItens: foodItems.map((x) => ({
               ...x,
                _id: undefined
            })),
            protein: totalProtein,
            fat: totalFat,
            carbohydrates: totalCarbohydrates,
            calories: totalCalories,
        })
        const createMeal = await meal.save()
        res.status(201).json(createMeal)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteMeal = async(req, res) => {
    const meal = await Meal.findById(req.params.id)
    if(meal){
        await meal.deleteOne({_id: meal._id});
        res.json({ message: 'Meal deleted successfully' });
    } else {
        res.status(404).json({ message: 'Meal not found' });
    }
}


module.exports = {getMeals, getMeal, createMeal, deleteMeal}