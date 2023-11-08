import axios from 'axios';
import { getSymbolString } from '../utils/table';

const BASE_URL = 'https://min-api.cryptocompare.com/data';
const API_KEY = 'f73f25a148905cd182f291fa41da54b3ae7d98478f66818a83c3ccd8383731c0'

// Function to get table data
export const getTableData = async (currency: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/pricemultifull`, {
        headers: {
            Authorization: `Apikey ${API_KEY}`,
        },
        params: {
            fsyms: getSymbolString(),
            tsyms: currency,
        },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to get card data
export const getCardData = async ({id, currency}: {id: string, currency: string}) => {
  try {
    const response = await axios.get(`${BASE_URL}/pricemulti`, {
      headers: {
          Authorization: `Apikey ${API_KEY}`,
      },
      params: {
          fsyms: id,
          tsyms: currency,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};