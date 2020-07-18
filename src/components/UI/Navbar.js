import React from 'react'
import Logo from './Logo'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navigationbar = ()=>{   

    return(
        <Navbar bg="navbar" expand="lg">
            <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Link className="p-2" activeClass="active" to="/dashboard">Dashboard</Link>
                        <Link className="p-2" activeClass="active" to="/create-quiz">Create Quiz</Link>
                        <Link className="p-2" activeClass="active" to="/take-quiz">Take Quiz</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar;