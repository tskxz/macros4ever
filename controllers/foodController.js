const Food = require("../models/foodModel")

const getFoods = async(req, res) => {
    const foods = await Food.find({public: true});
    res.json(foods);
}

const myFoods = async(req, res) => {
    const myFoods = await Food.find({ user: req.user._id });
    res.json(myFoods)
}

const createMyFood = async(req, res) => {
    const {
        name, unit, serving_size,
        fat, carbohydrates, protein,
        satured_fat, sugar, fiber,
        salt, calories
    } = req.body;
    if(!name ||!fat ||!carbohydrates ||!protein){
        return res.status(400).json({ message: 'Missing required fields' });
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
}

const publishFood = async(req, res) => {
    const food = await Food.findByIdAndUpdate(req.params.id)
    if(!food){
        return res.status(404).json({ message: 'Food not found' });
    } else {
        food.public = true;
        await food.save();
        res.json(food);
    }
}

const getFood = async(req, res) => {
    const food = await Food.findById(req.params.id);
    if(food){
        res.json(food)
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
}

const createFood = async (req, res) => {
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
}

const updateFood = async (req, res) => {
    const {name, unit, serving_size, fat, satured_fat, carbohydrates, sugar, fiber, protein, salt, calories} = req.body;
    const food = await Food.findById(req.params.id)
    if(food){
        food.name = name || food.name;
        food.unit = unit || food.unit;
        food.serving_size = serving_size || food.serving_size;
        food.fat = fat || food.fat;
        food.satured_fat = satured_fat || food.satured_fat;
        food.carbohydrates = carbohydrates || food.carbohydrates;
        food.sugar = sugar || food.sugar;
        food.fiber = fiber || food.fiber;
        food.protein = protein || food.protein;
        food.salt = salt || food.salt;
        food.calories = calories || food.fat * 9 + food.carbohydrates * 4 + food.protein * 4;

        const updatedFood = await food.save();
        res.json(updatedFood);
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
}

const deleteFood = async (req, res) => {
    const food = await Food.findByIdAndDelete(req.params.id)
    if(food){
        await food.deleteOne({_id: food._id});
        res.json({ message: 'Food deleted successfully' });
    } else {
        res.status(404).json({ message: 'Food not found' });
    }
}

module.exports = {
    getFoods,
    myFoods,
    createMyFood,
    publishFood,
    getFood,
    createFood,
    updateFood,
    deleteFood
}