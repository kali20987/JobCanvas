const mongoose = require('mongoose');
const Job = require("../models/Job");
const db = require("../config/connection").mongoURI;
const fetch = require("node-fetch");

const API_ID = '039bd7f5';
const API_KEY= 'e3e8bbf73557a797731aaadbc6f363fb';


let jobData;
let saveCounter = 0;

function seedJobs() {

mongoose.connect(db)
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));
const url = [`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`]
url.map(async url => {
try{
   const response = await fetch(url);
   const json = await response.json();
   jobData = [...json];
   console.log(jobData)
   for (let i = 0; i < jobData.length; i++) {
      let job = new Job({
           companyName: jobData[x].company,
            jobTitle: jobData[x].title,
            description: jobData[x].description,
           location: jobData[x].location,
            position: jobData[x].contract_time,
            salary: jobData[x].salary,
      });
console.log(job);
   job.save(() => {
      console.log("saved" + job)
      
      saveCounter++;
  
      if (saveCounter === jobData.length) {
         mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb   disconnected"))
         .catch(error => console.log(error));
         }
      });
   }
} catch (error) {
   console.log(error);
}
});
};
module.exports = seedJobs;