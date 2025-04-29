// App.jsx
import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('add');

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'add' ? <AddNote /> : <NotesList />}
    </div>
  );
}
export default App;
