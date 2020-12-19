import React, {FormEvent, useState} from 'react';
import {Button, CardImg, Col, Row, Form} from "react-bootstrap";
import image from './aserts/images/user-icon-image.svg'
import {useHistory, Link} from "react-router-dom";

const Signin: React.FC = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isActiveUserName, setIsActiveUserName] = useState(false);
    const [isActivePassword, setIsActivePassword] = useState(false);
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
        //Todo: Create submit function here
        history.push('/');

    }
    return (
        <div className="px-2 py-3 px-md-3 py-md-5">
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
                            <input type="text" value={userName}
                                   onChange={(e) => handleNameOnCardChange(e.target.value)}/>
                            <label className={isActiveUserName ? "Active" : ""} htmlFor="username"> Username
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="float-label my-2">
                            <input type="text" value={password}
                                   onChange={(e) => handlePasswordChange(e.target.value)}/>
                            <label className={isActivePassword ? "Active" : ""} htmlFor="password">Password
                            </label>
                        </div>
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
