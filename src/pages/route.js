import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Layouts from '../components/shared/layout';
import AppRoute from '../components/shared/route';
import Login from './auth/Login';
import HomePage from './pageDetail/Home';
import { map } from "lodash";
const routesConfig = [
    {
        path: '/home',
        component: HomePage,
        layout: Layouts.PrivateLayout,
    },
    {
        path: '/',
        component: Login,
        layout: Layouts.DefaultLayout,
    }
]


function RouterDefault(props) {
    return (
        // <Router>
        //     <div>
        //         <Switch>
        //             <Route path="/home">
        //                 <HomePage />
        //             </Route>
        //             <Route path="/users">
        //                 <Login />
        //             </Route>
        //             <Route path="/">
        //                 <Login />
        //             </Route>
        //         </Switch>
        //     </div>
        // </Router>
        <Router>
            <Switch>
                {map(routesConfig, (route) => (
                    <AppRoute
                        key={route.path}
                        //    isAuthenticated={isAuthenticated}
                        {...route}
                    />
                ))}
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouterDefault;