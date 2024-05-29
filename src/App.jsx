
import { useNote } from "./hooks";
import { NoteList } from "./components/NotesList/NoteList";
function App() {
  
  const {
    notes,
    loading,
    handleNewNoteEntry,
    handleDeleteNoteEntry,
    handleUpdateNoteEntry,
  } = useNote();
  console.log (notes)

  return (
    <NoteList notes={notes} loading={loading}/>
      
    
  );
}

export default App;
