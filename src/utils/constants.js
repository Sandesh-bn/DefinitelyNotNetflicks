export const API_KEY = process.env.REACT_APP_API_KEY;
export const TMBD_BASE_URL = "https://api.themoviedb.org/3";
export const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + ACCESS_TOKEN
    }
}