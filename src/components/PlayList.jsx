import { Header } from "./Header"
import { API_OPTIONS } from "../utils/constants";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addUpcomingMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { HeroContainer } from "./HeroContainer";
import { SuggestionContainer } from "./SuggestionContainer";
import { AISearch } from "./AISearch";

export function Playlist() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const dispatch = useDispatch();
    
    function handleSearch(){
        setShowSearchBar(true);

    }

    async function getNowPlayingMovies() {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const data = await fetch(url, API_OPTIONS)
            // .then(res => res.json())
            // .then(json => console.log(json))
            // .catch(err => console.error(err));
        const json = await data.json();
        // console.log(json)
        // add movielist to movie part of store
        dispatch(addNowPlayingMovies(json.results));
    }

    async function getPopularMovies(){
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    async function getTopRatedMovies(){
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    async function getUpcomingMovies(){
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
    },[]);


    return (
        <>
            <Header setShowSearchBar={setShowSearchBar} showSearchBar={showSearchBar}/>
            {
                showSearchBar? 
                <AISearch/>:
                <>
                    <HeroContainer/>
                    <SuggestionContainer/>
                </>
            }
        </>
    )
}


/*
    Front Page
        HeroContainer
            - VideoBackground
            - VideoTitle

        SuggestionContainer
            - Row of VideoList
                -- Popular
                -- Now Playing
                -- Trending
                -- Row based on genres
          - each having collection of Cards
*/