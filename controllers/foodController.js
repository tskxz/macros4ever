const Food = require("../models/foodModel")

const getFoods = async(req, res) => {
    const foods = await Food.find({public: true});
    res.json(foods);
}

const myFoods = async(req, res) => {
    const myFoods = await Food.find({ user: req.user._id });
    res.json(myFoods)
}

module.exports = {
    getFoods,
    myFoods,
}