import React, {Fragment} from 'react';
import Header from '../../../components/header';
import {Container} from 'react-bootstrap'
import RegisterForm from '../../../components/auth/register_form';
import '../../../styles/auth.scss'


function Register(){
    return (
        <Fragment>
            <Header></Header>
            <Container fluid className='auth'>
                <RegisterForm></RegisterForm>
            </Container>         
        </Fragment>
    )
}
export default Register