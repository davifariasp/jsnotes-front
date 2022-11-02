import React, { useState, Fragment, useEffect } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import '../../styles/notes.scss'
import { push as Menu } from "react-burger-menu";
import List from "./list";
import NoteService from '../../services/notes';
import NotesService from "../../services/notes";
import Editor from "./editor";
import Search from './search'

function Notes(props) {
    const [notes, setNotes] = useState([]);
    const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" })

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const response = await NoteService.index()

        if (response.data.length >= 1) {
            setNotes(response.data.reverse())
            setCurrentNote(response.data[0])
        } else {
            setNotes([])
        }
    }

    const createNote = async () => {
        await NotesService.create()
        fetchNotes()
    }

    const deleteNote = async (note) => {
        await NotesService.delete(note._id)
        fetchNotes()
    }

    const updateNote = async (oldNote, params) => {
        const updatedNote = await NoteService.update(oldNote._id, params);
        const index = notes.indexOf(oldNote)
        const newNotes = notes
        newNotes[index] = updatedNote.data
        setNotes(newNotes)
        setCurrentNote(updatedNote.data)
    }

    async function searchNotes (query) {
        const response = await NoteService.search(query);
        setNotes(response.data)
    }

    const selectNote = (id) => {
        const note = notes.find((note) => {
            return note._id == id
        })
        setCurrentNote(note);
    }


    return (
        <Fragment>
            <Col className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false} >

                    <Container>
                        <Row className="p-2">
                            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
                        </Row>

                        <Row>
                            <List
                                notes={notes}
                                selectNote={selectNote}
                                current_note={current_note}
                                deleteNote={deleteNote}
                                createNote={createNote}
                            />
                        </Row>
                    </Container>

                </Menu>

                <Col className="notes-editor" id="notes-editor">
                    <Editor
                        note={current_note}
                        updateNote={updateNote}
                    />
                </Col>
            </Col>

        </Fragment>
    )
}

export default Notes