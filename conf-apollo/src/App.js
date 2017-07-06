import React, { Component } from 'react';
import {
  ApolloClient,
  gql,
  graphql,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

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
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">{conf.name}</h1>
          <div className="pa3 bt">
            <p className="f6 f5-ns lh-copy measure mv0">{conf.description}</p>
            <p className="f6 f5-ns lh-copy measure mv0">From {conf.start} to {conf.end}</p>
            <p className="f6 f5-ns lh-copy measure mv0">{conf.location.city}, {conf.location.state}</p>
            <ul>
            {conf.tags
              .map(tag =>
                <li className="f6 link dim br-pill ba ph3 pv2 mb2 dib black" key={tag.id}>{tag.name}</li>
              )}
          </ul>
          </div>
        </article>)}
  </ul>;
};

const ConferencesListWithData = graphql(conferencesListQuery)(ConferencesList);

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="bg-black-90 fixed w-100 ph3 pv3 top-0 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
              <a className="link dim white dib mr3" href="#" title="Home">Home</a>
            </nav>
          </header>
          <ConferencesListWithData />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
