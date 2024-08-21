import React from 'react';
import NoteSection from './components/NoteSection';
import StickyNavbar from './components/navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <NoteSection />
    </div>
  );
}

export default App;
