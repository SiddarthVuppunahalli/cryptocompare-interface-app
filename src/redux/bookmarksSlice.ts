import { createSlice } from '@reduxjs/toolkit';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: [] as string[],
  reducers: {
    addBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state = state.filter((id) => id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;