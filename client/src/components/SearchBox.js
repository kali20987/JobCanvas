import React from 'react';
import { useState } from 'react'


export default function SearchBox() {

  const [searchInput, setSearchInput] = useState('');
 

  const API_ID = '039bd7f5';
  const API_KEY = 'e3e8bbf73557a797731aaadbc6f363fb';

  // Updated selector

  async function jobSearch(input) {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&title_only=${searchInput}`
    );
    const jsonData = await data.json();
    const jobData = jsonData.results;

    console.log(jobData);


    for (let x = 0; x < jobData.length; x++) { 
      console.log(` 
        ${jobData[x].company.display_name},
        ${jobData[x].title},
        ${jobData[x].description},
        ${jobData[x].location.display_name},
        ${jobData[x].contract_type},
        ${jobData[x].salary_max}
      `);
      const Company = jobData[x].company.display_name;
      const Title = jobData[x].title;
      const Description = jobData[x].description;
      const Location = jobData[x].location.display_name;
      const Position = jobData[x].contract_type;
      const Salary = jobData[x].salary;
return `
${Company},
${Title},
${Description},
${Location},
${Position},
${Salary},
    `;

    }
  };
  return (
    <div className="search-container">

      <input
        id="input" type="text" className="input" placeholder="Search..."
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button id="searchBtn" className="searchBtn" onClick={jobSearch} >Search</button>

      <div>
          <div>
            <h3>HELLO</h3>
          </div>
       
      </div>

    </div>
  )


};
