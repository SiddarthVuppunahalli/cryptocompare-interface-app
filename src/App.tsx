import React from 'react';
import * as A from './styles/app.style'
import BookmarksBar from './components/Bookmarks/BookmarksBar';
import TableContent from './components/Table/TableContent';

function App() {
  return (
    <div>
      <BookmarksBar />
      <A.TableWrap>
        <TableContent />
      </A.TableWrap>
    </div>
  );
}

export default App;
