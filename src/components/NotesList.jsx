import React, { useEffect, useState } from 'react';
import { getNotes } from '../utils/Storage';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate 3-second loading
    const timeout = setTimeout(() => {
      const storedNotes = getNotes();
      setNotes(storedNotes);
      setLoading(false);
    }, 3000); // Why show spinner here: Simulates async data fetching UX

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading notes...</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <div key={index} className="note-card">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content.slice(0, 100)}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
