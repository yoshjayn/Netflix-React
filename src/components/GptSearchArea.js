import React, { useRef } from 'react'
import openai from '../utils/openai';
import { Api_options } from '../utils/constants';
import { addSearchMovieResult } from '../utils/gptSlice';
import { useDispatch } from 'react-redux';

const GptSearchArea = () => {
  const dispatch = useDispatch();
const searchText= useRef(null);

//search movie in tmd
const searchMovieTMD = async(movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', 
      Api_options);
      const json = await data.json()
      console.log("json=", json)
      return json.results;

}
  const handleSearchClick = async() =>{
    console.log(searchText.current.value)
//Api call
// const gptResults = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: 'Say this is a test' }],
//       model: 'gpt-3.5-turbo',
//     }); 
    
  const searchQuery= searchText.current.value 

  if(!searchQuery){
    // TODO: Write Error Handling
  }
const tmdResults = await  searchMovieTMD(searchQuery);
 console.log("to dispatch:",tmdResults)
dispatch(addSearchMovieResult(tmdResults)); 
  // const movieArray= searchQuery.split(",");
  // const movieArray= searchQuery;


  //for each movie i will search tmd api
  //  const promiseArray = movieArray.map((movie) => searchMovieTMD(movie));
  //  const promiseArray = movieArray((movie) => searchMovieTMD(movie));

 
  //  const tmdResults = await Promise.all(promiseArray);
  

  //  console.log(tmdResults);
  };
  


  
  
    return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
<form className='w-full m-4 md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
    <input
    ref={searchText}
    type="text"
    className='p-4 m-4 col-span-9'
    placeholder='What We Watchin Today?'
    />
    <button className='col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg' onClick={handleSearchClick}>
    Search
    </button>
    </form>      
    </div>
  )
}

export default GptSearchArea
