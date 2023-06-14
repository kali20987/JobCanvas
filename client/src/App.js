import React from 'react';

import './App.css';
// import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
     <NavBar/>
      <Home/> 
      {/* <PageContainer/> */}
      {/* will delete home and navbar and use pagecontainer instead */}
    </div>
  );
}

export default App;
