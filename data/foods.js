const foods = [
    {
        name: 'Continente Equilíbrio Leite Magro',
        unit: 'ml',
        serving_size: 100,
        fat: 0.5,
        saturated_fat: 0.1,
        carbohydrates: 4.8,
        sugar: 4.8,
        fiber: 0,
        protein: 3.8,
        salt: 0,
        public: true
    },
    {
        name: 'Continente Cereais Arroz Tufado com Chocolate',
        unit: 'g',
        serving_size: 100,
        fat: 3,
        saturated_fat: 1.2,
        carbohydrates: 79,
        sugar: 26,
        fiber: 4.2,
        protein: 7.5,
        salt: 0.65,
        public: true
    },
    {
        name: 'Nestlé Fitness Cereais',
        unit: 'g',
        serving_size: 30,
        fat: 1.5,
        saturated_fat: 0.3,
        carbohydrates: 24,
        sugar: 6.3,
        fiber: 2.7,
        protein: 3.7,
        salt: 0.2,
        public: true
    },
    {
        name: 'Milbona Greek Yogurt Natural',
        unit: 'g',
        serving_size: 100,
        fat: 4.3,
        saturated_fat: 2.9,
        carbohydrates: 5.5,
        sugar: 5.5,
        fiber: 0,
        protein: 9,
        salt: 0.1,
        public: true
    },
    {
        name: 'Pingo Doce Chocolate Negro 70%',
        unit: 'g',
        serving_size: 25,
        fat: 13.1,
        saturated_fat: 8.1,
        carbohydrates: 15,
        sugar: 10.4,
        fiber: 2.4,
        protein: 2.5,
        salt: 0,
        public: true
    },
    {
        name: 'Activia Natural Yogurt',
        unit: 'g',
        serving_size: 125,
        fat: 3.1,
        saturated_fat: 2,
        carbohydrates: 5.3,
        sugar: 5.3,
        fiber: 0,
        protein: 4.3,
        salt: 0.16,
        public: true
    },
    {
        name: 'Continente Pão Integral',
        unit: 'g',
        serving_size: 40,
        fat: 1,
        saturated_fat: 0.2,
        carbohydrates: 20,
        sugar: 1.1,
        fiber: 3.5,
        protein: 3.9,
        salt: 0.35,
        public: true
    },
    {
        name: 'Continente Atum ao Natural',
        unit: 'g',
        serving_size: 100,
        fat: 1,
        saturated_fat: 0.3,
        carbohydrates: 0,
        sugar: 0,
        fiber: 0,
        protein: 25,
        salt: 1,
        public: true
    },
    {
        name: 'Mimosa Leite Meio Gordo',
        unit: 'ml',
        serving_size: 200,
        fat: 3.6,
        saturated_fat: 2.4,
        carbohydrates: 9.6,
        sugar: 9.6,
        fiber: 0,
        protein: 6.8,
        salt: 0.2,
        public: true
    },
    {
        name: 'Continente Cereais Milho',
        unit: 'g',
        serving_size: 30,
        fat: 0.4,
        saturated_fat: 0.1,
        carbohydrates: 26,
        sugar: 1.8,
        fiber: 2.2,
        protein: 2.4,
        salt: 0.45,
        public: true
    },
    {
        name: 'Pingo Doce Arroz Integral',
        unit: 'g',
        serving_size: 100,
        fat: 1.9,
        saturated_fat: 0.4,
        carbohydrates: 74.4,
        sugar: 0.4,
        fiber: 3.6,
        protein: 7.7,
        salt: 0.02,
        public: true
    },
    {
        name: 'Milbona Leite de Amêndoa',
        unit: 'ml',
        serving_size: 100,
        fat: 1.1,
        saturated_fat: 0.1,
        carbohydrates: 3.1,
        sugar: 2.8,
        fiber: 0.4,
        protein: 0.5,
        salt: 0.1,
        public: true
    },
    {
        name: 'Activia Yogurt Natural Açúcarado',
        unit: 'g',
        serving_size: 125,
        fat: 3.1,
        saturated_fat: 2,
        carbohydrates: 11.2,
        sugar: 11.2,
        fiber: 0,
        protein: 4.1,
        salt: 0.16,
        public: true
    },
    {
        name: 'Continente Manteiga sem Sal',
        unit: 'g',
        serving_size: 10,
        fat: 8.2,
        saturated_fat: 5.3,
        carbohydrates: 0,
        sugar: 0,
        fiber: 0,
        protein: 0.1,
        salt: 0,
        public: true
    },
    {
        name: 'Nestlé Fitness Granola',
        unit: 'g',
        serving_size: 45,
        fat: 6.6,
        saturated_fat: 0.8,
        carbohydrates: 29,
        sugar: 7.5,
        fiber: 5,
        protein: 5.7,
        salt: 0.04,
        public: true
    },
    {
        name: 'Pingo Doce Atum ao Natural',
        unit: 'g',
        serving_size: 120,
        fat: 0.9,
        saturated_fat: 0.2,
        carbohydrates: 0,
        sugar: 0,
        fiber: 0,
        protein: 27.6,
        salt: 1.1,
        public: true
    },
    {
        name: 'Alpro Bebida de Aveia',
        unit: 'ml',
        serving_size: 100,
        fat: 1.5,
        saturated_fat: 0.3,
        carbohydrates: 9.8,
        sugar: 3.2,
        fiber: 1.2,
        protein: 1,
        salt: 0.1,
        public: true
    },
    {
        name: 'Nestlé Cerelac 8 Cereais',
        unit: 'g',
        serving_size: 25,
        fat: 2.2,
        saturated_fat: 0.4,
        carbohydrates: 19.5,
        sugar: 7.5,
        fiber: 1.5,
        protein: 2.6,
        salt: 0.05,
        public: true
    },
    {
        name: 'Mimosa Manteiga com Sal',
        unit: 'g',
        serving_size: 10,
        fat: 8.2,
        saturated_fat: 5.2,
        carbohydrates: 0.4,
        sugar: 0.4,
        fiber: 0,
        protein: 0.1,
        salt: 0.22,
        public: true
    },
    {
        name: 'Milbona Queijo Quark',
        unit: 'g',
        serving_size: 100,
        fat: 0.2,
        saturated_fat: 0.1,
        carbohydrates: 4.1,
        sugar: 3.6,
        fiber: 0,
        protein: 11.6,
        salt: 0.1,
        public: true
    },
    {
        name: 'Continente Nozes',
        unit: 'g',
        serving_size: 30,
        fat: 20.3,
        saturated_fat: 1.5,
        carbohydrates: 3.8,
        sugar: 0.8,
        fiber: 2.5,
        protein: 4.7,
        salt: 0,
        public: true
    },
    {
        name: 'Continente Arroz Carolino',
        unit: 'g',
        serving_size: 100,
        fat: 0.7,
        saturated_fat: 0.2,
        carbohydrates: 77,
        sugar: 0.2,
        fiber: 1.4,
        protein: 6.9,
        salt: 0.03,
        public: true
    },
    {
        name: 'Alpro Bebida de Soja',
        unit: 'ml',
        serving_size: 100,
        fat: 1.8,
        saturated_fat: 0.3,
        carbohydrates: 0.2,
        sugar: 0.2,
        fiber: 0.6,
        protein: 3.3,
        salt: 0.09,
        public: true
    },
    {
        name: 'Nestlé Estrelitas Cereais',
        unit: 'g',
        serving_size: 30,
        fat: 1.2,
        saturated_fat: 0.3,
        carbohydrates: 26,
        sugar: 9,
        fiber: 1.5,
        protein: 2.3,
        salt: 0.4,
        public: true
    },
    {
        name: 'Pingo Doce Frango Peito',
        unit: 'g',
        serving_size: 100,
        fat: 1.6,
        saturated_fat: 0.5,
        carbohydrates: 0,
        sugar: 0,
        fiber: 0,
        protein: 23,
        salt: 0.12,
        public: true
    }
];


foods.forEach(food => {
    const fatCalories = food.fat * 9;
    const carbohydrates_calories = food.carbohydrates * 4;
    const protein_calories = food.protein * 4;
    const totalCalories = fatCalories + carbohydrates_calories + protein_calories;
    food.calories = totalCalories;
})

module.exports = foods