import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
        addNowPlayingMovies: function(state, action) {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: function(state, action) {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: function(state, action){
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: function(state, action){
            state.upcomingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;