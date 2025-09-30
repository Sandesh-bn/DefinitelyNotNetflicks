import { useSelector } from "react-redux"
import { VideoTitle } from "./VideoTitle"
import { VideoBackground } from "./VideoBackground"

export function HeroContainer() {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies){
        return;
    }

    const heroMovie = movies[0];
    const { original_title, overview, id } = heroMovie;
    return(
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    )
}