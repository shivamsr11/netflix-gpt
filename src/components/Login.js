import React from 'react'
import Header from './Header'
import {useState} from "react"

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true)
  const toggleSignInForm = () =>{
    setIsSignForm(!isSignInForm)
  }

  return (
    <div>
        <Header />
        <div className = "absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt = "bg-logo" />
        </div>
        <form className = "absolute text-white p-12 w-4/12 my-24  mx-auto left-0 right-0 bg-black bg-opacity-90">
          <h1 className = " text-3xl py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm &&
              <input type = "text" placeholder = "    Full Name" className = "py-3 my-3  w-full bg-gray-800 rounded-lg" />
          }
          <input type = "text" placeholder = "    Email or Phone number" className = "py-3 my-3  w-full bg-gray-800 rounded-lg" />
          <input type = "text" placeholder = "    Password" className = "py-3 my-2  w-full bg-gray-800 rounded-lg" />
          <button className = "py-3  my-6  bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <div className = "flex cursor-pointer" onClick = {toggleSignInForm}>
          <p className = "py-3 text-gray-400 ">{isSignInForm ? "New to Netflix?" : "Already registered?"}</p><p className = "py-3 pl-1">{isSignInForm ? "Sign up Now" : "Sign In Now"}</p>
          </div>
        </form>
    </div>
  )
}

export default Login