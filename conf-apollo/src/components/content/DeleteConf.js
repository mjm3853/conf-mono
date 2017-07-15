import React, { Component } from 'react';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import { withRouter } from 'react-router-dom';
import apolloConnect from '../connections/apolloConnect';
import deleteConferenceMutation from '../queries/deleteConferenceMutation';
import conferencesListQuery from '../queries/conferencesListQuery';

const client = apolloConnect;

class DeleteConference extends Component {
  constructor(){
    super()
    this.state = {
      deleteEnabled: true
    }
  }

  handleDelete(event) {
    this.setState({
      deleteEnabled: false
    })
    this.props.mutate({
      variables: {
        id: this.props.confId
      },
      refetchQueries: [
        { query: conferencesListQuery }
      ]
    })
  }

  render() {
    return <button name="delete" disabled={!this.state.deleteEnabled} onClick={this.handleDelete.bind(this)}>DELETE BUTTON PLACEHOLDER</button>
  }
}

const DeleteConferenceWithData = graphql(deleteConferenceMutation)(DeleteConference);

class DeleteConf extends Component {
  render() {
    return (
      <ApolloProvider client={client} confId={this.props.confId}>
        <DeleteConferenceWithData confId={this.props.confId} />
      </ApolloProvider>
    );
  }
}

export default withRouter(DeleteConf);
