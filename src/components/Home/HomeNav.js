import React,{useEffect,useState, useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Logo from '../UI/Logo'
import {Link,animateScroll as scroll} from 'react-scroll'
import {AuthContext} from '../../context/AuthContext'
export const HomeNav=props=>{

    const [isScrolled,setScrolled]=useState(false);

    useEffect(()=>{
        document.addEventListener('scroll',()=>{
            if(window.scrollY>100)
                setScrolled(true);
            else
                setScrolled(false);
            
        })
    },[]);

    let classname="navbar-animated";
 
    if(isScrolled)
        classname="homenav";
    
    const {showLoginHandler}=useContext(AuthContext);
    return (
    <Navbar  
        bg={classname} 
        style={{transition:'0.5s ease'}}
        expand="lg">
        <Navbar.Brand onClick={()=>scroll.scrollToTop()}> <Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
                <Link className="p-2" activeClass="active" to="about-us" smooth={true} duration={500}>About Us</Link>
                <Link className="p-2" activeClass="active" to="services" smooth={true} duration={500}>Services</Link>
                <Link className="p-2" activeClass="active" to="contact-us" smooth={true} duration={500}>Contact Us</Link>
                <button 
                    className="login-btn"
                    onClick={showLoginHandler}
                    ><i className="fas fa-sign-in-alt"></i> Login</button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        
);
}