import React from 'react';
import './App.css';
import Header from "./Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Members from "./Members";
import Settings from "./Settings";
import AlertHistory from "./AlertHistory";
import About from "./About";
import Home from "./Home";
import './aserts/style-sheets/main.scss'
import Signin from "./Signin";
import SignUp from "./SignUp";
import DashBoard from "./DashBoard";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/members'>
                        <Members/>
                    </Route>
                    <Route path='/settings'>
                        <Settings/>
                    </Route>
                    <Route path='/alert-history'>
                        <AlertHistory/>
                    </Route>
                    <Route path='/signin'>
                        <Signin/>
                    </Route>
                    <Route path='/signup'>
                        <SignUp/>
                    </Route>
                    <Route path='/dashboard/:sensor'>
                        <DashBoard/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
