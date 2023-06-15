import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import Home from '../src/pages/Home';
import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import JobPosting from '../src/pages/JobPosting';
import NavBar from '../src/components/NavBar';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobposting" element={<JobPosting />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;















// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
// import JobPosting from '../src/pages/JobPosting';
// import './App.css';
// import SearchBox from './components/SearchBox';
// // import PageContainer from './components/PageContainer';
// import Home from './pages/Home';
// import NavBar from './components/NavBar';
// import Login from './pages/Login';

// const client = new ApolloClient({
// uri: 'http://localhost:3001/graphql',
// cache: new InMemoryCache()
// })


// function App() {
// return (
// <ApolloProvider client={client}>
//     <div className="App">
//      <NavBar/>
//      <SearchBox/>
//       <Home/> 
//       {/* <PageContainer/> */}
//       {/* will delete home and navbar and use pagecontainer instead */}
//     </div>
// <div className="container mx-auto">
// <JobPosting />
// <Login />
// </div>
// </ApolloProvider>
// );
// }
// export default App;
