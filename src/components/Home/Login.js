import React,{useContext,useState} from 'react'
import { Backdrop } from '../UI/Backdrop'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from '../../context/AuthContext'
export const Login=props=>{
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {showLoginHandler,showSignupHandler}=useContext(AuthContext);
    const showSignup=e=>{
        e.preventDefault();
        showSignupHandler();
    }

    return (
        <div className="form">
            <Backdrop backdropCloseHandler={showLoginHandler}/>
            <Form className="login-form">
                <h3 className="center">Login</h3>
                <hr/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button 
                    className="login-button"
                    type="submit"
                    disabled={email.length===0||password.length===0}
                    onClick={e=>e.preventDefault()}>
                    <i className="fas fa-sign-in-alt"></i> Login
                </Button>
                <span className="register"> 
                    Don't have account?
                    <button 
                        className="register-link"
                        onClick={showSignup}> Register Now</button>
                </span>
            </Form>
        </div>
    );
}