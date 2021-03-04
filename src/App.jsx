import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Redirect from='/' to='/' />
                </Switch>
            </div>
        </div>
    );
}

export default App;
