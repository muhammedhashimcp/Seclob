import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme'; 
export const store = configureStore({
	reducer: themeReducer,
});

export default store;
