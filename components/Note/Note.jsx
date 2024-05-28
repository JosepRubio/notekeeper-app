
const Note = ({note}) => {
    return (
        <div>
            <h2>{note.name}</h2>
            <p>Description: {note.description}</p>
            <p>Important: {note.important ? "Yes" : "No"}</p>
            <p>Status: {note.status}</p>
            <p>Due date: {note.due_date}</p>
        </div>
    );
}
