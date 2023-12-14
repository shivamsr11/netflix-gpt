import {  signOut } from "firebase/auth";
import React from 'react'
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between w-screen">
       <img className='w-56 ' src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
       alt = "netflix-logo"  />
       <div>
         <button onClick = {handleSignOut}>
         <img className = " mt-2 w-12 h-12" src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt = "user-icon" />
         </button>
       </div>
    </div>
  )
}

export default Header