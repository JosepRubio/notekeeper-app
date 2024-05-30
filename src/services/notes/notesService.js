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

const createNote = async (body) => {
  const options = { method: "POST", headers: { "Content-Type": "application/json" }, body:JSON.stringify(body) };
  try {
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
      console.log(`Error obtaining notes, Status: ${response.status}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateNote = async (id, body) => {
  const options = { method: "PUT", headers: { "Content-Type": "application/json" }, body:JSON.stringify(body) };
  try {
    const baseUrlWithId = `${baseUrl}/${id}`
    const response = await fetch(baseUrlWithId, options);
    if (!response.ok) {
      console.log(`Error obtaining notes, Status: ${response.status}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
  
};

const deleteNote = async (id) => {
  const options = { method: "DELETE", headers: { "Content-Type": "application/json" }};
  try {
    const baseUrlWithId = `${baseUrl}/${id}`
    const response = await fetch(baseUrlWithId, options);
    if (!response.ok) {
      console.log(`Error deleting notes, Status: ${response.status}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default { getAllNotes, createNote, updateNote, deleteNote };
