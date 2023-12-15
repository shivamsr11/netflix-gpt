import {  signOut } from "firebase/auth";
import React, { useEffect } from 'react'
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useSelector,useDispatch } from "react-redux";
import {NETFLIX_LOGO, USER_ICON} from "../utils/constants";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid,email, displayName } = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName}))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
        // User is signed out
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  },[])

  return (
    <div className="absolute  bg-gradient-to-b from-black z-10 flex justify-between w-screen">
       <img className='w-56 px-8 py-2 z-10' src =  {NETFLIX_LOGO}
       alt = "netflix-logo"  />
      {user && (<div>
         <button onClick = {handleSignOut}>
         <img className = "  w-12 h-12 mt-4 mr-24 " src = {USER_ICON} alt = "user-icon" />
         </button>
       </div>)}
    </div>
  )
}

export default Header