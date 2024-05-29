const baseUrl = import.meta.env.VITE_URL_NOTES;

const getAllNotes = async () => {
  const options = { method: "GET", headers: { "Content-Type": "application/json" } };
  try {
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
      console.log(`Error obtaining notes, Status: ${response.status}`);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const createNote = (noteValues) => {
 
};

const updateNote = (id, noteValues) => {
  
};

const deleteNote = (id, noteValues) => {
 
};

export default { getAllNotes, createNote, updateNote, deleteNote };
