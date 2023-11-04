// BookmarksBar.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BookmarkCard from './BookmarkCard';

function BookmarksBar() {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);

  return (
    <div className="bookmarks-bar">
      <h2>Bookmarked Cryptocurrencies</h2>
      <div className="bookmarks-container">
        {bookmarks.map((id: string) => (
          <BookmarkCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default BookmarksBar;
