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
        required: false

    }, 
    salary: {
        type: String,
        required: false
    },
    jobLister: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    }
});

const Job = mongoose.model("Job", jobSchema, "Job");

module.exports = Job;
