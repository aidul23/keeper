import React from "react";
import { MdDelete } from "react-icons/md";

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return(
        <note className="note-container">
            <div className="add-note">
                <h2>{props.title}</h2>
                <p>{props.note}</p>
                <div className="button-icon" onClick={handleClick}><MdDelete className="icon" /></div>
            </div>
        </note>
    )
}

export default Note;