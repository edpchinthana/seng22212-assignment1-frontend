import React from "react";
import {Link} from "react-router-dom";


function PageNotFound(){
    return(
            <div className="main-box">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"/>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the first place?<p>Let's go&nbsp;
                        <Link to='/dashboard' className='links'>Dashboard</Link>&nbsp;
                         and try from there.</p></div>
            </div>

    )
}

export default PageNotFound;
