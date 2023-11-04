import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../../redux/bookmarksSlice';
import { CardData } from '../../interfaces/card';
import * as C from '../../styles/card.style';
import { FaArrowDown, FaArrowUp, FaBookmark, FaEquals, FaRegBookmark } from 'react-icons/fa';
import { RootState } from '../../redux/store';
import { getCardData } from '../../services/data.service';

function BookmarkCard({ id, key }: { id: string; key: string }) {
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState<CardData>();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const [priceData, setPriceData] = useState<Record<string, number>>({});
  const [prevPriceData, setPrevPriceData] = useState<Record<string, number>>({});
  const [bgColor, setBgColor] = useState('lightgray');

  const fetchData = async () => {
    try {
      const data = await getCardData(id);
      setCardData(data);
    } catch (error) {
      console.error(error);
    }
  }

  const updatePriceData = () => {
    if (cardData && cardData[id]?.USD !== undefined) {
      setPrevPriceData(priceData);
      setPriceData((prevPriceData) => ({
        ...prevPriceData,
        [id]: cardData[id]?.USD
      }));
    }
  }

  useEffect(() => {
    fetchData();

    const refreshInterval = setInterval(() => {
      fetchData();
    }, 60000); // 60000 milliseconds = 1 minute

    return () => {
      clearInterval(refreshInterval);
    };
  }, [id]);

  useEffect(() => {
    updatePriceData();
  }, [cardData, id]);

  const toggleBookmark = (symbol: string) => {
    if (bookmarks.includes(symbol)) {
      dispatch(removeBookmark(symbol));
    } else {
      dispatch(addBookmark(symbol));
    }
  };

  // Determine background color based on the price data
  useEffect(() => {
    if (cardData) {
      if (priceData[id] !== undefined) {
        if (priceData[id] > prevPriceData[id]) {
          setBgColor('green');
        } else if (priceData[id] < prevPriceData[id]) {
          setBgColor('red');
        } else {
          setBgColor('lightgray');
        }
      }
    }
  }, [priceData, cardData, id]);

  return (
    <C.CardBox>
      <C.CardColor bgColor={bgColor} />
      <C.CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {cardData ? `${id} : ${cardData[id]?.USD}$` : 'Loading...'}
          <C.ArrowIcon>
            {bgColor === 'red' && <FaArrowDown color="red" size={16} />}
            {bgColor === 'green' && <FaArrowUp color="green" size={16} />}
            {bgColor === 'lightgray' && <FaEquals color="lightgray" size={16} />}
          </C.ArrowIcon>
        </div>
      </C.CardContent>

      <C.CardSeparator />
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
}

export default BookmarkCard;
