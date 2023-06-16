import React, { useState } from 'react';

const styles = {
  jobBoxStyle: { 
  width:'950px',
  height:'400px', 
  lineHeight:'3em',
  overflow:'scroll', 
  padding:'5px', 
  },
  jobItemStyle: {
    border: '2px solid',
    borderRadius: '5px',
    margin:'0px',
    padding: '10px'
  }
}

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const [jobData, setJobData] = useState([]);

  const API_ID = '039bd6f5';
  const API_KEY = '380d382ccd7b1ed9a74925367df76ea0';

  async function jobSearch(input) {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&title_only=${searchInput}`
    );
//     https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}



    const jsonData = await data.json();
    const jobs = jsonData.results;
    setJobData(jobs);
  }

  return (
    <div className="search-container">
      <input
        id="input"
        type="text"
        className="input"
        placeholder="Search..."
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button id="searchBtn" className="searchBtn" onClick={jobSearch}>
        Search
      </button>

      <div style={styles.jobBoxStyle}  >
        <h3>Search Result:</h3>
        {jobData.map((job, index) => (

          <div className="job-item" key={index}  >

            <h5>{job.company.display_name}</h5>
            <p>{job.title}</p>
            <p>{job.description}</p>
            <p>{job.location.display_name}</p>
            <p>{job.contract_type}</p>
            <p>{job.salary}</p>

          </div>


        ))}
      </div>
    </div>
  );
}