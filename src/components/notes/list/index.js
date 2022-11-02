import React, {Fragment} from "react";
import { Button, Col, Row, ListGroup, Badge, Card, Container} from "react-bootstrap";
import Moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListNotes(props){
    return (
        <Fragment>
            <Container>
                <Col>
                    <Row className="p-3 row align-items-center">
                        <Col>
                            <Card.Title className="text-center">{props.notes.length} Notes</Card.Title>
                        </Col>
                        <Col className="row align-items-center">
                            <Button variant="success" onClick={() => props.createNote()}>Create</Button>
                        </Col>
                    </Row>
                    
                    <Row>
                        <ListGroup className="p-2" >
                            { props.notes.map((item, key) =>
                                <ListGroup.Item key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
                                <Card.Title>{item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}</Card.Title>
                                <Card.Body>{item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}</Card.Body>

                                <Row className="row align-items-center">
                                    <Col xs={10} lg="10">
                                        <Badge bg="secondary">{Moment(item.created_at).format('DD/MM')}</Badge>
                                    </Col>
                                    <Col xs={2} lg="2">
                                        <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} onClick={() => props.deleteNote(item)}/></Button>
                                    </Col>         
                                </Row>
                                                 
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Row>       
                </Col>
            </Container>                     
        </Fragment>
    )
}

export default ListNotes