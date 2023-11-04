// BookmarksBar.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BookmarkCard from './BookmarkCard';
import { getCardData } from '../../services/data.service';
import { CardData } from '../../interfaces/card';

function BookmarksBar() {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const [cardData, setCardData] = useState<CardData[]>([]);

  const fetchData = async () => {
    try {
      const data = await getCardData();
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
  }, []);

  return (
    <div className="bookmarks-bar">
      <h2>Bookmarked Cryptocurrencies</h2>
      <div className="bookmarks-container">
        {bookmarks.map((id: string) => (
          <BookmarkCard key={id} id={id} data={'yes'}/>
        ))}
      </div>
    </div>
  );
};

export default BookmarksBar;
