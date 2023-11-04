import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../../redux/bookmarksSlice';
import { CardData } from '../../interfaces/card';
import * as C from '../../styles/card.style';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { getNameFromSymbol } from '../../utils/table';
import { RootState } from '../../redux/store';

function BookmarkCard ({id, key, data}: {id: string, key: string, data: CardData[]}){
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);

  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(id));
  };

  const toggleBookmark = (symbol: string) => {
    if (bookmarks.includes(symbol)) {
      dispatch(removeBookmark(symbol));
    } else {
      dispatch(addBookmark(symbol));
    }
  };

  const value = data['USD']

  return (
    <C.CardBox>
      {/* <C.CardColor bgColor={getColorCode(color)} /> */}
      <C.CardContent>
        {id}: {(data[id] as any)?.USD}
      </C.CardContent>



      <C.CardSeparator/>
      <C.CardButtonWrapper>
        <div onClick={() => toggleBookmark(id)}>
          {bookmarks.includes(id) ? (
            <FaBookmark size={24} color="blue" />
          ) : (
            <FaRegBookmark size={24} color="gray" />
          )}
        </div>
      </C.CardButtonWrapper>
    </C.CardBox>
  );
};

export default BookmarkCard;
