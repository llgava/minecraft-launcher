import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Launcher from './pages/launcher';
import Test from './pages/test';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/launcher" component={Launcher} />
            
            <Route exact path="/test" component={Test} />
        </Switch>
    </BrowserRouter>
);
