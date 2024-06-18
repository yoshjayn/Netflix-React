import Header from './Header'
import MainContainer from './MainContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';

import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browser = () => {
  // async function getmoviedata(){
  //   try{
  //     const data= fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Api_options );
  //     const datajson=await data?.json();
  //     console.log("datajosn=",datajson)
  //   }catch(err){
  //     console.log("err=",err.message);
  //   }
  // }
  // useEffect(()=>{
  //   getmoviedata();
  // },[]);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
        <Header/>
        {showGptSearch ? (
        <GptSearch/>
        ):(
        <>
          <MainContainer/>           
          <SecondaryContainer/>
        </>
        )}
        
        <div className=' top-24'> 
        {/* <MainContainer/>           
          <SecondaryContainer/> */}
        </div>
    </div>
  )
}

export default Browser