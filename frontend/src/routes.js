import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import { DashboardContainer } from './containers/DashboardContainer';

const Routes = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={DashboardContainer} />
            </Switch>
        </Router>
    </Provider>
);

export default Routes;
