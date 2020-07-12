import React,{useEffect,useState} from 'react'
import {Logo} from './UI/Logo'
import {Cover} from './UI/Cover'
import {Services} from './Services'
import {About} from './About'
import {HomeNav} from './UI/HomeNav'
import {HomeMobNav} from './UI/HomeMobNav'
import {Toggler} from './UI/Toggler'


export const Home=props=>{
const [isScrolled,setScrolled]=useState(false);
const [isNavOpened,setMobNav]=useState(false);

useEffect(()=>{
    document.addEventListener('scroll',()=>{
        if(window.scrollY>100)
            setScrolled(true);
        else
            setScrolled(false);
           
    })
},[]);

const toggleNav=()=>{
    setMobNav(!isNavOpened);
}
let classname="header-animated";
if(isScrolled)
    classname=null;

return (
    <React.Fragment>
         <header className={classname} style={{transition:'0.5s ease'}}>
            <Logo/>
            <Toggler toggleNav={toggleNav}/>
            {/* <HomeNav/> */}
            {isNavOpened?<HomeMobNav/>:null}
            
        </header>
        <main>
            <Cover/>
            <About/>
            <Services/>
        </main>

    </React.Fragment>
       

    
);

}
