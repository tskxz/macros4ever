const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const foodRoute = require('./routes/foodRoute');
const userRoute = require('./routes/userRoute');
const mealRoute = require('./routes/mealRoute');

const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/foods', foodRoute);
app.use('/api/users', userRoute);
app.use('/api/meals', mealRoute);

app.get('/', (req, res) => {
    res.json({
      message: "Welcome to the macros4ever API!",
      routes: {
        foodRoutes: {
          getAllFoods: {
            method: "GET",
            route: "/api/foods",
            description: "Retrieve a list of all available food items."
          },
          getMyFoods: {
            method: "GET",
            route: "/api/foods/myfoods",
            description: "Retrieve all food items created by the authenticated user."
          },
          createMyFood: {
            method: "POST",
            route: "/api/foods/myfoods",
            description: "Create a new food item for the authenticated user."
          },

        },
        mealRoutes: {
          getAllMeals: {
            method: "GET",
            route: "/api/meals",
            description: "Retrieve all meals created by the authenticated user."
          },
          getMealById: {
            method: "GET",
            route: "/api/meals/:id",
            description: "Retrieve a single meal created by the authenticated user."
          },
          createMeal: {
            method: "POST",
            route: "/api/meals",
            description: "Create a new meal for the authenticated user."
          },
          deleteMealById: {
            method: "DELETE",
            route: "/api/meals/:id",
            description: "Delete a meal created by the authenticated user."
          }
        },
        userRoutes: {
          loginUser: {
            method: "POST",
            route: "/api/users/login",
            description: "Log in a user and receive an authentication token."
          },
          registerUser: {
            method: "POST",
            route: "/api/users/register",
            description: "Register a new user."
          },
        }
      }
    });
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
