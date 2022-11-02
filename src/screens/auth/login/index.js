import React, {Fragment} from 'react';
import Header from '../../../components/header';
import {Container} from 'react-bootstrap'
import LoginForm from '../../../components/auth/login_form';
import {Navigate } from 'react-router-dom'
import '../../../styles/auth.scss'


function Login(){
    const isAuthenticated = localStorage.getItem('user')

    if (isAuthenticated){
        return <Navigate to={'/notes'}/>
    } else {    
        return (
            <Fragment>
                <Header></Header>
                <Container fluid className='auth'>
                    <LoginForm></LoginForm>
                </Container>         
            </Fragment>
        )
    }
    
}
export default Login