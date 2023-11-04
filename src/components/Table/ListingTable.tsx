import React, { useState } from 'react';
import { TableColumns } from './TableColumns';
import { TableRowCurrencyData, TableRowData } from '../../interfaces/table';
import * as T from '../../styles/table.style'
import NoData from './NoData';
import { addBookmark, removeBookmark } from '../../redux/bookmarksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import DetailsModal from '../Modal/DetailsModal';

function ListingTable({data}: {data: TableRowData[]}) {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState<string>('');
  const [modalData, setModalData] = useState<TableRowCurrencyData>();


  const toggleBookmark = (symbol: string) => {
    if (bookmarks.includes(symbol)) {
      dispatch(removeBookmark(symbol));
    } else {
      dispatch(addBookmark(symbol));
    }
  };

  const handleSymbolClick = (data: TableRowCurrencyData) => {
    setIsModalOpen(true);
    setSelectedSymbol(data.FROMSYMBOL);
    setModalData(data);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(undefined);
  }

  return (
    <T.TableRowWrap>
      {data.length !== 0 ? (
        data.map((currencyData) => (
          <T.TableRow key={currencyData.USD.FROMSYMBOL}>
            <div onClick={() => handleSymbolClick(currencyData.USD)} style={{ minWidth: '10%' }}>
              <T.TableCell key='0' style={{ width: 12 }}>
                  <T.Clickable>{currencyData.USD.FROMSYMBOL}</T.Clickable>
              </T.TableCell>
            </div>
            {TableColumns.slice(1).map((column, index) => (
              <T.TableCell key={index} style={{ width: column.width }}>
                {currencyData.USD[column.key as keyof typeof currencyData.USD]}
              </T.TableCell>
            ))}
            <T.TableCell key="bookmark" style={{ width: '6' }}>
              <div onClick={() => toggleBookmark(currencyData.USD.FROMSYMBOL)}>
                {bookmarks.includes(currencyData.USD.FROMSYMBOL) ? (
                  <FaBookmark size={24} color="blue" />
                ) : (
                  <FaRegBookmark size={24} color="gray" />
                )}
              </div>
            </T.TableCell>
          </T.TableRow>
        ))
      ) : (
        <NoData />
      )}
      
      { isModalOpen && modalData && (
        <DetailsModal selectedSymbol={selectedSymbol} data={modalData} handleModalClose={handleModalClose} />
      )}
    </T.TableRowWrap>
  );
};

export default ListingTable;
