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

const createConferenceMutation = gql`
  mutation createConference(
    $name: String!,
    $description: String!,
    $start: DateTime!,
    $end: DateTime!,
    $locationName: String!,
    $locationCity: String!,
    $locationState: String!,
    $tags: [ConferencetagsTag!]
  ) { createConference (
    name: $name,
    description: $description
    start: $start,
    end: $end,
    location: {
      name: $locationName,
      city: $locationCity,
      state: $locationState
    },
    tags: $tags
  ) {
    createdAt
  }
}
`;

const CreateConference = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { 
          name: evt.target.value,
          description: "Submitted from input",
          start: "2017-07-12T04:00:00.000Z",
          end: "2017-07-12T04:00:00.000Z",
          locationName: "InputLand",
          locationCity: "abc",
          locationState: "xyz",
          tags: [
            {
              name: "first"
            },
            {
              name: "second"
            }
          ]
         }
      })
        .then(res => {
          evt.target.value = '';
        });
    }
  };
  return (
    <ul className="pt5">
      <article className="center mw5 mw6-ns hidden ba mv4">
        <h1 className="f4 bg-near-black white mv0 pv2 ph3">Create Conference</h1>
        <input
          type="text"
          placeholder="New channel"
          onKeyUp={handleKeyUp}
        />
      </article>
    </ul>
  );
};

const CreateConferenceWithData = graphql(createConferenceMutation)(CreateConference);

class CreateConf extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CreateConferenceWithData />
      </ApolloProvider>
    );
  }
}

export default withRouter(CreateConf);
