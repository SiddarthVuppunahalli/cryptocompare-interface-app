import { createSlice } from '@reduxjs/toolkit';
import { getNameFromSymbol } from '../utils/table';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [] as string[],
  reducers: {
    addBookmark: (state, action) => {
      if (action.payload === 'Ƀ') {
          state.push('BTC');
      } else if (action.payload === 'Ξ') {
          state.push('ETH');
      } else {
          state.push(action.payload);
      }
    },
    removeBookmark: (state, action) => {
      const idToRemove = getNameFromSymbol(action.payload);
      const index = state.indexOf(idToRemove);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;