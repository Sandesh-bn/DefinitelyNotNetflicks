import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants";

export function VideoBackground({ movieId }) {
    const [trailerId, setTrailerId] = useState(null)
    useEffect(() => {
        getMovieVideos();
    }, [])

    async function getMovieVideos() {

        // fetch the associated videos for movie on hero movie
        const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US';

        const data = await fetch(url, API_OPTIONS)
        const json = await data.json();
        
        // get the youtube id for the first movie trailer 
        const trailers = json.results.filter(video => video.type == 'Trailer');
        const trailer = trailers.length > 0? trailers[0]: json.results[0];
        setTrailerId(trailer.key);
    }   

    return (
        <div className="w-screen">
            {trailerId && 
                <iframe
                    className="w-screen aspect-video"
                    mute="1"
                    src={"https://www.youtube.com/embed/" + trailerId + "?&autoplay=1&mute=1"} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            }
        </div>
    )
}