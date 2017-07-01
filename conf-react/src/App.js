import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'

import React, { Component } from 'react';
import './App.css';
import ListConferences from './ListConferences'

const AppAllConferenceQuery = graphql`
  query AppAllConferenceQuery {
    viewer {
      ...ListConferences_viewer
    }
  }
`

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllConferenceQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListConferences viewer={props.viewer} />
          }
          return <div>Loading...</div>
        }}
       />
    );
  }
}

export default App;
