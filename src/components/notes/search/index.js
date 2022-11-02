import React, { Fragment, useState } from "react"
import { Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

function Search(props) {
    const [query, setQuery] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.searchNotes(query)
        }
    }

    return (
        <Fragment>
            <Col xs={10}>
                <input
                    type="text"
                    name={query}
                    value={query}
                    placeholder="Search note..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </Col>
            
            <Col xs={2}>
                <a href="#" onClick={() => {
                    props.fetchNotes()
                    setQuery('')
                }}>
                    <FontAwesomeIcon
                        icon={faTimes}
                        color="grey"
                        className="is-pulled-left  "
                    />
                </a>
            </Col>

        </Fragment>
    )
}

export default Search