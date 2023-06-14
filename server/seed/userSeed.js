const User = require('../models/User');


const userData = [
    {
        firstName: 'Micheal',
        lastName: 'Brink',
        gender: 'M',
        email: 'mbrink@gmail.com',
        password: 'mango1234',
    },
    {
        firstName: 'Bradley',
        lastName: 'Penn',
        gender: 'M',
        email: 'bpenn@gmail.com',
        password: 'cherry1234',
    },
    {
        firstName: 'Beatrice',
        lastName: 'Latte',
        gender: 'F',
        email: 'blatte@yahoo.com',
        password: 'orange1234',
    },
    {
        firstName: 'Jessy',
        lastName: 'Springer',
        gender: 'F',
        email: 'jspringer@gfuel.com',
        password: 'sweets1234',
    },
    {
        firstName: 'Mangonn',
        lastName: 'Rangon',
        gender: 'M',
        email: 'mrangon@outlet.com',
        password: 'apple1234',
    },
    {
        firstName: 'Nat',
        lastName: 'Dawg',
        gender: 'F',
        email: 'ndawg@hotbox.com',
        password: 'plum1234',
    }
];

const seedUser = () => User.insertMany(userData);

module.exports = seedUser;