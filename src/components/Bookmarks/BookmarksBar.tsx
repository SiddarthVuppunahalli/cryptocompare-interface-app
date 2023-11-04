import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BookmarkCard from './BookmarkCard';
import { CardNotFoundBox, CardsWrapper } from '../../styles/card.style';

function BookmarksBar() {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);

  return (
    <div className="bookmarks-bar">
      <CardsWrapper>

        {bookmarks.length === 0 ? (
          <CardNotFoundBox>No Bookmarks added yet.</CardNotFoundBox>
        ) : (
          bookmarks.map((symbol: string) => (
            <BookmarkCard key={symbol} id={symbol} />
          ))
        )}

      </CardsWrapper>
    </div>
  );
};

export default BookmarksBar;
