import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/constants";

const useMovieVideo = (movieId) =>{
    const dispatch = useDispatch();
    // const trailerVideo = useSelector((store)=>store.movies.trailerVideo)


const getMovieVideo=async()=>{ 
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",Api_options)            //"+movieId+"
    const dataJs = await data.json();
    console.log("Json Data=", dataJs)

    if (dataJs.results){
            let trailer = dataJs.results.filter((res)=>{
        return res.type == "Trailer" && res.name == "Official Trailer"
    })
    console.log("Your Trailer=", trailer)
    trailer = trailer.length? trailer : dataJs.results[0]
    // setTrailerId(trailer[0].key)
    // console.log(trailerId)
    dispatch(addTrailerVideo(trailer[0]));
      }
    }
useEffect(()=>{ 
    getMovieVideo();
    // {!trailerVideo && getMovieVideo()}
},[])
};
export default useMovieVideo;