import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNewPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
import {MOVIE_LIST} from "../utils/constants"

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () =>{
      const data = await fetch (MOVIE_LIST, API_OPTIONS);
      const json = await data.json();
      dispatch(addNewPlayingMovies(json.results))
    }
  
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
  
}
export default useNowPlayingMovies;