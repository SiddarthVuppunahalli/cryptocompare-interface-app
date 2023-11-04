// BookmarksBar.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BookmarkCard from './BookmarkCard';
import { getCardData } from '../../services/data.service';
import { CardData } from '../../interfaces/card';
import { CardNotFoundBox, CardsWrapper } from '../../styles/card.style';

function BookmarksBar() {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const [cardData, setCardData] = useState<CardData[]>([]);

  const fetchData = async () => {
    try {
      const data = await getCardData(bookmarks);
      setCardData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    
    const refreshInterval = setInterval(() => {
      fetchData();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => {
      clearInterval(refreshInterval);
    };
  }, [bookmarks]);

  return (
    <div className="bookmarks-bar">
      <CardsWrapper>

        {bookmarks.length === 0 ? (
          <CardNotFoundBox>No Bookmarks added yet.</CardNotFoundBox>
        ) : (
          bookmarks.map((symbol: string) => (
            <BookmarkCard key={symbol} id={symbol} data={cardData} />
          ))
        )}

      </CardsWrapper>
    </div>
  );
};

export default BookmarksBar;
