// const seedJobs = require('./jobSeed');
const seedJobs = require('./jobSeed1');
const seedUser = require('./userSeed')

const db = require('../config/connection').mongoURI


const seedAll = async () => {
    await db.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');
  
    await seedJobs();
    console.log('\n----- JOB SEEDED -----\n');
  
   
  
    process.exit(0);
  };
  
  seedAll();