import React, {Fragment} from 'react'
import Header from '../../components/header'
import { Button, Container, Col, Row, Image} from 'react-bootstrap' 
import presentationImg from '../../assets/images/presentation.png'
import '../../styles/home.scss'

function HomeScreen(){
    return (
        <Fragment>
            <Header></Header>
            <Container fluid className='home'>
                <Container>
                        <Row lg="2" xs="1" >
                            <Col>
                            <h1 className='text-white'>Create notes easily and access when you wants on the cloudTitle</h1>
                            <p className='text-white'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br/></p>
                            <Button variant="light" href="/register">Register free now</Button>    
                            </Col>
                            <Col>
                                <Image fluid src={presentationImg}></Image> 
                            </Col>  
                        </Row>               
                    </Container>
            </Container>          
        </Fragment>
    )
}

export default HomeScreen