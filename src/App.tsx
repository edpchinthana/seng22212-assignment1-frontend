import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import AlertHistory from "./pages/AlertHistory";
import About from "./pages/About";
import Home from "./pages/Home";
import './aserts/style-sheets/main.scss'
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import {GuardedRoute, GuardProvider} from "react-router-guards";
import Footer from "./Footer";
const getIsLoggedIn = () => localStorage.getItem('IS_LOGGED_IN') === 'true';


function App() {
    const requireLogin = (to: any, from: any, next: any) => {
        if (to.meta.auth) {
            if (getIsLoggedIn()) {
                next();
            }
            next.redirect('/signin');
        } else {
            next();
        }
    };
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <GuardProvider guards={[requireLogin]} loading={Home} error={Signin}>
                    <Switch>
                        <GuardedRoute path='/about' meta={{auth: true}}>
                            <About/>
                        </GuardedRoute>
                        <GuardedRoute path='/members' meta={{auth: true}}>
                            <Members/>
                        </GuardedRoute>
                        <GuardedRoute path='/settings' meta={{auth: true}}>
                            <Settings/>
                        </GuardedRoute>
                        <GuardedRoute path='/alert-history' meta={{auth: true}}>
                            <AlertHistory/>
                        </GuardedRoute>
                        <GuardedRoute path='/signin'meta={{auth: false}}>
                            <Signin/>
                        </GuardedRoute>
                        <GuardedRoute path='/signup'>
                            <SignUp/>
                        </GuardedRoute>
                        <GuardedRoute path='/dashboard/:sensor' meta={{auth: true}}>
                            <DashBoard/>
                        </GuardedRoute>
                        <GuardedRoute path='/'>
                            <Home/>
                        </GuardedRoute>
                    </Switch>
                </GuardProvider>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
