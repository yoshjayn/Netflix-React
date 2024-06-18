import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import Videocover from './Videocover'
function MainContainer() {
    const movies=useSelector(store=>store.movie?.nowPlaying)
    console.log("movies=", movies)
    if(!movies) return;
    
    const Mainmovie=movies[0];
     const { original_title, overview, id }= Mainmovie;
    //  var {release_date} = Mainmovie;
     
  return (
    <div className='pt-[30%] bg-black md:pt-0'>  
      <Videotitle title={original_title} overview={overview} />
      <Videocover movieId={id}/>
      {/* <h1>{release_date}</h1> */}
    </div>
  )
}
export default MainContainer;

