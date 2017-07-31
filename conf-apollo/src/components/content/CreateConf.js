import React, { Component } from 'react';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import { withRouter } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import PlacesAutocomplete from 'react-places-autocomplete'

import createConferenceMutation from '../queries/createConferenceMutation';
import apolloConnect from '../connections/apolloConnect';

const client = apolloConnect;

class CreateConference extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      start: moment().utc().format(),
      startDisplay: moment(),
      end: moment().utc().format(),
      endDisplay: moment(),
      locationName: "",
      locationCity: "",
      locationState: "",
      tags: [],
      tag: ""
    }
    this.onAddressChange = (locationName) => this.setState({ locationName });
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

  handleTagAdd(event) {
    event.preventDefault();
    let newTagValue = this.state.tag;
    let newTag = {
      name: newTagValue
    }
    this.setState({
      tags: [...this.state.tags, newTag],
      tag: ""
    })
  }

  handleTagRemove(event) {
    event.preventDefault();
    if (this.state.tags.length > 0) {
      let tagIndexToRemove = this.state.tags.length - 1;
      if (this.state.tags.length === 1) {
        this.setState({
          tags: []
        })
      } else {
        this.setState((prevState) => {
          return {
            tags: prevState.tags.filter(tag => tag.name !== prevState.tags[tagIndexToRemove].name)
          }
        })
      }
    }
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
          start: moment().utc().format(),
          startDisplay: moment(),
          end: moment().utc().format(),
          endDisplay: moment(),
          locationName: "",
          tags: [],
          tag: ""
        })
      });
  }

  render() {
    const addressInput = {
      value: this.state.locationName,
      onChange: this.onAddressChange,
      type: 'search',
      placeholder: 'Enter the address...'
    }

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
            <PlacesAutocomplete className="input-reset ba b--black-20 pa2 mb2 db w-100" name="locationName" inputProps={addressInput} />
            </label>
            <label className="ph2 f6 b db mb2">Tags:
              <div className="db">
                <input className="input-reset ba b--black-20 pa2 mb2 w-25" type="text" name="tag" onChange={this.handleChange.bind(this)} value={this.state.tag} />
                <input className="ml2 ph2 f6 b" type="button" onClick={this.handleTagAdd.bind(this)} value="+" />
                <input className="ml2 ph2 f6 b" type="button" onClick={this.handleTagRemove.bind(this)} value="-" />
              </div>
              <ul>
                {this.state.tags.map((tag, index) =>
                  <li className="f6 link dim br-pill ba ph3 pv2 mr1 mb2 dib black" key={index}>
                    {tag.name}
                  </li>
                )}
              </ul>
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
