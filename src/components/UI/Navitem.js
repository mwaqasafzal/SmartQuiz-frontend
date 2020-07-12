import React from 'react'
import {NavLink} from 'react-router-dom'
export const Navitem=props=>{

    return (
    <li><NavLink to={props.link} >{props.children}</NavLink></li>
    );
}