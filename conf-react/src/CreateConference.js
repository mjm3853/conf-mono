import React from 'react'

import { Link } from 'react-router-dom'

class CreateConference extends React.Component {

    state = {
        name: '',
        description: '',
        start: '',
        end: '',
        url: '',
        location: {
            city: '',
            state: ''
        },
        tags: [
            {
                name: ''
            }
        ]
    }

    render() {
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
                        <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._handlePost}>Create</button>
                    }
                </div>
            </div>
        )
    }

    _handlePost = () => {

    }
}

export default CreateConference