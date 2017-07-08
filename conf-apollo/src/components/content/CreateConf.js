import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';
import { withRouter } from 'react-router-dom'

const client = new ApolloClient({
  networkInterface: createNetworkInterface('https://api.graph.cool/simple/v1/conf-ql'),
});

const conferencesListQuery = gql`
  query ConferencesListQuery {
    allConferences {
      id
      name
      description
      start
      end
      location {
        id
        name
        city
        state
        country
        postalCode
        address
      }
      tags {
        id
        name
      }
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

  return <ul className="pt5">
    {allConferences
      .map(conf =>
        <article key={conf.id} className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">Create Conference</h1>
        </article>)}
  </ul>;
};

const ConferencesListWithData = graphql(conferencesListQuery)(ConferencesList);

const CreateConferences = () => (
  <div>
    Create
  </div>
)

class CreateConf extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ConferencesListWithData />
      </ApolloProvider>
    );
  }
}

export default withRouter(CreateConf);
