import React, {FormEvent, useState} from 'react';
import {Button, CardImg, Col, Form, Row} from "react-bootstrap";
import image from "../aserts/images/user-icon-image.svg";
import {useHistory, Link} from "react-router-dom";

const SignUp: React.FC = () => {
    document.title = 'weatherApp | sign up'
    const history = useHistory();
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isActiveFullName, setIsActiveFullName] = useState(false);
    const [isActiveUserName, setIsActiveUserName] = useState(false);
    const [isActivePassword, setIsActivePassword] = useState(false);
    const [isActiveEmail, setIsActiveEmail] = useState(false);
    const [show, setShow] = useState(false);

    const handleFullNameOnCardChange = (text: string) => {
        setFullName(text);
        (text !== '') ? setIsActiveFullName(true) : setIsActiveFullName(false);
    };

    const handleNameOnCardChange = (text: string) => {
        setUserName(text);
        (text !== '') ? setIsActiveUserName(true) : setIsActiveUserName(false);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        (text !== '') ? setIsActivePassword(true) : setIsActivePassword(false);
    }

    const handleEmailChange = (text: string) => {
        setEmail(text);
        (text !== '') ? setIsActiveEmail(true) : setIsActiveEmail(false);
    }

    const handleONSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        //Todo: Create submit function here
        localStorage.setItem('IS_LOGGED_IN', 'true');
        history.push('/');

    }
    return (
        <div className="px-2 py-3 px-md-3 py-md-5 min-vh-100">
            <br/><br/>
            <Form className="p-form" onSubmit={handleONSubmit}>
                <h2>Sign up</h2>
                <Row>
                    <Col>
                        <CardImg className='user-image' src={image}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-label my-2">
                            <input type="text" value={fullName} required
                                   onChange={(e) => handleFullNameOnCardChange(e.target.value)}/>
                            <label className={isActiveFullName ? "Active" : ""} htmlFor="fullName"> Full name
                            </label>
                        </div>
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
                            <input type="email" value={email} required
                                   onChange={(e) => handleEmailChange(e.target.value)}/>
                            <label className={isActiveEmail ? "Active" : ""} htmlFor="email">Email
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-label my-2">
                            <input type={show?"text":"password"} value={password} required
                                   onChange={(e) => handlePasswordChange(e.target.value)}/>
                            <label className={isActivePassword ? "Active" : ""} htmlFor="password">Password
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <i className={show?"feather-eye": "feather-eye-off"}/>&nbsp;&nbsp;
                        <span style={{textDecoration:'underline', cursor:'pointer'}}  onClick={()=> setShow(!show)}>{show? "Hide password":"Show Password" }</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='p-button mt-3' type='submit'>Sign up</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link className='float-right mb-3' to='/help-me'>Need a help?</Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>Already a member? </span>
                        <Link to='/signin'>Sign in here</Link>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SignUp;
