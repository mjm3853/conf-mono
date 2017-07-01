import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import React from 'react'
import Conference from './Conference'

class ListConferences extends React.Component {
    render() {
        return (
            <div className='w-100 flex justify-center'>
                <div className='w-100' style={{ maxWidth: 400 }}>
                    {this.props.viewer.allConferences.edges.map(({ node }) =>
                        <Conference key={node.id} conference={node} />
                    )}
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(ListConferences, graphql`
    fragment ListConferences_viewer on Viewer {
        allConferences(last: 100, orderBy: createdAt_DESC) @connection(key: "ListConferences_allConferences", filters: []) {
            edges {
                node {
                    id
                    ...Conference_conference
                }
            }
        }
    }
`)