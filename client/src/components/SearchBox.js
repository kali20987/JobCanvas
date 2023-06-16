import React, { useState } from 'react';

const styles = {
  jobBoxStyle: { 
   lineHeight:'3em',
  overflow:'scroll', 
  padding:'5px', 
  },
  jobItemStyle: {
    border: '2px opaque gold',
    borderRadius: '10px',
    margin:'10px',
    padding: '10px',
  },
  pTagStyle: {
    fontSize: '10px',
  }
}

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const [jobData, setJobData] = useState([]);

  const API_ID = '9c19e01b';
  const API_KEY = '23a78db7bd3b02d0557a067cf16e5f1e';

  async function jobSearch(input) {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&title_only=${searchInput}`
    );
//     https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR_APP_ID}&app_key={YOUR_APP_KEY}



    const jsonData = await data.json();
    const jobs = jsonData.results;
    console.log(jobs);
    
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

          <div className="job-item" key={index} style={styles.jobItemStyle} >

            <h6>{job.company.display_name}</h6>
            <p style={styles.pTagStyle}>{job.title}</p>
            <p style={styles.pTagStyle}>{job.description}</p>
            <p style={styles.pTagStyle}>{job.location.display_name}</p>
            <p style={styles.pTagStyle}>{job.contract_time}</p>
            <p style={styles.pTagStyle}>$ { job.salary_max}</p>

          </div>


        ))}
      </div>
    </div>
  );
}