import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";
import { Api_options } from "../utils/constants";


function usePopularMovies() {
   const dispatch=useDispatch()
  //  const Popular = useSelector((store)=>store.movies.Popular)

    async function getPopularMovies(){
        try{ 
          const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
          Api_options );
          const datajson=await data?.json();
          console.log("datajosn=",datajson.results)
          dispatch(addPopular(datajson.results))
        }catch(err){
          console.log("err=",err.message);
        }
      }
      useEffect(()=>{
        getPopularMovies();
        // {!Popular && getPopularMovies();}
      },[]);
}

export default usePopularMovies;