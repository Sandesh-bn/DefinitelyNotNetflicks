import { createSlice } from "@reduxjs/toolkit";


const searchResutlSlice = createSlice({
    name: 'searchResults',
    initialState: null,
    reducers: {
        addMovieResult: function(state, action){
            console.log("ADDMOVIE");
            console.log(action)
            return action.payload
        }
    }
})

export const { addMovieResult} = searchResutlSlice.actions;
export default searchResutlSlice.reducer;