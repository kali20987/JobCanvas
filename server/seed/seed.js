const mongoose = require('mongoose')
const db = require('../config/connection').mongoURI; 
const Job = require('../models/Job');
const fetch = require('node-fetch');

const API_ID = '039bd7f5';
const API_KEY= 'e3e8bbf73557a797731aaadbc6f363fb';

mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));


async function seedJobs() {

  const response = await fetch(
    `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`
  );
  const jsonData = await response.json();
  const jobData = [...jsonData.results];

console.log(jobData, 'Yaya');

  const jobTableData = [];

  for (var x = 0; x < jobData.length; x++) {
    const jobCompanyName = jobData[x].company;
    const jobTitle = jobData[x].title;
    const jobDescription = jobData[x].description;
    const jobLocation = jobData[x].location;
    const jobPosition = jobData[x].contract_time; 
    const jobSalary = jobData[x].salary;

    const job = {
      companyName: jobCompanyName,
      location: jobLocation,
      jobTitle: jobTitle,
      description: jobDescription,
      position: jobPosition,
      salary: jobSalary,
   
    };

    jobTableData.push(job);

    console.log([jobCompanyName, jobTitle, jobLocation, jobDescription, jobPosition, jobSalary]);
  }


  await Job.bulkCreate(jobTableData);
  console.log('Seeding completed.');
}


// seedJobs();
module.exports = seedJobs;