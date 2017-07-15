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
  networkInterface: createNetworkInterface(
    { uri: 'https://api.graph.cool/simple/v1/conf-ql' }
  )
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
    return <p className="center mw5 pt6">Loading...</p>;
  }
  if (error) {
    return <p className="center mw5 pt6">{error.message}</p>;
  }

  return <ul className="pt5">
    {allConferences
      .map(conf =>
        <article key={conf.id} className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{conf.name}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{conf.description}</p>
            <p className="f6 f5-ns lh-copy measure mv0">From {conf.start} to {conf.end}</p>
            <p className="f6 f5-ns lh-copy measure mv0">{conf.location.city}, {conf.location.state}</p>
            <div>
              {conf.tags
                .map(tag =>
                  <p className="f6 link dim br-pill ba ph3 pv2 mr1 mb2 dib black" key={tag.id}>{tag.name}</p>
                )}
            </div>
          </div>
        </article>)}
  </ul>;
};

const ConferencesListWithData = graphql(conferencesListQuery, {
  options: {
    fetchPolicy: 'cache-and-network'
  }
})(ConferencesList);

class ListConf extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ConferencesListWithData />
      </ApolloProvider>
    );
  }
}

export default withRouter(ListConf);
