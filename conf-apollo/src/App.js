import React, { Component } from 'react';
import './App.css';

const ConferencesList = () =>
  (<ul className="Item-list">
      <li>Conference 1</li>
      <li>Conference 2</li>
    </ul>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Conf-Apollo</h2>
        </div>
        <ConferencesList />
      </div>
    );
  }
}

export default App;
