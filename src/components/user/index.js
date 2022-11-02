import React, {Fragment, useState} from "react";
import { Card, Form, Button, Image} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../../styles/auth.scss'
import logoImg from '../../assets/images/iconlogo.png'
import UserService from '../../services/users'


function Edit (){
    const user = JSON.parse(localStorage.getItem('user'))

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate()

    const update = async (evt) =>{
        evt.preventDefault(false) //MUITO IMPORTANTE!!!!!!

        try {
            const user = await UserService.update(
                {name: name,
                email: email,
            })     
            alert('Alterações bem sucedidas!')
        } catch (error) {
            alert(error)
        }
    }

    const updatePassword = async (evt) =>{
        evt.preventDefault(false) //MUITO IMPORTANTE!!!!!!

        try {
            const user = await UserService.updatePassword(
                {password: password,
            })

            setPassword('')
        } catch (error) {
            alert(error)
        }
    }

    const deleteUser = async (evt) =>{
        evt.preventDefault(false) //MUITO IMPORTANTE!!!!!!

        try {
            const user = await UserService.delete()     
            navigate('/login')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Fragment>
            <Card className='register'>
                <Image fluid src={logoImg}></Image>
                <br/>
                <br/>
                <Card.Title>Editar informações pessoais</Card.Title>  
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="name">
                        <FontAwesomeIcon icon={faUser}/>{' '}
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name}name='name' onChange={e => setName(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <FontAwesomeIcon icon={faEnvelope}/>{' '}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} name='email' onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>
 
                    <Button variant="success" type="submit">
                        Alterar
                    </Button>        
                </Form>
                <br/>
                <Card.Title>Editar senha</Card.Title> 
                <Form onSubmit={updatePassword}>
                    <Form.Group className="mb-3" controlId="password">
                        <FontAwesomeIcon icon={faUnlock}/>{' '}
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} name='password' onChange={e => setPassword(e.target.value)} required/>
                    </Form.Group>
 
                    <Button variant="success" type="submit">
                        Alterar
                    </Button>        
                </Form>
                <br/>
                <Button variant="danger" onClick={deleteUser}>
                    <FontAwesomeIcon icon={faTrashAlt}/> Deletar conta
                </Button>  
            </Card>
                       
        </Fragment>
    )
}

export default Edit