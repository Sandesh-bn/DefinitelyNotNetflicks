export const API_KEY = "3b11ae913cb93e59c47575bef5839090";
export const TMBD_BASE_URL = "https://api.themoviedb.org/3"
export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjExYWU5MTNjYjkzZTU5YzQ3NTc1YmVmNTgzOTA5MCIsIm5iZiI6MTc0NDY0MTAxMi45NTgwMDAyLCJzdWIiOiI2N2ZkMWJmNGMxZTBhNzA4Y2JhZDIwODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YhOOk2U_isvn2fYp5bByW0eriGmG6SiUR5xHwaNqH9Y';

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + ACCESS_TOKEN
    }
}