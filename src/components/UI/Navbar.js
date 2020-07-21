import React from 'react'
import Logo from './Logo'
import {Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutHandler} from '../../actions/authed'
const Navigationbar = ({dispatch})=>{   

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
                <button 
                        className="logout-btn" 
                        onClick={()=>{dispatch(logoutHandler())}}><i className="fas fa-sign-out-alt"></i> Logout</button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default connect()(Navigationbar);