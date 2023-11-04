import axios from 'axios';
import { getSymbolString } from '../utils/table';
import { getSymbolStringFromStore } from '../utils/card';

const BASE_URL = 'https://min-api.cryptocompare.com/data';
const API_KEY = 'd642fd1a34b71109239cffffd151c7782facff28260d86a418560e71bc4fbb63'

// Function to get table data
export const getTableData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pricemultifull`, {
        headers: {
            Authorization: `Apikey ${API_KEY}`,
        },
        params: {
            fsyms: getSymbolString(),
            tsyms: 'USD',
        },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get card data
export const getCardData = async (bookmarks: string[]) => {
  try {
    const response = await axios.get(`${BASE_URL}/pricemulti`, {
      headers: {
          Authorization: `Apikey ${API_KEY}`,
      },
      params: {
          fsyms: getSymbolStringFromStore(bookmarks),
          tsyms: 'USD',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};