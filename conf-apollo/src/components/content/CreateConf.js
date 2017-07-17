import React, { Component } from 'react';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import { withRouter } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import createConferenceMutation from '../queries/createConferenceMutation';
import apolloConnect from '../connections/apolloConnect';

const client = apolloConnect;

class CreateConference extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      start: "",
      startDisplay: moment(),
      end: "",
      endDisplay: moment(),
      locationName: "",
      locationCity: "",
      locationState: "",
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

  handleStartChange(date) {
    let formattedDate = date.utc().format();
    this.setState({
      start: formattedDate,
      startDisplay: date
    });
  }

  handleEndChange(date) {
    let formattedDate = date.utc().format();
    this.setState({
      end: formattedDate,
      endDisplay: date
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
          startDisplay: moment(),
          end: "",
          endDisplay: moment(),
          locationName: "",
          locationCity: "",
          locationState: "",
          tags: []
        })
      });
  }
  render() {
    return (
      <div className="pt5">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="center mw5 mw6-ns hidden ba mv4">
            <h1 className="f4 bg-near-black white mv0 pv2 ph3">Create Conference</h1>
            <label className="ph2 pt2 f6 b db mb2">Name:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
            </label>
            <label className="ph2 f6 b db mb2">Description:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="description" onChange={this.handleChange.bind(this)} value={this.state.description} />
            </label>
            <label className="w3 ph2 f6 b db mb2">Start:
            <DatePicker
                selected={this.state.startDisplay}
                onChange={this.handleStartChange.bind(this)}
              />
            </label>
            <label className="w3 ph2 f6 b db mb2">End:
            <DatePicker
                selected={this.state.endDisplay}
                onChange={this.handleEndChange.bind(this)}
              />
            </label>
            <label className="ph2 f6 b db mb2">Location Name:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="locationName" onChange={this.handleChange.bind(this)} value={this.state.locationName} />
            </label>
            <label className="ph2 f6 b db mb2">Location City:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="locationCity" onChange={this.handleChange.bind(this)} value={this.state.locationCity} />
            </label>
            <label className="ph2 f6 b db mb2">Location State:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="locationState" onChange={this.handleChange.bind(this)} value={this.state.locationState} />
            </label>
            <label className="ph2 f6 b db mb2">Tags:
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name="tags" onChange={this.handleChange.bind(this)} value={this.state.tags} />
            </label>
            <input className="ml2 ph2 f6 b mb2" type="submit" value="Submit" />
          </div>
        </form>
      </div>
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
