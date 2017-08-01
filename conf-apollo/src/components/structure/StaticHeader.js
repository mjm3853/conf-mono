import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const StaticHeader = () => {
    return (
        <header className="bg-black-90 fixed w-100 ph3 pv3 top-0 pv4-ns ph4-m ph5-l">
            <nav className="f6 ttu tracked">
                <Link className="f4 pa3 link dim white dib mr3" to="/" title="Home">Conf.io</Link>
            </nav>
        </header>
    )
}

export default withRouter(StaticHeader);