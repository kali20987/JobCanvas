  import React from 'react';
  import './App.css';
  import { ApolloClient, InMemoryCache, ApolloProvider,  } from '@apollo/client';
  
  import JobPosting from '../src/pages/JobPosting';

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
  })


  function App() {
    return (
      <ApolloProvider client={client}>
        <div className="container mx-auto">
          <JobPosting />
      </div>
      </ApolloProvider>
    );
  }


  export default App;

