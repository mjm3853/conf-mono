import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'

class CreateUser extends React.Component {

  state = {
    emailAddress: '',
    name: ''
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    // redirect if user is logged in or did not finish Auth0 Lock dialog
    if (this.props.data.user || window.localStorage.getItem('auth0IdToken') === null) {
      console.warn('not a new user or already logged in')
      return (
        <Redirect to={{
          pathname: '/'
        }}/>
      )
    }

    return (
      <div className='w-100 pa3 pt7 flex justify-center'>
        <div style={{ maxWidth: 400 }} className=''>
          <input
            className='w-100 pa3 mv2'
            value={this.state.emailAddress}
            placeholder='Email'
            onChange={(e) => this.setState({emailAddress: e.target.value})}
          />
          <input
            className='w-100 pa3 mv2'
            value={this.state.name}
            placeholder='Name'
            onChange={(e) => this.setState({name: e.target.value})}
          />
          {this.state.name &&
          <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.createUser}>Sign up</button>
          }
        </div>
      </div>
    )
  }

  createUser = () => {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      emailAddress: this.state.emailAddress,
      name: this.state.name
    }

    this.props.createUser({ variables })
      .then((response) => {
          this.props.history.replace('/')
          window.location.reload()
      }).catch((e) => {
        console.error(e)
        this.props.history.replace('/')
        window.location.reload()
      })
  }
}

const createUser = gql`
  mutation ($idToken: String!, $name: String!, $emailAddress: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name, emailAddress: $emailAddress) {
      id
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export default graphql(createUser, {name: 'createUser'})(
  graphql(userQuery, { options: {fetchPolicy: 'network-only'}})(withRouter(CreateUser))
)