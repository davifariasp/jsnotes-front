import React, {useState, Fragment} from 'react';
import { Form, Button, Card, Image} from 'react-bootstrap';
import UserService from '../../../services/users'
import { useNavigate } from 'react-router-dom';
import '../../../styles/auth.scss'
import logoImg from '../../../assets/images/iconlogo.png'

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const HandleSubmit = async (evt) =>{
        evt.preventDefault(false) //MUITO IMPORTANTE!!!!!!

        try {
            const user = await UserService.login(
                {email: email,
                password: password
            })     
            navigate('/notes')
        } catch (error) {
            alert(error)
        }
    }

    function redirectToRegister () {
        navigate('/register')
    }

    return (
        <Fragment>
            <Card className='register'>
                <Image fluid src={logoImg}></Image>
                <br/>
                <br/>  
                <Form onSubmit={HandleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} name='email' onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} name='password' onChange={e => setPassword(e.target.value)} required/>
                    </Form.Group>
                    <br/>

                    <Button variant="success" type="submit">
                            Login
                        </Button>{' '}

                    <Button variant="outline-success" onClick={redirectToRegister}>
                        Register
                    </Button>
                    
                    
                </Form>
            </Card>                 
        </Fragment>
    )
}
export default LoginForm