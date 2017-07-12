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

class CreateConference extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "Submitted from Form",
      start: "2017-07-12T04:00:00.000Z",
      end: "2017-07-12T04:00:00.000Z",
      locationName: "InputLand",
      locationCity: "abc",
      locationState: "xyz",
      tags: [
        {
          name: "Form"
        },
        {
          name: "Apollo"
        }
      ]
    }
  }
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        name: this.state.name,
        description: this.state.description,
        start: this.state.start,
        end: this.state.end,
        locationName: this.state.locationName,
        locationCity: this.state.locationCity,
        locationState: this.state.locationState,
        tags: this.state.tags
      }
    })
      .then(res => {
        this.setState({
          name: ""
        })
      });
  }
  render() {
    return (
      <form className="pt5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">Create Conference</h1>
          <label>
            Name:
          <input type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

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
