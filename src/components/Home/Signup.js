import React,{useContext,useState} from 'react'
import Backdrop from '../UI/Backdrop'
import {Form,Button} from 'react-bootstrap'
import {AuthContext} from './../../context/AuthContext'
import {signUp} from '../../utils/api'
import {auth} from './../../actions/authed'
import {connect} from 'react-redux'

const Signup=({dispatch})=>{
 
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [confirmPassIncorrect,setConfirmPassIncorrect]=useState(false);
    const [emailExists,setEmailExists]= useState(false);

    //to hide the signup form(setting the show to false)
    const {showSignupHandler}=useContext(AuthContext);
    const isDisabled=fullName.length===0 || email.length===0||password.length===0 || confirmPassword.length===0;
    
    const signupHandler=(e)=>{
        e.preventDefault();

        setEmailExists(false);
        if(password!==confirmPassword)
           return setConfirmPassIncorrect(true);
        else
            setConfirmPassIncorrect(false);
   
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
                        onChange={e=>setFullName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email}
                        onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Re-enter Password"
                        value={confirmPassword}
                        onChange={e=>setConfirmPassword(e.target.value)}/>
                </Form.Group>
                {emailExists && <label className="error-label">*Email Exists Already</label>}
                {confirmPassIncorrect && <label className="error-label">*Can't confirm password</label>}
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