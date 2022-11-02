import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import logoImage from '../../assets/images/iconlogo.png'
import '../../styles/header.scss'

function Header() {

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <img
                src={logoImage}
                height="30"
                className="d-inline-block align-top"
                alt="JavascriptNotes Logo"
                /> </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav.Item>                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header