
import { useNote } from "./hooks";
import { NoteList } from "./components/NotesList/NoteList";
function App() {
  
  const {
    notes,
    loading,
    handleAddNewNote,
    getAllNotesHandler,
    handleDeleteNote,
    handleUpdateNote,
  } = useNote();

  return (
    <NoteList notes={notes} loading={loading} handleAddNewNote={handleAddNewNote} getAllNotesHandler={getAllNotesHandler} handleUpdateNote={handleUpdateNote} handleDeleteNote={handleDeleteNote} />
      
    
  );
}

export default App;
