import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from '../pages/Home'

import 'bootstrap/dist/css/bootstrap.min.css';
// import JobPosting from '../pages/JobPosting';
// import SignUp from '../pages/SignUp';
// import LogIn from '../pages/LogIn';

// sets default landing page to home.

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home')



const renderPage = () => {

    if (currentPage === 'Home') {
        return <Home />;

    }
    // if (currentPage === 'JobPosting') {
    //     return <JobPosting />;
    // }
    // if (currentPage === 'Login') {
    //     return <LogIn />
    // }
    //   return <SignUp />;
};

const handlePageChange = (page) => setCurrentPage(page);

 return (
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
     

        {renderPage()}
    </div>
 );
};