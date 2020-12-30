import React from 'react';
import Firebase from './FirebaseApp';
import ProtectedRoutes from './ui/ProtectedRoutes';
import {Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Members from "./components/pages/Members";
import Settings from "./components/pages/Settings";
import AlertHistory from "./components/pages/AlertHistory";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import './assets/style-sheets/main.scss'
import Signin from "./components/pages/Signin";
import SignUp from "./components/pages/SignUp";
import DashBoard from "./components/pages/DashBoard";
import Footer from "./components/Footer";

class App extends React.Component<{}, {[key:string]: any}>{

    constructor(props: any) {
      super(props);
      this.state={
        user:null,
        loading: true
      }
  
    }
  
    componentDidMount() {
      this.setState({loading:true});
      try{
        Firebase.auth().onAuthStateChanged(user => {
          if(user){
            this.setState({user:user});
          }else{
           this.setState({user:null});
          }
          setTimeout(()=>this.setState({loading:false}), 0);
        })
      }catch (e) {
        alert(e);
        setTimeout(()=>this.setState({loading:false}), 0);
      }
    }
  
  
    render() {
      return <div>
        {this.state.loading?
            <div><h1>Loading</h1></div>
            :this.state.user?
                <ProtectedRoutes/>
                :
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Redirect to={'/login'}/>
                </Switch>
  
        }
      </div>;
    }
  }
  
  
  export default App;

/*
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
*/