import React from "react";
import loading from '../../assets/images/loading.gif'

const LoadingScreen =  ()  => {

    return<div id="content" style={{background: "#d95608", position:"absolute",zIndex:2000, width:"100%"}}>
                    <div className="container d-flex justify-content-center my-auto" style={{marginTop:" auto"}}>
                        <div className="d-flex flex-column justify-content-center align-items-center align-content-center align-self-center justify-content-xl-center align-items-xl-center"
    style={{height: "100vh"}}/>
   
                        <img src={loading}
                             style={{width: "150px", height: "150px", marginTop: "auto", marginBottom: "auto"}}/>
                    </div>
                </div>

}

export default LoadingScreen;