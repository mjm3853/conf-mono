import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 top-0 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <Link className="link dim white dib mr3" to="/" title="Home">Home</Link>
          <Link className="link dim white dib mr3" to="/create" title="Create">Create</Link>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
