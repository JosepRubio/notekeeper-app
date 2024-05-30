export const UpdateNoteForm = ({note,handleUpdateSubmit}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteValue = {
      name: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
      important: event.target.important.checked,
      dueDate: event.target.dueDate.value,
    };
    handleUpdateSubmit(newNoteValue);
  } 
  return (
    <form onSubmit={handleSubmit}>
     <div>
       <label>Name:</label>
       <input
         type="text"
         name="name"
         defaultValue={note.name}
         required
       />
     </div>
     <div>
       <label>Description:</label>
       <textarea
         name="description"
         defaultValue={note.description}
         required
       />
     </div>
     <div>
       <label>Status:</label>
       <select
         name="status"
         defaultValue={note.status}
         required
       >
         <option value="">Select an option</option>
         <option value="pending">Pending</option>
         <option value="in-progress">In progress</option>
         <option value="completed">Completed</option>
       </select>
     </div>
     <div>
       <label>
         <input
           type="checkbox"
           name="important"
           defaultChecked={note.important}
         />
         Important
       </label>
     </div>
     <div>
       <label>Due data:</label>
       <input
         type="date"
         name="dueDate"
         defaultValue={note.dueDate}
         required
       />
     </div>
     <button type="submit">Update</button>
   
   </form>
   ) 
 }