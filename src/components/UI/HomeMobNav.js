import React from 'react'
import {HomeNavItem} from './HomeNavItem'

export const HomeMobNav=props=>{
    return(
        <div className="home-mob-nav">
            <ul>
                <li><HomeNavItem to="home">Home</HomeNavItem></li>
               <li><HomeNavItem to="about-us">About Us</HomeNavItem></li>
               <li><HomeNavItem to="services">Services</HomeNavItem></li>
               <li><HomeNavItem to="contact-us">Contact Us</HomeNavItem></li>
               <hr/>
               <li><button>Login</button></li>
               <li><button>Signup</button></li>
            </ul>
        </div>
    );
}