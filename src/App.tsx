import React from 'react';
import Firebase from './FirebaseApp';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router';
import './App.css';
import './assets/style-sheets/main.scss'
import Login from './components/pages/Login';
import LoadingScreen from "./components/common/LoadingScreen";

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
          setTimeout(()=>this.setState({loading:false}), 2000);
        })
      }catch (e) {
        alert(e);
        setTimeout(()=>this.setState({loading:false}), 2000);
      }
    }
  
  
    render() {
      return <div id="page-top">
        {this.state.loading?
            <LoadingScreen/>
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