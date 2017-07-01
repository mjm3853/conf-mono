import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import React from 'react'

class Conference extends React.Component {

    render() {
        return (
            <div className='pa3 bg-black-05 ma3'>
                <div className='pt3'>
                    {this.props.conference.name}
                    <p>{this.props.conference.description}</p>
                    <p>{this.props.conference.location.city}, {this.props.conference.location.state}</p>
                    <p>Start: {this.props.conference.start}</p>
                    <p>End: {this.props.conference.end}</p>
                    <p>Tags</p>
                    <ul>{this.props.conference.tags.edges.map(({node}) => 
                        <li key={node.id}>{node.name}</li>
                        )}
                        </ul>
                    <span className='red f6 pointer dim' onClick={this._handleDelete}>Delete</span>
                </div>
            </div>
        )
    }

    _handleDelete = () => {

    }
}

export default createFragmentContainer(Conference, graphql`
    fragment Conference_conference on Conference {
        id
        name
        description
        start
        end
        location {
            city
            state
        }
        tags {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
`)