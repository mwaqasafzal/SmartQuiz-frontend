import React from 'react'
import {HomeNavItem} from'./HomeNavItem'

export const HomeNav=props=>{
    return (
        <div className="homenav">
           <ul className="left">
               <li><HomeNavItem to="home">Home</HomeNavItem></li>
               <li><HomeNavItem to="about-us">About Us</HomeNavItem></li>
               <li><HomeNavItem to="services">Services</HomeNavItem></li>
               <li><HomeNavItem to="contact-us">Contact Us</HomeNavItem></li>
           </ul>
            <div className="right">
                <button className="login">Login</button>
                <button className="signup">SignUp</button>
            </div>
        </div>
    );
}