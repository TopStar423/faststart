import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import { LoginContainer } from '../../containers/LoginContainer';
import { RegisterContainer } from '../../containers/RegisterContainer';

export default class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={LoginContainer} />
                    <Route path="/register" component={RegisterContainer} />
                    <Redirect to="/" />
                </Switch>
            </React.Fragment>
        )
    }
}
