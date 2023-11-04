import React from 'react';
import './App.css';
import BookmarksBar from './components/Bookmarks/BookmarksBar';
import TableContent from './components/Table/TableContent';

function App() {
  return (
    <div className="App">
      <BookmarksBar />
      <TableContent />
    </div>
  );
}

export default App;
