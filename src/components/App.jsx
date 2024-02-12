import React, { useState } from "react";
import AddNote from "./AddNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((prevNotes) => {
            return [
                ...prevNotes,
                newNote
            ];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header/>
            <AddNote onAdd={addNote}/>
            {notes.map((note, index) => {
                return (
                    <Note
                    key={index}
                    id={index}
                    title={note.title}
                    note={note.content}
                    onDelete={deleteNote}
                    />
                );
            })}
            <Footer/>
        </div>
    )
}

export default App;