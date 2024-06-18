import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { Api_options } from "../utils/constants";


function useTopRatedMovies() {
   const dispatch=useDispatch()
  //  const TopRated = useSelector((store)=>store.movies.TopRated)

    async function getTopRated(){
        try{ 
          const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
          Api_options );
          const datajson=await data?.json();
          console.log("datajosn=",datajson.results)
          dispatch(addTopRated(datajson.results))
        }catch(err){
          console.log("err=",err.message);
        }
      }
      useEffect(()=>{
        getTopRated();
      // {!TopRated && getTopRated();}
      },[]);
}

export default useTopRatedMovies;