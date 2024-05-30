import { useState } from "react";
import { CreateNoteForm } from "../CreateNoteForm/CreateNoteForm";
import { Note } from "../Note/Note";
import { UpdateNoteForm } from "../UpdateNoteForm/UpdateNoteForm";

export const NoteList = ({loading,notes,handleAddNewNote,handleUpdateNote,getAllNotesHandler,handleDeleteNote}) => {
    const [currentNote,setCurrentNote]=useState(null);
    const handlerNewNote=async(newNoteValue) => {
        try {
            const data = await handleAddNewNote (newNoteValue) 
            return data;
        } catch (error){
            console.error("Error submiting the new note...")
        }finally{ 
            await getAllNotesHandler()
        }
    }
    const handlerUpdateNote=async(updatedNoteValues) => {
        try {
            const data = await handleUpdateNote (currentNote.id,updatedNoteValues) 
            return data;
        } catch (error){
            console.error("Error updating the note...")
        }finally{ 
            await getAllNotesHandler()
            setCurrentNote (null)
        } 
    }
    const handlerDeleteNote=async(id) => {
        try {
            const data = await handleDeleteNote (id) 
            return data;
        } catch (error){
            console.error("Error Deleting the note...")
        }finally{ 
            await getAllNotesHandler()
            setCurrentNote (null)
        } 
    }
    return (
    <>
      
      {currentNote===null?<CreateNoteForm handleCreateSubmit={handlerNewNote}/>:<UpdateNoteForm setCurrentNote={setCurrentNote} note={currentNote} handleUpdateSubmit={handlerUpdateNote}/>};
      
      <ul>
        {loading ? (
          <li>charging notes...</li>
        ) : (
          notes.map((note) => (
            <Note setCurrentNote={setCurrentNote} key={note.id} note={note} handlerDeleteNote={handlerDeleteNote} />
          ))
        )}
      </ul>
    </>
  );
};
