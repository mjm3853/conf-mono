import React, { Component } from 'react';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import { withRouter } from 'react-router-dom';
import apolloConnect from '../connections/apolloConnect';
import deleteConferenceMutation from '../queries/deleteConferenceMutation'

const client = apolloConnect;

class DeleteConference extends Component {
    constructor() {
        super()
    }
    render () {
        return <div>DELETE BUTTON PLACEHOLDER</div>
    }
}

const DeleteConferenceWithData = graphql(deleteConferenceMutation)(DeleteConference);

class DeleteConf extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <DeleteConferenceWithData />
      </ApolloProvider>
    );
  }
}

export default withRouter(DeleteConf);
