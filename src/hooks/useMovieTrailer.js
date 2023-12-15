import { useEffect } from "react";
import { API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch()

    const getMovieVideos = async () =>{
        const data = await fetch (MOVIE_URL+ movieId +'/videos?language=en-US', API_OPTIONS);
        const json = await data.json()
       
        const filterData = json?.results?.filter(video => video.type === "Trailer")
        const trailer = filterData.length ?  filterData[0] : json?.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    },[])

    return(
        <div></div>
    )
}

export default useMovieTrailer;