import React from 'react'
import {Container, Nav, Navbar, Button, Col, NavDropdown} from 'react-bootstrap'
import logoImage from '../../assets/images/logo-white.png'
import '../../styles/header_logged.scss'
import UserService from '../../services/users'
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

function HeaderLogged(props) {
    const navigate = useNavigate()

    async function logout (){
        console.log('clicou')
        await UserService.logout()
        navigate('/login')
    }

    const user = JSON.parse(localStorage.getItem('user'))

    return(
        <Navbar expand="lg" className='navbar-logged'>
            <Container fluid>
                    <Navbar.Brand >
                    <Button variant='outline-light' onClick={ () => props.setIsOpen(true)}><FontAwesomeIcon icon={faList} /></Button>{' '}
                        <a href="/notes">
                            <img
                            src={logoImage}
                            height="30"
                            className="d-inline-block "
                            alt="JavascriptNotes Logo"
                            />
                        </a>
                        
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className='text-white' onClick={
                                        () => {
                                            console.log('clicou')
                                            navigate('/users/edit')
                                        }
                                    } ><FontAwesomeIcon icon={faUser} /> {user.name}</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link className='text-white' onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Nav.Link>
                            </Nav.Item>
                                                   
                        </Nav>
                    </Navbar.Collapse>
                         
                
            </Container>
        </Navbar>
    )
}

export default HeaderLogged