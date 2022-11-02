import React, {Fragment, useState} from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from '../../../components/notes';
import '../../../styles/notes.scss'

function NotesScreen(){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen}></HeaderLogged>
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} ></Notes>
        </Fragment>
    )
}
export default NotesScreen