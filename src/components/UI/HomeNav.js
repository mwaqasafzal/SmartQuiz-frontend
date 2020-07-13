import React,{useEffect,useState} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Logo} from './Logo'
import {Link,animateScroll as scroll} from 'react-scroll'

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
    return (
        <Navbar bg={classname} style={{transition:'0.5s ease'}} expand="lg">
            <Navbar.Brand onClick={()=>scroll.scrollToTop()}> <Logo/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="p-2" activeClass="active" to="about-us" smooth={true} duration={500}>About Us</Link>
                    <Link className="p-2" activeClass="active" to="services" smooth={true} duration={500}>Services</Link>
                    <Link className="p-2" activeClass="active" to="contact-us" smooth={true} duration={500}>Contact Us</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            
        // <div className="homenav">
        //    <ul className="left">
        //        <li><HomeNavItem to="home">Home</HomeNavItem></li>
        //        <li><HomeNavItem to="about-us">About Us</HomeNavItem></li>
        //        <li><HomeNavItem to="services">Services</HomeNavItem></li>
        //        <li><HomeNavItem to="contact-us">Contact Us</HomeNavItem></li>
        //    </ul>
        //     <div className="right">
        //         <button className="login">Login</button>
        //         <button className="signup">SignUp</button>
        //     </div>
        // </div>
    );
}