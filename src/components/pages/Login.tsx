import React from "react";
import {userLogin} from "../../services/auth/auth";
import {withRouter, RouteProps} from 'react-router';


class Login extends React.Component<RouteProps,{[key:string]:any}>{
    constructor(props:any) {
        super(props);

        this.state={
            email:"",
            password:"",
            stayLogged:false
        }
    }

    handleOnSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            console.log("login")
            await userLogin(this.state.email, this.state.password, this.state.stayLogged)
        } catch (e) {
            alert(e);
        }
    }


    render() {
        return <div className="bg-gradient-primary" style={{background:" rgb(255,145,77)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-md-9 col-lg-12 col-xl-10 d-flex flex-column justify-content-center align-content-center align-self-center">
                        <div className="card shadow-lg o-hidden border-0 my-5" style={{marginTop:"60px"}}>
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image"
                                             style={{background:"url(/assets/img/dogs/Monitor.png) center"}}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Welcome Back!</h4>
                                            </div>
                                            <form className="user" onSubmit={(e)=>this.handleOnSubmit(e)}>
                                                <div className="form-group"><input
                                                    className="form-control form-control-user" type="email"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." name="email"
                                                    value={this.state.email}
                                                    onChange={
                                                        (event)=>this.setState({email:event.target.value})
                                                    }
                                                /></div>
                                                <div className="form-group"><input
                                                    className="form-control form-control-user" type="password"
                                                    id="exampleInputPassword" placeholder="Password" name="password"
                                                    value={this.state.password}
                                                    onChange={(event)=>this.setState({password:event.target.value})}
                                                />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check"><input
                                                            className="form-check-input custom-control-input"
                                                            type="checkbox" id="formCheck-1"
                                                                onChange={()=>this.setState({stayLogged:!this.state.stayLogged})}
                                                        /><label
                                                            className="form-check-label custom-control-label"
                                                            htmlFor="formCheck-1">Remember Me</label></div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary btn-block text-white btn-user"
                                                        type="submit" style={{background:" rgb(255,145,77)"}}>Login
                                                </button>
                                                <hr/>
                                                    <hr/>
                                            </form>
                                            <div className="text-center"><a className="small"
                                                                            href="forgot-password.html">Forgot
                                                Password?</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>;
    }
}

export default Login;