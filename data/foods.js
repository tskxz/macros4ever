const foods = [
    {
        id: 1,
        name: 'Continente Equilíbrio Leite Magro',
        unit: 'ml',
        serving_size: 100,
        fat: 0.5,
        satured_fat: 0.1,
        carbohydrates: 4.8,
        sugar: 4.8,
        fiber: 0,
        protein: 3.8,
        salt: 0,
    },

    {
        id: 2,
        name: 'Continente Cereais Arroz Tufado com Chocolate',
        unit: 'g',
        serving_size: 100,
        fat: 3,
        satured_fat: 1.2,
        carbohydrates: 79,
        sugar: 26,
        fiber: 4.2,
        protein: 7.5,
        salt: 0.65,
    }
]

foods.forEach(food => {
    const fatCalories = food.fat * 9;
    const carbohydrates_calories = food.carbohydrates * 4;
    const protein_calories = food.protein * 4;
    const totalCalories = fatCalories + carbohydrates_calories + protein_calories;
    food.calories = totalCalories;
})

module.exports = foods