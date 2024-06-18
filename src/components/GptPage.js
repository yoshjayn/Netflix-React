import React from 'react'

import { useSelector } from "react-redux"
// import { Api_options } from "../utils/constants";
import MovieCard from './MovieCard';
import MovieList from './MovieList';

const GptPage = () => {
   
  const {movieResult} = useSelector(store=> store.gpt);
  if(!movieResult)  return null
  // console.log("movieName:",movieResult[0].title)


//   const searchMovieReview = async(movie) =>{
//     const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie +'/reviews?language=en-US&page=1', Api_options)
//       const json = await data.json()
//       console.log("reviews=", json)
//       return json.results;
// }

  


  return (
    <div className="p-4 m-4 bg-black bg-opacity-85 text-white">
      <div>
        <h1 className=''>{movieResult.length == 0 && "No Movie Found!"} </h1>
        {/* <h1>{movieResult && movieResult[0]?.title}</h1> */}
        <MovieList title={movieResult && movieResult[0]?.title} movies={movieResult} />          

        {/* <div className='flex '>
        {
          movieResult.map((res) =>{
            return <MovieCard key={res.id} posterPath={res.poster_path} />

          })
        }
        
        </div> */}
        
      </div>
    </div>
  )
}

export default GptPage
