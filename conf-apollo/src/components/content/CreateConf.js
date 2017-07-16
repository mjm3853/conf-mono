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

  handleChange(event) {
    let property = event.target.name;
    let value = event.target.value;
    this.setState({
      [property]: value
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
          <label className="ph2 pt2 f6 b db mb2">Name:
          <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
          </label>
          <br />
          <label className="ph2 f6 b db mb2">Description:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="description" onChange={this.handleChange.bind(this)} value={this.state.description} />
          </label>
          <br />
          <label className="ph2 f6 b db mb2">Start:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="start" onChange={this.handleChange.bind(this)} value={this.state.start} />
          </label>
          <br />
          <label className="ph2 f6 b db mb2">End:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="end" onChange={this.handleChange.bind(this)} value={this.state.end} />
          </label>
          <br />
          <input className="ml2 ph2 f6 b mb2" type="submit" value="Submit" />
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
