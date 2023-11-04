import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com'; // Replace with your API base URL

// Function to get table data
export const getTableData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/table-data`);
    return response.data; // Assuming the response contains the table data
  } catch (error) {
    throw error;
  }
};

// Function to get card data
export const getCardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/card-data`);
    return response.data; // Assuming the response contains the card data
  } catch (error) {
    throw error;
  }
};
