import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
} from 'react-apollo'
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './schema';
import './App.css';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
});

const conferencesListQuery = gql`
  query ConferencesListQuery {
    conferences {
      id
      name
    }
  }
`;

const ConferencesList = ({ data: { loading, error, conferences } }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return <ul className="Item-list">
    {conferences.map(conf => <li key={conf.id}>{conf.name}</li>)}
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
