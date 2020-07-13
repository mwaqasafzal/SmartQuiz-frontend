import React,{useContext} from 'react'
import { Backdrop } from '../UI/Backdrop'
import {Form,Button} from 'react-bootstrap'
import {LoginContext} from '../../context/LoginContext'
export const Login=props=>{
    const showLoginHandler=useContext(LoginContext);
    return (
        <div className="login">
            <Backdrop backdropCloseHandler={showLoginHandler}/>
            <Form className="login-form">
                <h3 className="center">Login</h3>
                <hr/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="login-button" type="submit">
                    <i class="fas fa-sign-in-alt"></i> Login
                </Button>
                <span className="register"> Don't have account?<button className="register-link"> Register Now</button></span>
            </Form>
        </div>
    );
}