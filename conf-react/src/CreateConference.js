import React from 'react'
import CreateConferenceMutation from './CreateConferenceMutation'
import { QueryRenderer, graphql } from 'react-relay'
import environment from './Environment'

import { withRouter, Link } from 'react-router-dom'

const CreateConferenceViewerQuery = graphql`
    query CreateConferenceViewerQuery {
        viewer {
            id
        }
    }
`

class CreateConference extends React.Component {

    state = {
        name: '',
        description: '',
        url: '',
        start: '2017-07-01T19:47:43.000Z',
        end: '2017-07-01T19:47:43.000Z'
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={CreateConferenceViewerQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return (
                            <div className='w-100 pa4 flex justify-center'>
                                <Link to='/' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'> Home </Link>
                                <div style={{ maxWidth: 400 }} className=''>
                                    <input
                                        className='w-100 pa3 mv2'
                                        value={this.state.name}
                                        placeholder='Name'
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                    <input
                                        className='w-100 pa3 mv2'
                                        value={this.state.description}
                                        placeholder='Description'
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    />
                                    <input
                                        className='w-100 pa3 mv2'
                                        value={this.state.url}
                                        placeholder='URL'
                                        onChange={(e) => this.setState({ url: e.target.value })}
                                    />
                                    {this.state.url &&
                                        <a href={this.state.url} className='w-100 mv3' />
                                    }
                                    {this.state.name && this.state.description && this.state.url &&
                                        <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={() => this._handlePost(props.viewer.id)}>Submit</button>
                                    }
                                </div>
                            </div>

                        )
                    }
                    return <div className='w-100 pa4 flex justify-center'>Loading...</div>
                }}
            />
        )
    }

    _handlePost = (viewerId) => {
        const {
            name,
            description,
            url,
            start,
            end
        } = this.state
        CreateConferenceMutation(name, description, url, start, end, viewerId, () =>
            this.props.history.push('/'))
    }
}

export default withRouter(CreateConference)