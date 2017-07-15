import React, { Component } from 'react';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import { withRouter } from 'react-router-dom';
import createConferenceMutation from '../queries/createConferenceMutation';
import apolloConnect from '../connections/apolloConnect';

const client = apolloConnect;

class CreateConference extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
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

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleStartChange(event) {
    this.setState({
      start: event.target.value
    });
  }

  handleEndChange(event) {
    this.setState({
      end: event.target.value
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
          name: "",
          description: "",
          start: "",
          end: ""
        })
      });
  }
  render() {
    return (
      <form className="pt5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="center mw5 mw6-ns hidden ba mv4">
          <h1 className="f4 bg-near-black white mv0 pv2 ph3">Create Conference</h1>
          <label>Name:
          <input type="text" name="name" onChange={this.handleNameChange.bind(this)} value={this.state.name} />
          </label>
          <br />
          <label>Description:
            <input type="text" name="description" onChange={this.handleDescriptionChange.bind(this)} value={this.state.description} />
          </label>
          <br />
          <label>Start:
            <input type="text" name="start" onChange={this.handleStartChange.bind(this)} value={this.state.start} />
          </label>
          <br />
          <label>End:
            <input type="text" name="end" onChange={this.handleStartChange.bind(this)} value={this.state.end} />
          </label>
          <br />
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
