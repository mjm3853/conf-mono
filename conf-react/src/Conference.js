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
                    {this.props.conference.name} &nbsp;
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
    }
`)