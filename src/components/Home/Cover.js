import React,{useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import Button from 'react-bootstrap/Button'
export const Cover=props=>{
    const {showSignupHandler} = useContext(AuthContext);
    return (
        <div className="cover" id="home">
            <h3>Create or take Quiz anywhere and anytime!</h3>
            <Button onClick={showSignupHandler} variant="outline-custom">Get Started</Button>
        </div>
    );
}