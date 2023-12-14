import React from 'react'
import { useState,useRef } from "react"
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true)
 
  const [isFormValid, setIsFormValid] = useState(true)
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm)
  }

  const handleButtonClick = () =>{
    const Message = checkValidData(email.current.value,password.current.value)
    setIsFormValid(Message)
   
    if(Message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsFormValid(errorCode + "-" + errorMessage)
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
         // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsFormValid(errorCode + "-" + errorMessage)
      });
      }
   }

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);


  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
       <img className='w-56 '
        src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
       alt = "netflix-logo"  /></div>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-logo" />
      </div>
      <form   onSubmit = {(e) => e.preventDefault()}
 className="absolute text-white p-12 w-4/12 my-24  mx-auto left-0 right-0 bg-black bg-opacity-90">
        <h1 className=" text-3xl py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input ref = {fullName} type="text" placeholder="    Full Name" className="py-3 my-3  w-full bg-gray-800 rounded-lg" />
        }
        <input ref = {email} type="text" placeholder="    Email or Phone number" className="py-3 my-3  w-full bg-gray-800 rounded-lg" />
        <input ref = {password} type="text" placeholder="    Password" className="py-3 my-2  w-full bg-gray-800 rounded-lg" />
        <p className = "text-red font-bold">{isFormValid}</p>

        <button className="py-3  my-6  bg-red-700 w-full rounded-lg" onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <div className="flex cursor-pointer" onClick={toggleSignInForm}>
          <p className="py-3 text-gray-400 ">{isSignInForm ? "New to Netflix?" : "Already registered?"}</p><p className="py-3 pl-1">{isSignInForm ? "Sign up Now" : "Sign In Now"}</p>
        </div>
      </form>
    </div>
  )
}

export default Login