import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/structure/Header';
import ListConf from './components/content/ListConf';
import CreateConf from './components/content/CreateConf';
import CreateUser from './components/content/CreateUser';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import apolloConnect from './components/connections/apolloConnect';

const client = apolloConnect;

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component={ListConf} />
                <Route path='/create' component={CreateConf} />
                <Route path='/signup' component={CreateUser} />
            </div>
        </BrowserRouter>
    </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
