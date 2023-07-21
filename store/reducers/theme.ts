// reducers/counter.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
	name: 'counter',
	initialState: false,
	reducers: {
		toggleNav: (state) => !state,
		
	},
});

export const { toggleNav } = themeSlice.actions;
export default themeSlice.reducer;
