import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import Dashboard from "./pages/DashBoard";
import AlertHistory from "./pages/AlertHistory";
import Header from './Header';

function ProtectedRoutes(){


    return(
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
                path={'/alertHistory'}
                component={AlertHistory}
                />
            
        </Switch>
    </div>
</div>
    )
}

export default ProtectedRoutes;

{/* <Redirect
                to={"/dashboard"}
            /> */}
