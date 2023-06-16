// import React from 'react';
// import { useState } from 'react'


// export default function SearchBox() {

//     const [searchInput, setSearchInput] = useState()

//     const API_ID = '039bd7f5';
//     const API_KEY = 'e3e8bbf73557a797731aaadbc6f363fb';
    
//     // Updated selector
    
//     async function jobSearch(input) {
//       const data = await fetch(
//         `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=50&title_only=${searchInput}`
//       );
//       const jsonData = await data.json();
//       const jobData = jsonData.results;
//       console.log(jobData);
//     }
    

//     return (
//         <div className="search-container">
              
//                   <input 
//                   id="input" type="text" className="input" placeholder="Search..."
//                   onChange={(event) => setSearchInput(event.target.value)}
//                   />
//                   <button id="searchBtn" className="searchBtn" onClick={jobSearch} >Search</button>
              

//     </div>
//     )

    
// };


// Commented out searchbox because it is incorporated in navbar now. Left SearchBox.js in case we need to restructure. Better safe than sorry!