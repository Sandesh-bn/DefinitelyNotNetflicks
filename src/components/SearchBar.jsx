import { useRef } from "react";
import { useDispatch } from "react-redux";
import OpenAI from 'openai';

import { API_OPTIONS, OPENAI_API_KEY } from '../utils/constants';
import { addMovieResult } from "../utils/searchResultSlice";

const client = new OpenAI({
    //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export function SearchBar(movie) {
    const searchTextRef = useRef(null);
        const dispatch = useDispatch();


    async function getMovieInfo(movie) {
        const url = 'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1';
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        console.log('ns');
        console.log(json)
        // returns an array of promises
        return json.results;
    }


    async function handleSubmit(e) {
        console.log("handlesubmit")
        e.preventDefault();
        let searchTerm = searchTextRef.current.value;
        searchTerm = searchTerm.trim();

        if (searchTerm == ''){
            dispatch(addMovieResult([]))
            return;
        }
        
        let content = "Only give me the name of the movies comma separated and do not include numbers, " + searchTerm;
        if (!content.toLocaleLowerCase().endsWith("movies"))
            content += "movies";

        const completion = await client.chat.completions.create({
            //   model: 'gpt-4o',
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content },
            ],
        });
        const gptResult = completion.choices[0].message.content;
        const arrayOfMovies = gptResult.split(",");
        console.log('gptresult');
        console.log(gptResult)

        // // Array of promises from tmdb api call
        const movieDataPromises =  arrayOfMovies.map((movie) => getMovieInfo(movie));
        let movieData = await Promise.all(movieDataPromises);
        // console.log('mdb');
        // console.log(movieData)
        dispatch(addMovieResult(movieData))
    }

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={handleSubmit}>
                <input ref={searchTextRef} className="p-4 m-4 col-span-9" placeholder="Try searching 'Action Movies'" type='text' />
                <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white">Search</button>
            </form>
        </div>
    )
}