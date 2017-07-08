import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/structure/Header';
import ListConf from './components/content/ListConf';
import CreateConf from './components/content/CreateConf';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path='/' component={ListConf} />
            <Route path='/create' component={CreateConf} />
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
