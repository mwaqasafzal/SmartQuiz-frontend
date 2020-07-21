import React,{useState} from 'react'
import {Cover} from './Cover'
import {Services} from './Services'
import {About} from './About'
import {HomeNav} from './HomeNav'
import Login from './Login'
import Signup from './Signup'
import {Contact} from './Contact'
import {AuthContext} from '../../context/AuthContext'

const Home=props=>{
    
    const [showLogin,setShowLogin]=useState(false);
    const [showSignup,setShowSignup]=useState(false);
    const showLoginHandler=()=>{
        setShowLogin(!showLogin);
    }

    const showSignupHandler=()=>{
        /*
            pre conditions:
            1-login form is already visible
            therefore hiding it first
            2-Singup form is visible(this function will be called 
                to hide the signup)
        */
       if(showLogin)//if login form is already visible,will hide it first
        showLoginHandler();
       setShowSignup(!showSignup);
    }
    const showFormHandlers={
        showLoginHandler,
        showSignupHandler
    }
return (
  
        <AuthContext.Provider value={showFormHandlers}>
            <header>
                <HomeNav/>
            </header>
            <main>
                <Cover/>
                <About/>
                <Services/>
                <Contact/>
                {showLogin?<Login />:null}
                {showSignup?<Signup/>:null}
                
            </main>

        </AuthContext.Provider>
         
);

}

export default Home;