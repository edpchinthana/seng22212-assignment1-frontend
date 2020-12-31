import React from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import {Switch} from 'react-router';
import Dashboard from "./pages/DashBoard";
import AlertHistory from "./pages/AlertHistory";
import Header from './Header';
import {Nav} from "react-bootstrap";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import ManageSubscribers from "./pages/ManageSubscribers";
import ManageSensors from "./pages/ManageSensors";


function ProtectedRoutes() {


    return (
        <div id="page-top">
            <Header/>
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
                        path={'/settings'}
                        component={Settings}/>
                    <Route
                        exact
                        path={"/dashboard"}
                        component={Dashboard}
                    />
                    <Route
                        path={"/*"}
                        component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    )
}

export default ProtectedRoutes;

{/* <Redirect
                to={"/dashboard"}
            /> */
}
