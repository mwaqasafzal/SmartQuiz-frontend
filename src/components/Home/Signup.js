import React,{useContext,useState} from 'react'
import validator from 'validator'
import Backdrop from '../UI/Backdrop'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from './../../context/AuthContext'
import {signUp} from '../../utils/api'
import {auth} from './../../actions/authed'
import {connect} from 'react-redux'

const Signup=({dispatch})=>{
 
    const [fullName,setFullName]=useState("");
    const [invalidName,setInvalidName]=useState(false);
    const [email,setEmail]=useState("");
    const [invalidEmail,setInvalidEmail] =useState(false);//for input validation
    const [password,setPassword]=useState("");
    const [invalidPass,setInvalidPass]=useState(false);//for input validation...min letters 8
    const [confirmPassword,setConfirmPassword]=useState("");
    const [invalidConfirmPass,setInvalidConfirmPass]=useState(false);
    const [emailExists,setEmailExists]= useState(false);
   
     //to hide the signup form(setting the show to false)
    const {showSignupHandler}=useContext(AuthContext);
    //because for first time invalidEmail will be false therefore email.legth will be check,same goes to password
    const isDisabled= fullName.length===0 || email.length===0 || invalidEmail || 
                        password.length===0 || invalidPass ||
                        confirmPassword.length===0 || invalidConfirmPass;
    
    
    const changeFullNameHandler=name=>{
        if(name.length===0)
            setInvalidName(true);
        else
            setInvalidName(false);
        setFullName(name);            
    }
    const changeEmailHandler=email=>{
        if(validator.isEmail(email))
            setInvalidEmail(false);
        else
            setInvalidEmail(true);
        
        setEmail(email);
    }

    
    const changePassHandler=pass=>{
        if(pass.trim().length<8)
            setInvalidPass(true);
        else
            setInvalidPass(false);

        setPassword(pass);
    }

    const changeConfirmPassHandler=pass=>{
        if(password!==pass)
            setInvalidConfirmPass(true);
        else
            setInvalidConfirmPass(false);

        setConfirmPassword(pass);
    }

    const signupHandler=(e)=>{
        e.preventDefault();

        setEmailExists(false);
       
        (async function(){
            try {
                await signUp({
                    fullName,
                    email,
                    password
                });
                
                dispatch(auth());
            } catch (error) {
                setEmailExists(true);
            }
        })();
      

    }
  
    return (
        <div className="form">
            <Backdrop backdropCloseHandler={showSignupHandler}/>
            <Form className="signup-form">
                <h3 className="center">Signup</h3>
                <hr/>
                <Form.Group controlId="formBasicFullName">
                    <Form.Label>Enter Full Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Full Name" 
                        value={fullName}
                        className={invalidName?"invalid-input":null}
                        onChange={e=>changeFullNameHandler(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email}
                        className={invalidEmail?"invalid-input":null}
                        onChange={e=>changeEmailHandler(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        className={invalidPass?"invalid-input":null}
                        onChange={e=>changePassHandler(e.target.value)}/>
                    {invalidPass && <label className="error-label">*Password Should be at least 8 characters</label>}
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Re-enter Password"
                        value={confirmPassword}
                        className={invalidConfirmPass?"invalid-input":null}
                        onChange={e=>changeConfirmPassHandler(e.target.value)}/>
                </Form.Group>
                {emailExists && <label className="error-label">*Email Exists Already</label>}
                
                <Button 
                    className="login-button"
                    type="submit"
                    disabled={isDisabled}
                    onClick={signupHandler}>
                    <i className="fas fa-user-plus"></i> Signup
                </Button>
            </Form>
        </div>
    );
}

export default connect()(Signup);