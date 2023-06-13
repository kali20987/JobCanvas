const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
   firstName: {
        type: String,
        required: true,
        trim: true
    }, 
   lastName: {
        type: String,
        required: true,
        trim: true
    }, 
    gender: {
        type: String,
        required: false
    },
    
  email: {
        type: String,
        required: true,
        unique: true
    },
   password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    }
});

const User = model("User", userSchema, "User");

module.exports = User;