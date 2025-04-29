import React, { useState } from 'react';
import { saveNote } from '../utils/Storage';

function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      saveNote({ title, content });
      setTitle('');
      setContent('');
      setError(null);
    } catch (err) {
      setError('Failed to save note.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-note-form">
      {error && <div className="error-banner">{error}</div>}
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="save-button" type="submit" disabled={saving}>
        {saving ? 'Saving…' : 'Save Note'}
      </button>
    </form>
  );
}

export default AddNote;
