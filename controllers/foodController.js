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

module.exports = {
    getFoods,
    myFoods,
    createMyFood,
    publishFood
}