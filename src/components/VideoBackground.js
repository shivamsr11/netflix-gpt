
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import {TRAILER_VIDEO} from "../utils/constants"

const VideoBackground = ({movieId}) =>{
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);
    useMovieTrailer(movieId)
  
    return (
        <div >
            <iframe className = "w-screen aspect-video "
             src={TRAILER_VIDEO +trailerVideo?.key + "?&autoplay=1&showinfo=1" }
             title="YouTube video player" 
           ></iframe>
        </div>
    )
}

export default VideoBackground;