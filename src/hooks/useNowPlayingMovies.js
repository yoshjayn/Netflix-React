import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPLaying } from "../utils/movieSlice";
import { Api_options } from "../utils/constants";


function useNowPlayingMovies() {
   const dispatch=useDispatch()
  //  const nowPlaying = useSelector((store)=>store.movies.nowPlaying)
    async function getmoviedata(){
        try{ 
          const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
          Api_options );
          const datajson=await data?.json();
          console.log("datajosn=",datajson.results)
          dispatch(addNowPLaying(datajson.results))
        }catch(err){
          console.log("err=",err.message);
        }
      }
      useEffect(()=>{
        getmoviedata();
        //{!nowPlaying && getmoviedata();}
      },[]);
}

export default useNowPlayingMovies;