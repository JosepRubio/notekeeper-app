import { useState, useEffect } from "react";
import notesService from "../services/notes/notesService"
export const useNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddNewNote = async (newNoteValue) => {
    try {
      const data = await notesService.createNote(newNoteValue);
      return data;
    } catch (error) {
      console.error("Error posting new note:", error);
    }
  };
  const handleUpdateNote = async (id,updateNoteValues) => {
    try {
      const data = await notesService.updateNote(id,updateNoteValues);
      return data;
    } catch (error) {
      console.error("Error posting new note:", error);
    }
  };
  const handleDeleteNote = async (id) => {
    try {
      const data = await notesService.deleteNote(id);
      return data;
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  };
  const handleNewNotesValue = (newValue) => {
    setNotes(newValue);
  };
  
  const getAllNotesHandler = async () => {
    try {
      const data = await notesService.getAllNotes();
      handleNewNotesValue(data.notes);
    } catch (error) {
      console.error("Error obtaining the notes:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
    getAllNotesHandler();
  }, []);

  return {
    notes,
    handleNewNotesValue,
    handleAddNewNote,
    getAllNotesHandler,
    handleUpdateNote,
    handleDeleteNote,
    loading,
  };
};
