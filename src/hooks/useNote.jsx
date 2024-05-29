import { useState, useEffect } from "react";
import notesService from "../services/notes/notesService";

export const useNote = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleNewNotesValue = (newValue) => {
    setNotes(newValue);
  };

  useEffect(() => {
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
    getAllNotesHandler();
  }, []);

  return {
    notes,
    handleNewNotesValue,
    loading,
  };
};
