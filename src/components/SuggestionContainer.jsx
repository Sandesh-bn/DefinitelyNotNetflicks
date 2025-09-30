import { useSelector } from "react-redux";
import { VideoList } from "./VideoList";


export function SuggestionContainer(){
    const movies = useSelector(store => store.movies);
    // console.log('movies');
    // console.log(movies)
    return(
        <div className="-mt-72 relative z-20 bg-black">
            <VideoList title="Now Playing" shows={movies.nowPlayingMovies}/>
            <VideoList title="Upcoming" shows={movies.upcomingMovies}/>
            <VideoList title="Popular" shows={movies.popularMovies}/>
            <VideoList title="Top Rated" shows={movies.topRatedMovies}/>
        </div>
    )
}