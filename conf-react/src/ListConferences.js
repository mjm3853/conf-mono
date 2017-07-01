import React from 'react'
import Conference from './Conference'

const mockConfData = [
    {
        node: {
            id: "1",
            name: "Test One",
        }
    },
    {
        node: {
            id: "2",
            name: "Second Test"
        }
    }
]

class ListConferences extends React.Component {
    render() {
        return (
            <div className='w-100 flex justify-center'>
                <div className='w-100' style={{ maxWidth: 400 }}>
                    {mockConfData.map(({ node }) =>
                        <Conference key={node.id} conference={node} />
                    )}
                </div>
            </div>
        )
    }
}

export default ListConferences