import React from 'react';
import { isAuthenticated } from './auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Register from './pages/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Authenticate} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/home" component={Home} />;
        </Switch>
    </BrowserRouter>
);

export default Routes;