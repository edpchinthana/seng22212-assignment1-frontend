import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import Dashboard from "./pages/DashBoard";
import AlertHistory from "./pages/AlertHistory";
import Header from './Header';
import Members from "./pages/Members";
import PageNotFound from "./pages/PageNotFound";
import ManageSubscribers from "./pages/ManageSubscribers";
import ManageSensors from "./pages/ManageSensors";


function ProtectedRoutes() {
    return (
        <div id="page-top">
            <Header/>
            <br/>
            <div id="wrapper" className="pt-5">
                <Switch>
                    <Route
                        exact
                        path={'/alertHistory'}
                        component={AlertHistory}
                    />
                    <Route
                        exact
                        path={'/alertSubscribers'}
                        component={ManageSubscribers}
                    />
                    <Route
                        exact
                        path={'/manageSensors'}
                        component={ManageSensors}
                    />
                    <Route
                        exact
                        path={'/members'}
                        component={Members}/>
                    <Route
                        exact
                        path={"/dashboard"}
                        component={Dashboard}
                    />
                    <Redirect to={"/dashboard"}/>
                    <Route
                        path={"/*"}
                        component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    )
}

export default ProtectedRoutes;
