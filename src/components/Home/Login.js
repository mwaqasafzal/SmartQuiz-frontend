import React,{useContext,useState} from 'react'
import validator from 'validator'
import Backdrop from '../UI/Backdrop'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from '../../context/AuthContext'
import {connect} from 'react-redux'
import {login} from './../../utils/api'
import {auth} from '../../actions/authed'
import {InvalidKeyError,NotFoundError} from '../../Exceptions'
import { isValid } from 'shortid'

const Login=({dispatch})=>{
    
    const [email,setEmail]=useState("");
    const [invalidEmail,setInvalidEmail]=useState(false);
    const [password,setPassword]=useState("");
    const [incorrect,setIncorrect]=useState(false);
    const [notExist,setNotExist] = useState(false);
    const {showLoginHandler,showSignupHandler}=useContext(AuthContext);

    const showSignup=e=>{
        e.preventDefault();
        showSignupHandler();
    }

    const emailChangeHandler=(email)=>{
        if(validator.isEmail(email))
            setInvalidEmail(false);
        else
            setInvalidEmail(true);
        
        setEmail(email);
    }

    const loginHandler=async(e)=>{
        e.preventDefault();
        setIncorrect(false);
        setNotExist(false);
        
        try {
            console.log('logging in ');
             await login({email,password}); 
            dispatch(auth());
        }
         catch (error) {
            if(error instanceof InvalidKeyError)
                setIncorrect(true);
            else if(error instanceof NotFoundError)
                setNotExist(true);
            else
                console.log('server error');
            

        }
        
    }

    return (
        <div className="form">
            <Backdrop backdropCloseHandler={showLoginHandler}/>
            <Form className="login-form">
                <h3 className="center">Login</h3>
                <hr/>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        className={invalidEmail?"invalid-input":null}
                        onChange={e=>emailChangeHandler(e.target.value)}
                        />
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
                {incorrect && <label className="error-label">*Email or Password Incorrect</label>}
                {notExist && <label className="error-label">*User not found</label>}
                <Button 
                    className="login-button"
                    type="submit"
                    disabled={email.length===0 || invalidEmail || password.length===0}
                    onClick={loginHandler}>
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

export default connect()(Login);