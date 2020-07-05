import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import styles from '../../App.css'
// import '../../index.css'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar bg="light" variant="light" expand="md" fixed="top">
            <Container>
            <NavbarBrand href="">
            <img src={require("../../assets/moonlogo.jpeg")} alt="moonbrand" width="170"></img>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto my-ul" navbar>
                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/about">About Me</NavLink>
                    </NavItem>
                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/portfolios">Portfolios</NavLink>
                    </NavItem>
                    <NavItem className='my-li'>
                       <NavLink tag={RouteLink} to="/contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem className='my-li'>
                        <NavLink tag={RouteLink} to="/login">Log In</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            <hr></hr>
            </Container>
         </Navbar>
    )
}

export default Navigation