import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice(
    {
        name : "gpt",
        initialState: {
            showGptSearch : false,
            movieResult: null
        },
        reducers:{
            toggleSearchView: (state, action) =>{
                state.showGptSearch = !state.showGptSearch
            },
            addSearchMovieResult:(state, action)=>{
                state.movieResult = action.payload;
            },
        },
    });
    export const { toggleSearchView,addSearchMovieResult } = gptSlice.actions;

    export default gptSlice.reducer;