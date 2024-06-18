# Netflix GPT

# DAY 1
-Create React App           
-Configured TailwindCSS    

-Routing of App (body.js) 
    { RouterProvider, createBrowserRouter } from "react-router-dom"
    to install - npm i react-router-dom
    -Create browser router
    -RouterProvider 

# DAY2
-Login Form
-Sign Up Form

# DAY 3
-useRef hook (regular expressions)
-utils folder (to encapsulate all the utilities throughout the application) 
    -Form Validation

# Day 4
-firebase setup
    -firebase login  (Allow Firebase to collect CLI and Emulator Suite usage and error reporting information)
    -firebase init
    -firebase build 
    -firebase deploy
-deployed app to production
-live url : https://netflix-gpt-7ff19.web.app/

# Day 5
-Create Signup user account
-Implement Sign In user Api
-Auth utility- getAuth is used to authenticate the current user in firebase.
               So, we have created an utility auth so that we can use it anywhere in our application.

# Day 6
- Created Redux Store with userSlice 
  npm i -D @reduxjs/toolkit
  npm i react-redux
  onAuthStateChanged managed all the actions collectively in the root file (Body.js)
  Dispatch hook for updating the store & Navigate hook for redirecting to the designated pages.


# Day 7
- Authentication of SignIn and SignUp using firebase's predefined functions signInUserWithEmailAndPassword and     
  createUserWithEmailAndPassword respectively!
- Created SignOut functionality next to a user icon displayed on the header.
- onClick of SignOut button, the store is set to "null" using Dispatch by providing removeUser reducer(function).
- 

# Day 8
Lecture no. 2 - 2:15:00

# Day idk- date - 12 june
Lecture no. 3 - last 30 minutes Responsivenes
  - md - desktop, 
  - default styling is for mobile
  - sm - tab


 VIDEO 2
- implemented useNavigate hook to navigate among signin/out page and browser page after successful authentication 
  by the imported functions from firebase
- shifted router path from Body.js to App.js (Header.js for now)
   -We initially placed the routing path and the router provider in the Body.js and we were providing navigate in th esame file, which led to an error. Consequently, we relocated the routing path router provider to the App.js (parent component) to rectify this issue.
- Mounting- Unmountiong Functionality


# Features
-Login/Sign Up
    -Sign In/ Sign Up form
    -Redirect to Browser
    -Browser (After Authentication)
    -Header
    -Main Movie
        -Trailer in Background
        -Title & Description