import { IMAGE_URL } from "../utils/constants";

export function VideoCard({ posterPath }){
    if (!posterPath)
        return;
    return(
        <div className="w-40 mx-2">
            <img src={IMAGE_URL + posterPath}/>
        </div>
    )
}