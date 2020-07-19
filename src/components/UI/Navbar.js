import React from 'react'
import Logo from './Logo'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Navigationbar = ()=>{   

    return(
        <Navbar bg="navbar" expand="lg">
            <Navbar.Brand><Logo/></Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <NavLink className="p-2 nv-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="p-2 nv-link" activeClassName="active" to="/create-quiz">Create Quiz</NavLink>
                        <NavLink className="p-2 nv-link" activeClassName="active" to="/take-quiz">Take Quiz</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;