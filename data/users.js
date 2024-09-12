const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('password123', 10),
        isAdmin: true,
    },

    {
        name: 'user1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('password123'),
        isAdmin: false,
    },
]

module.exports = users