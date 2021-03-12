import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CV from './cv/CV2';
import Home from './Home';
import NoPageFound from './NoPageFound';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cv" component={CV} />
            <Route component={NoPageFound} />
        </Switch>
    );
}
