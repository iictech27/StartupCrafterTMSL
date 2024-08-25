import React from 'react'
import NoteSection from './NoteSection';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <NoteSection />
    </div>
  )
}
