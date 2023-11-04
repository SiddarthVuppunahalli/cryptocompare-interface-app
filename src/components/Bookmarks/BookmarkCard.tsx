import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookmark } from '../../redux/bookmarksSlice';

function BookmarkCard ({id, key, data}: {id: string, key: string, data: string}){
  const dispatch = useDispatch();

  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(id));
  };

  return (
    <div className="bookmark-card">
      <button onClick={handleRemoveBookmark}>Remove</button>
    </div>
  );
};

export default BookmarkCard;
