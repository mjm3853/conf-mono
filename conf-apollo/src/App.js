import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { typeDefs } from './schema';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/cj4l8kqb4zces0164cggch22m'),
});

const conferencesListQuery = gql`
  query ConferencesListQuery {
    allConferences {
      id
      name
      description
    }
  }
`;

const ConferencesList = ({ data: { loading, error, allConferences } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul className="Item-list">
    {allConferences
      .map(conf => 
        <li key={conf.id}>
          <p>{conf.name}</p>
          <p>{conf.description}</p>
        </li>)}
  </ul>;
};

const ConferencesListWithData = graphql(conferencesListQuery)(ConferencesList);


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to conf-apollo</h2>
          </div>
          <ConferencesListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
