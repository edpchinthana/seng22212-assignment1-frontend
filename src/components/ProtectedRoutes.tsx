import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import Dashboard from "./pages/DashBoard";
import AlertHistory from "./pages/AlertHistory";

function ProtectedRoutes(){


    return(
<div id="page-top">
    <div id="wrapper">
        <Switch>
            <Route
                exact
                path={"/dashboard"}
                component={Dashboard}
            />
            <Route
                exact
                path={'/alertHistory'}
                component={AlertHistory}
                />
            <Redirect
                to={"/dashboard"}
            />
        </Switch>
    </div>
</div>
    )
}

export default ProtectedRoutes;