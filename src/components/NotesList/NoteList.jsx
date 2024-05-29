import { Note } from "../Note/Note";

export const NoteList = ({ loading, notes }) => {
    return (
        <>
{/*<CreateNoteForm></CreateNoteForm>*/}
        <ul>
            {loading ? (
                <li>Cargando notas...</li>
            ) : (
                notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))
            )}
        </ul>
        </>
    );
};
