import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './history';
import HomeContainer from './components/HomeContainer';
import { DashboardContainer } from './containers/DashboardContainer';

const Routes = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/dashboard" component={DashboardContainer} />
                <Route path="/" component={HomeContainer} />
            </Switch>
        </Router>
    </Provider>
);

export default Routes;
