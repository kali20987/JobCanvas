import React, { useState } from 'react';

const styles = {
  jobBoxStyle: {
    lineHeight: '2em',
    overflow: 'scroll',
    padding: '10px',
  },
  jobItemStyle: {
    border: '2px solid gold',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
  },
  pTagStyle: {
    fontSize: '15px',
  }
}

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const [jobData, setJobData] = useState([]);

  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  async function jobSearch() {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&title_only=${searchInput}`
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
            <p style={styles.pTagStyle}>$ {job.salary_max}</p>
            <p style={styles.pTagStyle}><a href={job.redirect_url} target='_blank' rel="noopener noreferrer" >See Original Posting and Apply Here</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
