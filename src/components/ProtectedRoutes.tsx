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


function ProtectedRoutes() {


    return (
        <div id="page-top">
            <Header/>
            <div id="wrapper" className="pt-5">
                <Switch>
                    <Route
                        exact
                        path={"/dashboard"}
                        component={Dashboard}
                    />
                    <Route
                        exact
                        path={'/alert-history'}
                        component={AlertHistory}
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
