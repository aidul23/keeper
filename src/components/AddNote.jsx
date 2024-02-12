import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

function AddNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name , value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        if(note.title.trim() !== "") {
            props.onAdd(note);
        }
        
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return(
        <addNote>
            <div className="add-note-container">     
                <div className="add-note">
                    <form>
                    <input className="input-title" name="title" value={note.title} type="text" placeholder="Title" onChange={handleChange}/>
                    <textarea className="input-note" name="content" value={note.content} type="text" placeholder="Take a note..." onChange={handleChange}/>
                    <div className="button-icon" onClick={submitNote}><IoAdd className="icon"/></div>
                    </form>
                </div> 
            </div>
        </addNote>
    )
}

export default AddNote;