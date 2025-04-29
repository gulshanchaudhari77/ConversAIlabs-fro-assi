import React from 'react';

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="navbar">
      <button
        className={`nav-button ${activeTab === 'add' ? 'active' : ''}`}
        onClick={() => setActiveTab('add')}
      >
        Add Note
      </button>
      <button
        className={`nav-button ${activeTab === 'view' ? 'active' : ''}`}
        onClick={() => setActiveTab('view')}
      >
        View Notes
      </button>
    </div>
  );
}

export default Navbar;
