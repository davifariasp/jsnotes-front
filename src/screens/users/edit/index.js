import React, {Fragment} from 'react';
import HeaderEdit from '../../../components/header_edit';
import { Container } from 'react-bootstrap';
import '../../../styles/edit.scss'
import Edit from '../../../components/user';

function UserEdit(){
    return (
        <Fragment>
            <HeaderEdit/>
            <Container fluid className='config'>
                <Edit/>
            </Container> 
        </Fragment>
    )
}

export default UserEdit