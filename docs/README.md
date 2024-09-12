<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://files.polido.pt/logo-StdXuu.png" alt="Project logo"></a>
</p>

<h3 align="center">api-macros4ever</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/tskxz/macros4ever.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/tskxz/macros4ever.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
</div>

---

<p align="center"> A Node.js API with Express.js and MongoDB that provides a food database with nutritional information and allows users to create and manage their own food items and meals.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This API project, built with Node.js, Express.js, and MongoDB, is designed to offer a detailed food database with nutritional information and to enable users to create and manage their own food items and meals. It provides a comprehensive resource for accessing macro information, supporting personalized dietary tracking and meal planning. By allowing users to input custom foods and recipes, the API facilitates informed nutritional choices and supports both individual and professional needs in managing diet and health.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you need to install the following software:

1. **Node.js**:
   - Node.js is required to run the server-side code of the application.
   - **Installation**:
     - Visit the [Node.js official website](https://nodejs.org/).
     - Download and install the recommended version for your operating system.
     - Verify the installation by running the following commands in your terminal:

     ```bash
     node -v
     npm -v
     ```

2. **MongoDB**:
   - MongoDB is needed to manage the application's database.
   - **Installation**:
     - Visit the [MongoDB official website](https://www.mongodb.com/try/download/community) to download the Community Server.
     - Follow the instructions for your operating system to complete the installation.
     - Start the MongoDB server by running:

     ```bash
     mongod
     ```

### Installing

Follow these steps to set up a development environment:

1. **Clone the Repository**:
   - Clone the project repository to your local machine.

     ```bash
     git clone https://github.com/tskxz/macros4ever
     ```

2. **Navigate to Project Directory**:
   - Change to the project directory.

     ```bash
     cd macros4ever
     ```

3. **Install Project Dependencies**:
   - Install the necessary Node.js packages listed in `package.json`.

     ```bash
     npm install
     ```

4. **Start the MongoDB Server**:
   - Ensure MongoDB is running. Start the server if it's not already running.

     ```bash
     mongod
     ```

5. **Run the Application**:
   - Start the application server.

     ```bash
     npm start
     ```

6. **Verify Setup**:
   - Check if the application is running by visiting `http://localhost:3000` in your web browser.

Repeat these steps as needed to configure or troubleshoot your development environment.


## 🎈 Usage <a name="usage"></a>

This section describes the available API endpoints and how to use them.

### Food Routes

- **`GET /api/foods`**
  - **Public**: Retrieve a list of all food items.
  - **Usage**: This endpoint is accessible by anyone and returns a list of all available food items.

- **`GET /api/foods/myfoods`**
  - **Private**: Retrieve all food items created by the authenticated user.
  - **Usage**: Requires authentication. Returns food items that the currently logged-in user has created.

- **`POST /api/foods/myfoods`**
  - **Private**: Create a new food item for the authenticated user.
  - **Usage**: Requires authentication. Allows users to add new food items to their collection.

- **`POST /api/foods/publish/:id`**
  - **Private Admin**: Publish a food item with the given ID.
  - **Usage**: Requires authentication and admin privileges. Publishes a food item to make it available to all users.

- **`GET /api/foods/:id`**
  - **Public**: Retrieve a single food item with the given ID.
  - **Usage**: This endpoint is accessible by anyone and returns details of a specific food item.

- **`POST /api/foods/`**
  - **Private Admin**: Create a new food item.
  - **Usage**: Requires authentication and admin privileges. Allows administrators to add new food items to the database.

- **`PUT /api/foods/:id`**
  - **Private Admin**: Update a food item with the given ID.
  - **Usage**: Requires authentication and admin privileges. Updates details of a specific food item.

- **`DELETE /api/foods/:id`**
  - **Private Admin**: Delete a food item with the given ID.
  - **Usage**: Requires authentication and admin privileges. Removes a specific food item from the database.

### User Routes

- **`POST /api/users/login`**
  - **Public**: Log in a user.
  - **Usage**: Allows users to log in by providing their credentials. Returns an authentication token.

- **`POST /api/users/register`**
  - **Public**: Register a new user.
  - **Usage**: Allows new users to create an account by providing their details.

- **`GET /api/users`**
  - **Private Admin**: Retrieve a list of all users.
  - **Usage**: Requires authentication and admin privileges. Returns a list of all registered users.

- **`POST /api/users/logout`**
  - **Public**: Log out a user.
  - **Usage**: Logs out the currently logged-in user and invalidates their authentication token.

- **`GET /api/users/profile`**
  - **Private**: Retrieve the authenticated user's information.
  - **Usage**: Requires authentication. Returns the profile details of the currently logged-in user.



## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@tskxz](https://github.com/tskxz) - Idea & Initial work

See also the list of [contributors](https://github.com/tskxz/macros4ever/contributors) who participated in this project.
