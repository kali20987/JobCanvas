const seedJobs = require('./jobSeed');
const seedUser = require('./userSeed')

const db = require('../config/connection').mongoURI


const seedAll = async () => {
        
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
  
    await seedJobs();
    console.log('\n----- JOB SEEDED -----\n');
  
   
  
    process.exit(0);
  };
  
  seedAll();