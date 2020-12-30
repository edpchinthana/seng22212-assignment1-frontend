import React, {FormEvent, useState} from 'react';
import {Button, CardImg, Col, Form, Row} from "react-bootstrap";
import image from '../../assets/images/user-icon-image.svg'
import {Link, useHistory} from "react-router-dom";
import Swal from 'sweetalert2';

const Signin: React.FC = () => {
    document.title = 'weatherApp | sign in'
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isActiveUserName, setIsActiveUserName] = useState(false);
    const [isActivePassword, setIsActivePassword] = useState(false);
    const [show, setShow] = useState(false);
    const getIsLoggedIn = () => localStorage.getItem('IS_LOGGED_IN') === 'true';
    if (getIsLoggedIn()) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You already have sign in!',
            footer: `If you need to sign out, go - <a href='/settings'> settings</Link>`
        })
        history.push('/');
    }
    const handleNameOnCardChange = (text: string) => {
        setUserName(text);
        (text !== '') ? setIsActiveUserName(true) : setIsActiveUserName(false);
    };
    const handlePasswordChange = (text: string) => {
        setPassword(text);
        (text !== '') ? setIsActivePassword(true) : setIsActivePassword(false);
    }

    const handleONSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        // const getSensorCategories = async ()=>{
        //     const sensorCategories= await API.GET(`/category`);
        //     console.log(sensorCategories)
        //     return sensorCategories;
        // }
        //TODO put fetched data into sensors variable.
        const sensors = ["Temperature", "Rain", "Wind", "Humidity"]

        //TODO: Create sign in function here (Firebase auth).

        if (userName === "Padma" && password === "1234") {
            localStorage.setItem('IS_LOGGED_IN', 'true');
            localStorage.setItem('SensorCategories', JSON.stringify(sensors))
            history.push('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username or password is not correct!',

            })
        }


    }
    return (
        <div className="px-2 py-3 px-md-3 py-md-5 min-vh-100">
            <br/><br/>
            <Form className="p-form" onSubmit={handleONSubmit}>
                <h2>Sign in</h2>
                <Row>
                    <Col>
                        <CardImg className='user-image' src={image}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-label my-2">
                            <input type="text" value={userName} required
                                   onChange={(e) => handleNameOnCardChange(e.target.value)}/>
                            <label className={isActiveUserName ? "Active" : ""} htmlFor="username"> Username
                            </label>


                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-label my-2">
                            <input type={show ? "text" : "password"} value={password} required
                                   onChange={(e) => handlePasswordChange(e.target.value)}/>
                            <label className={isActivePassword ? "Active" : ""} htmlFor="password">Password
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i className={show ? "feather-eye" : "feather-eye-off"}/>&nbsp;&nbsp;
                        <span style={{textDecoration: 'underline', cursor: 'pointer'}}
                              onClick={() => setShow(!show)}>{show ? "Hide password" : "Show Password"}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='p-button mt-3' type='submit'>Sign in</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link className='float-right mb-3' to='/help-me'>Forget your password?</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>Not a member? </span>
                        <Link to='/signup'>Sign up here</Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}


export default Signin;
