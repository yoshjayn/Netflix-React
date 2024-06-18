import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movie);

  console.log(movies)
  return (
    <div className='bg-black w-full'>
    <div className='mt-0 md:-mt-60 pl-0 md:pl-6 relative z-10 '>
  <MovieList title={"Now Playing"} movies={movies.nowPlaying}  />          
  <MovieList title={"Upcoming"} movies={movies.Upcoming} />   
  <MovieList title={"Top Rated"} movies={movies.TopRated} />          
  <MovieList title={"Popular"} movies={movies.Popular} />          
  </div>
    </div>
  )
}

export default SecondaryContainer
