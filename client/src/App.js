import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import JobPosting from '../src/pages/JobPosting';
import './App.css';
import SearchBox from './components/SearchBox';
// import PageContainer from './components/PageContainer';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from '../src/pages/LogIn';
import Signup from './pages/SignUp';

const client = new ApolloClient({
uri: 'http://localhost:3001/graphql',
cache: new InMemoryCache()
})


function App() {
return (
<ApolloProvider client={client}>
    <div className="App">
     <NavBar/>
     <SearchBox/>
      <Home/> 
      {/* <PageContainer/> */}
      {/* will delete home and navbar and use pagecontainer instead */}
    </div>
<div className="container mx-auto">
<JobPosting />
<Login />
<Signup/>
</div>
</ApolloProvider>
);
}
export default App;
