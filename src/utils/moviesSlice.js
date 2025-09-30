import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        addNowPlayingMovies: function(state, action) {
            state.nowPlayingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;