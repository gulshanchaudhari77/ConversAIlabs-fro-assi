const STORAGE_KEY = 'notes-app';

export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (err) {
    console.error('Storage read error:', err);
    return [];
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (err) {
    console.error('Storage write error:', err);
    throw err;
  }
};
