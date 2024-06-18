import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'
// import GptSearch from './GptSearch'
import { toggleSearchView } from '../utils/gptSlice'
import { LOGO } from '../utils/constants'


const Header = () => {

  const select = useSelector(store => store.user) 
  const navigate = useNavigate()
const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(removeUser())
    navigate("/")
  }
   const handleGptSearchClick =()=>{
    dispatch(toggleSearchView())

   }
  return (
    <div className='absolute flex  justify-between w-screen px-8 py-2 bg-gradient from-black z-10 '>
      <img className='w-44 mx-auto md:mx-0 ' src = {LOGO} 
       alt='logo'/>
       
      { select &&
      <div className=' flex md:flex-row p-2 items-center justify-end -mr-6'>
        <button className='py-2 px-3 md:mx-4 my-2 w-34  text-black md:bg-red-600 rounded-3xl' onClick={handleGptSearchClick}>🔎</button>
        <img 
        className='w-10 h-10 hidden md:block'
        src={select?.photoURL} alt="logo" />
        <button className='md:font-bold text-white md:py-2 md:px-4 md:mx-4 md:my-2 md:border-solid md:border-2 md:border-white bg-black cursor-pointer' onClick={handleClick}>Sign Out</button>
    </div>
}
    </div>
  )
}

export default Header
