import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css';
const MovieList = ({title, movies}) => {
    
   console.log("movies",movies)
   if (!movies) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  return (
    <div className='px-6'>
    <h1 className='md:mt-2 md:-mb-2 text-xl md:text-3xl font-bold text-white pb-2'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
      <div className='flex'>
        {movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
      </div>
    </div>
    </div>
  )
}

export default MovieList
