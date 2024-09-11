const Food = require("../models/foodModel")

const getFoods = async(req, res) => {
    const foods = await Food.find({public: true});
    res.json(foods);
}

module.exports = {
    getFoods
}