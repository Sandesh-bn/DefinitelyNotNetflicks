export const API_KEY = process.env[REACT_APP_API_KEY];
export const TMBD_BASE_URL = process.env[REACT_APP_TMDB_BASE_URL];
export const ACCESS_TOKEN = process.env[REACT_APP_ACCESS_TOKEN];
export const IMAGE_URL = process.env[REACT_APP_IMAGE_URL];
export const OPENAI_API_KEY = process.env[REACT_APP_OPEN_API_KEY];

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + ACCESS_TOKEN
    }
}