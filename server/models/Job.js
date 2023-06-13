const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const jobSchema = new Schema({
    companyName: {
        type: String,
        required: true,
        
    },
    location: {
        type: String,
        required: true,
      
    },
    jobTitle: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
        
    },
    position: {
        type: String,
        required: true

    }, 
    salary: {
        type: String,
        required: false
    }
});

const Job = mongoose.model("Job", jobSchema, "Job");

module.exports = Job;
