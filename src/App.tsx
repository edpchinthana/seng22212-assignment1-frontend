import React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Switch} from "react-router-dom";
import Members from "./components/pages/Members";
import Settings from "./components/pages/Settings";
import AlertHistory from "./components/pages/AlertHistory";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import './assets/style-sheets/main.scss'
import Signin from "./components/pages/Signin";
import SignUp from "./components/pages/SignUp";
import DashBoard from "./components/pages/DashBoard";
import {GuardedRoute, GuardProvider} from "react-router-guards";
import Footer from "./components/Footer";

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
                        <GuardedRoute path='/signin' meta={{auth: false}}>
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
