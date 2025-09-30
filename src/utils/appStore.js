import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import searchResultReducer from './searchResultSlice';

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            searchResults: searchResultReducer
        }
    }
)

export default appStore;