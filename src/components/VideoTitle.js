const VideoTitle = ({title, overview}) =>{
    return (
        <div className = "w-full aspect-video absolute text-white bg-gradient-to-r from-black pt-[15%] px-20">
            <h1 className = "text-4xl font-bold" >{title}</h1>
            <p className = "py-6 text-m w-1/4" >{overview}</p>
            <button className = " font-bold bg-white text-black hover:bg-gray-400 rounded-lg p-1 px-5 text-lg bg-opacity-90 " > ▷  Play</button>
            <button className = "ml-2 font-bold bg-gray-500 text-white rounded-lg p-1 px-5 text-lg bg-opacity-50" > 🛈 More Info</button>
        </div>
    )
}

export default VideoTitle;