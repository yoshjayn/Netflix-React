import React, { useRef, useState } from 'react'
import Header from './Header'
import { useNavigate } from "react-router-dom"
import Validate from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase' 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const emailRef= useRef(null)
  const passRef= useRef(null)
  const nameRef= useRef(null)
  const navigate= useNavigate()
  const dispatch = useDispatch()
  const toggleLogin=()=>{
        setIsSignIn(!isSignIn);               //value updation of isSignIn var from true to false
  }

  // const res;
 
  // const handleSubmit = ()=>{
  //   if(isSignIn){
  //      res = Validate(emailRef.current.value, passRef.current.value);
  //   }
  //   else{
  //   res = Validate(emailRef.current.value, passRef.current.value, nameRef.current.value);
  //   }
  //   setErrorMessage(res)
  //   console.log("response=", res)
  //   console.log(emailRef)
  //   console.log(passRef)
  // }

  const handleSubmit = () => {
    let res = null;

    if (isSignIn) {
      // For sign-in, no need to validate the name
      res = Validate(emailRef.current.value, passRef.current.value);
    } 
    else {
      // For sign-up, check if the name is provided and validate it
      const name = nameRef.current.value;
      if (!name.trim()) {
        setErrorMessage("Name is required");
        return;
      }
      res = Validate(emailRef.current.value, passRef.current.value, name);
    }

    setErrorMessage(res)

    if(errorMessage) return;

   //Sign in Sign up
   if(!isSignIn){
    createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    updateProfile(user, {
      displayName: nameRef.current.value, photoURL: "https://avatars.githubusercontent.com/u/122783078?v=4"
    }).then(() => {
      // Profile updated!
      // ...
      const{uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({
        uid:uid, email: email, displayName: displayName, photoURL: photoURL
      }))
    }).catch((error) => {
      // An error occurred
      // ...
    });
    // ...

    navigate("/browser")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });
   }
   
   else{
    signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate("/browser")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });
   }

  };

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img className='md:w-screen h-screen object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        alt='cover'/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-3/4 md:w-3/12 bg-black bg-opacity-80 my-20 mx-auto right-8 left-8 text-white'>
      <h1 className='font-bold text-3xl py-4' >{isSignIn ?"Sign In":"Sign Up"}</h1>
      
      {!isSignIn &&                         //if isSignIn is false, the second statement won't process i.e. Name Input won't appear on UI
      <input ref={nameRef} type="text" placeholder='Name' className='p-2 m-2 w-full text-black' /> }

      <input ref={emailRef} type="email" placeholder='Email' className='p-2 m-2 w-full text-black' />
      <input ref={passRef} type="password" placeholder='password' className='p-2 m-2 w-full text-black' />
      <p className=''>{errorMessage}</p>
      <button onClick={handleSubmit} className='p-4 m-2 bg-red-600 w-full'>{isSignIn ?"Sign In":"Sign Up"}</button>
      <div className='text-center'>
      <span className='w-full text-slate-300'>OR</span>
      </div>
      <button className='p-2 my-4 bg-slate-400/50 w-full '>Use a sign-in code</button>
      <div className='text-center'>
      <span className='w-full'>Forgot Password?</span></div>
      <div><input type='checkbox' />
      <span className='w-full'>Remember me</span>
      </div>
      <span onClick={toggleLogin} className='cursor-pointer'>{isSignIn ?"New to Netflix? Sign Up now.":"Already a user, Sign In now!"}</span>
      </form>
    </div>
  )
}

export default Login
