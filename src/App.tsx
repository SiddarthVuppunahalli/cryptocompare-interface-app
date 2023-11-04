import React from 'react';
import * as A from './styles/app.style'
import BookmarksBar from './components/Bookmarks/BookmarksBar';
import TableContent from './components/Table/TableContent';

function App() {
  return (
    <div>
      <A.ContentWrap>
        <h2>Bookmarked Cryptocurrencies</h2>
        <BookmarksBar />
        <h2>Cryptocurrency Listings</h2>
        <A.TableWrap>
          <TableContent />
        </A.TableWrap>
      </A.ContentWrap>
    </div>
  );
}

export default App;
