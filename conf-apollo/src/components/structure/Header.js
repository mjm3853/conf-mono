import React, { Component } from 'react';
import LoginAuth0 from './LoginAuth0';
import { graphql, gql } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';
import config from '../../config/config';
import StaticHeader from './StaticHeader';

const clientId = config.auth0.clientId;
const domain = config.auth0.domain;

class Header extends Component {

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    window.localStorage.removeItem('auth0IdToken')
    this.props.history.replace('/')
    window.location.reload()
  }

  _isLoggedIn = () => {
    return this.props.data.user
  }

  render() {
    if (this.props.data.loading) {
      return (
        <StaticHeader />
      )
    }

    if (this._isLoggedIn()) {
      return this.renderLoggedIn()
    } else {
      return this.renderLoggedOut()
    }
  }

  renderLoggedIn() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 top-0 pv4-ns ph4-m ph5-l">
        <nav className="f6 ttu tracked">
          <Link className="f4 pa3 link dim white dib mr3" to="/" title="Home">Conf.io</Link>
          <Link className="pa3 link dim white dib mr3" to="/create" title="Create">Create</Link>
          <div className='dib fr'>
            <span
              className='dib f6 bg-red white pa3 pointer dim'
              onClick={this._logout}
            >
              Logout
          </span>
          </div>
        </nav>
      </header>
    )
  }

  renderLoggedOut() {
    return (
      <header className="bg-black-90 fixed w-100 ph3 pv3 top-0 pv4-ns ph4-m ph5-l">
        <nav className="f6 ttu tracked">
          <Link className="f4 pa3 link dim white dib mr3" to="/" title="Home">Conf.io</Link>
          <div className='dib fr'>
            <LoginAuth0
              clientId={clientId}
              domain={domain}
            />
          </div>
        </nav>
      </header>
    )
  }
}

const userQuery = gql`
  query userQuery {
    user {
      id
    }
  }
`

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(withRouter(Header));
