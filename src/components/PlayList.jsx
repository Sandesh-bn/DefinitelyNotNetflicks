import { Header } from "./Header"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { HeroContainer } from "./HeroContainer";
import { SuggestionContainer } from "./SuggestionContainer";
export function Playlist() {

    const dispatch = useDispatch();

    async function getNowPlayingMovies() {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        const data = await fetch(url, API_OPTIONS)
            // .then(res => res.json())
            // .then(json => console.log(json))
            // .catch(err => console.error(err));
        const json = await data.json();
        // console.log(json)
        // add movielist to movie part of store
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[]);


    return (
        <>
            <Header />
            <HeroContainer/>
            <SuggestionContainer/>
        </>
    )
}


/*
    Front Page
        HeroContainer
            - VideoBackground
            - VideoTitle

        SuggestionContainer
            - Row of MovieList
          - each having collection of Cards
*/