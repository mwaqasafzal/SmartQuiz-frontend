import React,{useState} from 'react'
import {Cover} from './Cover'
import {Services} from './Services'
import {About} from './About'
import {HomeNav} from './HomeNav'
import {Login} from './Login'
import {LoginContext} from '../../context/LoginContext'

export const Home=props=>{
    const [showLogin,setShowLogin]=useState(false);

    const showLoginHandler=()=>{
        setShowLogin(!showLogin);
    }

console.log(LoginContext);
return (
  
        <LoginContext.Provider value={showLoginHandler}>
            <header>
                <HomeNav/>
            </header>
            <main>
                <Cover/>
                <About/>
                <Services/>
                {showLogin?<Login />:null}
            </main>

        </LoginContext.Provider>
         
);

}
