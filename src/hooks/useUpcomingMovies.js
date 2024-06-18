import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
import { Api_options } from "../utils/constants";


function useUpcomingMovies() {
   const dispatch=useDispatch()
  //  const Upcoming = useSelector((store)=> store.movies.Upcoming)
    async function getUpcomingMovies(){
        try{ 
          const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
          Api_options );
          const datajson=await data?.json();
          console.log("datajosn=",datajson.results)
          dispatch(addUpcoming(datajson.results))
        }catch(err){
          console.log("err=",err.message);
        }
      }
      useEffect(()=>{
        getUpcomingMovies();
        // {!Upcoming && getUpcomingMovies();}
      },[]);
}

export default useUpcomingMovies;