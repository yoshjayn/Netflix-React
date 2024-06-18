import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movieSlice",
        initialState:{
            nowPlaying : null,
            Upcoming:null,
            TopRated:null,
            Popular:null,
            trailerVideo: null
        },
        reducers:{
            addNowPLaying:(state,action)=>{
                state.nowPlaying=action.payload
            },
            addUpcoming:(state,action)=>{
                state.Upcoming=action.payload
            },
            addTopRated:(state,action)=>{
                state.TopRated=action.payload
            },
            addPopular:(state,action)=>{
                state.Popular=action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo=action.payload
            }
        }
    }
)

export const { addNowPLaying ,addUpcoming, addTopRated, addPopular, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;