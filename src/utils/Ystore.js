import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";

const Ystore = configureStore({
    reducer :{
        user : userSlice,
        movie: movieSlice,
        gpt: gptSlice
    }
})
export default Ystore