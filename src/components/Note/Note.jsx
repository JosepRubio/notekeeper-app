
export const Note = ({note,setCurrentNote,handlerDeleteNote}) => {
    return (
        <li>
            <h2>{note.name}</h2>
            <p>Description: {note.description}</p>
            <p>Important: {note.important ? "Yes" : "No"}</p>
            <p>Status: {note.status}</p>
            <p>Due date: {note.dueDate}</p>
            <div>
                <button onClick={()=>setCurrentNote(note)}>Update</button>
                <button onClick={()=>handlerDeleteNote(note.id)}>Delete</button>
            </div>
        </li>
    );
}
