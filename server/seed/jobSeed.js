const Job = require("../models/Job");
const fetch = require("node-fetch");

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY= process.env.REACT_APP_API_KEY;



async function seedJobs() { 
   let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&where=Georgia` ;

   const data = await fetch(url);

   const jsonData = await data.json();
   const jobData = jsonData.results;

   console.log(jobData);

   for (let x = 0; x < jobData.length; x++) {
            
      const newJobData = ({
                 companyName: jobData[x].company.display_name,
                  jobTitle: jobData[x].title,
                  description: jobData[x].description,
                 location: jobData[x].location.display_name,
                  position: jobData[x].contract_type,
                  salary: jobData[x].salary_max,
            });

      console.log(newJobData);
        

  await Job.insertMany(newJobData)    
 }   
};



module.exports = seedJobs;